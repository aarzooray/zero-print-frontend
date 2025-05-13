
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarClock } from 'lucide-react';

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  featureName: string;
}

const ComingSoonDialog: React.FC<ComingSoonDialogProps> = ({
  open,
  onOpenChange,
  featureName
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-0 shadow-xl rounded-xl overflow-hidden bg-gradient-to-br from-white via-white to-zeroprint-cream/30">
        <div className="absolute inset-0 bg-gradient-to-br from-zeroprint-green/5 to-zeroprint-cream/10 -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zeroprint-green/80 to-zeroprint-green/20"></div>
        
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-zeroprint-green">
            <div className="bg-gradient-to-br from-zeroprint-green/10 to-zeroprint-green/5 p-2 rounded-full">
              <CalendarClock className="w-6 h-6 text-zeroprint-green" /> 
            </div>
            <span className="text-xl font-semibold">Coming Soon</span>
          </DialogTitle>
          
          <DialogDescription className="pt-6 text-center">
            <div className="mb-5">
              <div className="bg-gradient-to-br from-zeroprint-green/10 to-zeroprint-green/5 p-6 rounded-xl mb-5 shadow-inner border border-zeroprint-green/10">
                <p className="text-lg font-medium text-zeroprint-green">{featureName}</p>
              </div>
              <p className="text-gray-600">
                We're working hard to bring you this feature. Join our waitlist to be notified when it's ready!
              </p>
            </div>
            
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => onOpenChange(false)}
                className="mt-2 bg-zeroprint-green text-white px-6 py-2.5 rounded-lg hover:bg-zeroprint-green/90 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Got it</span>
              </button>
            </div>
            
            <div className="mt-6 text-xs text-gray-400">
              Want to be the first to know? <a href="#join-waitlist" onClick={() => onOpenChange(false)} className="text-zeroprint-green hover:underline">Join our waitlist</a>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
