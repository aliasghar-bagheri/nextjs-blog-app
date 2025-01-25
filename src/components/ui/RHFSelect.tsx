'use client';

import { FieldErrors, UseFormRegister, FieldValues, Path } from 'react-hook-form';
import Label from './Label';
import clsx from 'clsx';
import { Option, Select } from './Select';
import { SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface RHFSelectProps<T extends FieldValues> extends SelectHTMLAttributes<HTMLSelectElement> {
  errors: FieldErrors<T>;
  isRequired?: boolean;
  options: Option[];
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
}

const RHFSelect = <T extends FieldValues>({
  name,
  label,
  register,
  errors,
  options = [],
  isRequired,
  className,
  ...props
}: RHFSelectProps<T>) => {
  const hasError = errors[name]?.message;

  return (
    <div className="space-y-3 w-full max-w-lg">
      <Label htmlFor={name}>
        {label}
        {isRequired && <span className="text-error ltr:ml-2 rtl:mr-2">*</span>}
      </Label>
      <Select
        id={name}
        className={clsx('textField block w-full border border-secondary-300', className)}
        {...register(name)}
        {...props}
      >
        {options.map((item, index) => (
          <Option
            key={index}
            value={item.value}
          >
            {item.label}
          </Option>
        ))}
      </Select>
      {hasError && <p className="text-error mt-3 text-sm">{hasError.toString()}</p>}
    </div>
  );
};

export default RHFSelect;
