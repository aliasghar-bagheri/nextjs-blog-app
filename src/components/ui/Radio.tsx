'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import Input from './Input';
import Label from './Label';
import clsx from 'clsx';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: 'radio';
  label?: string;
  direction?: 'horizontal' | 'vertical';
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, direction = 'horizontal', id = '', ...props }, ref) => {
    return (
      <div
        className={clsx('flex flex-nowrap items-center gap-3', {
          'flex-row ': direction === 'horizontal',
          'flex-col ': direction === 'vertical',
        })}
      >
        <Input
          ref={ref}
          id={id}
          {...props}
          type="radio"
        />
        {label && (
          <Label
            htmlFor={id}
            className="cursor-pointer hover:opacity-90 text-nowrap"
          >
            {label}
          </Label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
