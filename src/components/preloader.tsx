
'use client';

import { DraftingCompass } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  isLoading: boolean;
}

export function Preloader({ isLoading }: PreloaderProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <DraftingCompass className="h-16 w-16 animate-spin text-primary" />
      </div>
    </div>
  );
}
