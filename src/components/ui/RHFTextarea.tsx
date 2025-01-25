'use client';

import { TextareaHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister, FieldValues, Path } from 'react-hook-form';
import Label from './Label';
import Textarea from './Textarea';
import clsx from 'clsx';

interface RHFTextareaProps<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errors: FieldErrors<T>;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
}

const RHFTextarea = <T extends FieldValues>({
  name,
  label,
  register,
  errors,
  isRequired,
  className,
  ...rest
}: RHFTextareaProps<T>) => {
  const hasError = errors[name]?.message;

  return (
    <div className="space-y-3 w-full max-w-lg">
      <Label htmlFor={name}>
        {label}
        {isRequired && <span className="text-error ltr:ml-2 rtl:mr-2">*</span>}
      </Label>
      <Textarea
        id={name}
        className={clsx('textField block w-full border border-secondary-300', className)}
        {...register(name)}
        {...rest}
      />
      {hasError && <p className="text-error mt-3 text-sm">{hasError.toString()}</p>}
    </div>
  );
};

export default RHFTextarea;
