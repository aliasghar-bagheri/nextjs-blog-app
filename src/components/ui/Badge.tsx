import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <span
        className={clsx('badge', className, {
          'badge-primary': variant === 'primary',
          'badge-secondary': variant === 'secondary',
          'badge-error': variant === 'error',
          'badge-success': variant === 'success',
          'badge-warning': variant === 'warning',
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
