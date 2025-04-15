import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={`flex justify-center items-center p-8 ${className}`}>
      <Loader2 className="w-10 h-10 text-secondary animate-spin" />
    </div>
  );
};
