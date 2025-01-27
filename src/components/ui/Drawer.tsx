'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ButtonIcon from './ButtonIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Drawer({ open, onClose, children }: DrawerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient &&
    open &&
    createPortal(
      <>
        {/* Overlay */}
        <div className="fixed pointer-events-none top-0 left-0 w-full h-screen bg-secondary-300/30 backdrop-blur z-50"></div>
        {/* Drawer content */}
        <div
          role="dialog"
          className="absolute top-0 right-0 w-full max-w-80 bg-secondary-0 h-full p-7 z-50 space-y-8 flex animate-fade-in-right flex-col shadow-lg"
        >
          {/* Close button */}
          <div>
            <ButtonIcon
              onClick={onClose}
              variant="outline"
            >
              <XMarkIcon />
            </ButtonIcon>
          </div>

          <div className="flex-1">{children}</div>
        </div>
      </>,
      document.body
    )
  );
}
