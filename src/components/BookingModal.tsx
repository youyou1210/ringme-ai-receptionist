import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  useEffect(() => {
    if (open && window.Cal) {
      window.Cal("init", { origin: "https://cal.com" });
    }
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
              <p className="text-sm text-muted-foreground mt-1">Schedule a personalized walkthrough of RingmeAI</p>
            </div>
          </div>
        </DialogHeader>
        <div className="relative overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            <div 
              className="cal-embed-wrapper animate-fade-in"
              data-cal-link="ringmeai/demo"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
