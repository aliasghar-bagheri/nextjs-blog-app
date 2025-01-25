'use client';

import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister, FieldValues, Path } from 'react-hook-form';
import Input from './Input';
import Label from './Label';
import PasswordInput from './PasswordInput';

interface RHFTextFieldProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  errors: FieldErrors<T>;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  valueAsNumber?: boolean;
}

const RHFTextField = <T extends FieldValues>({
  name,
  label,
  type = 'text',
  register,
  errors,
  isRequired,
  className,
  valueAsNumber,
  ...rest
}: RHFTextFieldProps<T>) => {
  const hasError = errors[name]?.message;

  return (
    <div className="space-y-3 w-full max-w-lg">
      <Label htmlFor={name}>
        {label}
        {isRequired && <span className="text-error ltr:ml-2 rtl:mr-2">*</span>}
      </Label>
      {type === 'password' ? (
        <PasswordInput
          type={type}
          id={name}
          className={`textField block w-full border border-secondary-300 ${className}`}
          {...register(name, { valueAsNumber })}
          {...rest}
        />
      ) : (
        <Input
          type={type}
          id={name}
          className={`textField block w-full border border-secondary-300 ${className}`}
          {...register(name, { valueAsNumber })}
          {...rest}
        />
      )}
      {hasError && <p className="text-error mt-3 text-sm">{hasError.toString()}</p>}
    </div>
  );
};

export default RHFTextField;
