import clsx from 'clsx';
import { forwardRef, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={clsx('inputField', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

const Option = forwardRef<HTMLOptionElement, OptionHTMLAttributes<HTMLOptionElement>>(
  (props, ref) => {
    return (
      <option
        ref={ref}
        {...props}
      />
    );
  }
);

Option.displayName = 'Option';

export { Select, Option };
