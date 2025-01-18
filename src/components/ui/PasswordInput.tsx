'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';
import Input from './Input';
import { EyeIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/24/outline';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, disabled, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="w-full max-w-lg relative">
        <Input
          disabled={disabled}
          type={showPassword ? 'text' : 'password'}
          className={`textField block w-full border border-secondary-300 rtl:pl-10 ltr:pr-10 ${className}`}
          ref={ref}
          {...props}
        />
        {type === 'password' && !disabled && (
          <span
            onClick={() => setShowPassword((prevShow) => !prevShow)}
            className="absolute top-1/2 -translate-y-1/2 rtl:left-1 ltr:right-1 cursor-pointer p-2 text-secondary-800"
          >
            {showPassword ? (
              <EyeSlashIcon
                width={20}
                height={20}
              />
            ) : (
              <EyeIcon
                width={20}
                height={20}
              />
            )}
          </span>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
