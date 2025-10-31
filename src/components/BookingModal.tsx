import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

declare global {
  interface Window {
    Cal: any;
  }
}

export const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const calContainerRef = useRef<HTMLDivElement>(null);
  const isCalInitialized = useRef(false);

  useEffect(() => {
    if (open && window.Cal && calContainerRef.current && !isCalInitialized.current) {
      // Initialize Cal.com
      window.Cal("init", { origin: "https://cal.com" });
      
      // Small delay to ensure Cal is ready
      setTimeout(() => {
        if (calContainerRef.current) {
          window.Cal("inline", {
            elementOrSelector: calContainerRef.current,
            calLink: "ringmeai/demo",
            layout: "month_view",
            config: {
              theme: "dark"
            }
          });
          isCalInitialized.current = true;
        }
      }, 100);
    }

    // Reset when modal closes
    return () => {
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
