'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = {
  default: 'btn-default',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
  outline: 'btn-outline',
  link: 'btn-link',
};

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'link';
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const buttonVariant = buttonVariants[variant];
    return (
      <button
        className={clsx(
          `btn flex items-center flex-nowrap gap-x-1 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-inherit text-xs lg:text-sm p-2`,
          className,
          buttonVariant
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
