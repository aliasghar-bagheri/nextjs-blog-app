'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Button from './Button';
import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';
import clsx from 'clsx';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'link';
  fullWidth?: boolean;
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ className, children, ...props }, ref) => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        className={clsx('flex items-center gap-2', className)}
        ref={ref}
        {...props}
      >
        {pending && <SpinnerMini />}
        {children}
      </Button>
    );
  }
);

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
