import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  calLink?: string; // e.g. "ringmeai/15min"
}

declare global {
  interface Window {
    Cal: any;
  }
}

export const BookingModal = ({ open, onOpenChange, calLink = 'ringmeai/15min' }: BookingModalProps) => {
  const calContainerRef = useRef<HTMLDivElement>(null);
  const isCalInitialized = useRef(false);

  // Ensure Cal.com's embed CSS is present (needed for proper month/day UI)
  const loadCalStyles = () =>
    new Promise<void>((resolve) => {
      const id = 'cal-embed-styles';
      if (document.getElementById(id)) return resolve();
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://app.cal.com/embed/embed.css';
      link.onload = () => resolve();
      document.head.appendChild(link);
    });

  const loadCalScript = () =>
    new Promise<void>((resolve) => {
      if (window.Cal) return resolve();
      const existing = document.querySelector<HTMLScriptElement>('script[src="https://app.cal.com/embed/embed.js"]');
      if (existing) {
        if ((existing as any).readyState === 'complete' || existing.getAttribute('data-loaded') === 'true') {
          const poll = setInterval(() => {
            if (window.Cal) {
              clearInterval(poll);
              resolve();
            }
          }, 50);
          setTimeout(() => {
            clearInterval(poll);
            resolve();
          }, 3000);
        } else {
          existing.addEventListener('load', () => resolve(), { once: true });
        }
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = () => {
        script.setAttribute('data-loaded', 'true');
        resolve();
      };
      document.head.appendChild(script);
    });

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      if (!open || !calContainerRef.current || isCalInitialized.current) return;

      console.log('[BookingModal] Opening modal, preparing Cal embed');
      // Load CSS and JS (in parallel) before initializing
      await Promise.all([loadCalStyles(), loadCalScript()]);
      if (cancelled || !window.Cal) {
        console.warn('[BookingModal] Cal API not available after load');
        return;
      }

      console.log('[BookingModal] Cal API available, initializing inline embed for', calLink);
      window.Cal('init', { origin: 'https://cal.com' });
      window.Cal('inline', {
        elementOrSelector: calContainerRef.current,
        calLink,
        layout: 'month_view',
        config: { theme: 'dark' },
      });

      // Robust fallback: if inline hasn't injected content, use an iframe embed
      setTimeout(() => {
        const hasContent = calContainerRef.current?.children.length;
        if (!hasContent && calContainerRef.current) {
          console.warn('[BookingModal] Inline embed did not render, falling back to iframe:', calLink);
          calContainerRef.current.innerHTML = `
            <iframe
              src="https://cal.com/${calLink}?embed=true&layout=month_view&theme=dark"
              style="width:100%;min-height:630px;border:0;"
              loading="lazy"
            ></iframe>`;
        }
      }, 1200);

      isCalInitialized.current = true;
    };
    init();

    return () => {
      cancelled = true;
      if (!open) {
        isCalInitialized.current = false;
        if (calContainerRef.current) {
          calContainerRef.current.innerHTML = '';
        }
      }
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-card via-card to-card/80 border-primary/20">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gradient">Book Your Demo</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                Schedule a personalized walkthrough of RingmeAI
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="relative overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            <div 
              id="ringmeai-cal"
              ref={calContainerRef}
              className="cal-inline-embed animate-fade-in"
              style={{ width: "100%", minHeight: "630px" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
