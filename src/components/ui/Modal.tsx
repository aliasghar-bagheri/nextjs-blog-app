'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ButtonIcon from './ButtonIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && open
    ? createPortal(
        <>
          {/* Overlay */}
          <div className="fixed pointer-events-none top-0 left-0 w-full h-screen bg-secondary-300/30 backdrop-blur z-50"></div>
          <div className="w-full absolute top-0 left-0 z-[60] h-full flex items-center justify-center px-4">
            <div className="max-w-xl p-5 rounded space-y-6 bg-secondary-0">
              <div className="flex items-center justify-between gap-3 border-b border-b-secondary-200 pb-4">
                <h5 className="text-xl font-bold">{title}</h5>
                <ButtonIcon
                  onClick={onClose}
                  variant="outline"
                >
                  <XMarkIcon />
                </ButtonIcon>
              </div>
              <div className="w-full">{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;
