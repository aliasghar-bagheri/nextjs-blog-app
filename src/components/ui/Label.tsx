import clsx from 'clsx';
import { forwardRef, LabelHTMLAttributes } from 'react';

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={clsx('text-sm font-medium', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export default Label;
