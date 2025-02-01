import { TextareaHTMLAttributes, useState } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import Label from './Label';
import Textarea from './Textarea';
import clsx from 'clsx';
import Button from './Button';
import { MarkdownContent } from '@/lib/react-markdown/Markdown';

interface RHFMarkdownPreviewProps<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errors: FieldErrors<T>;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  value?: string;
}

export default function RHFMarkdownPreview<T extends FieldValues>({
  name,
  label,
  register,
  errors,
  isRequired,
  className,
  value,
  ...rest
}: RHFMarkdownPreviewProps<T>) {
  const hasError = errors[name]?.message;
  const [state, setState] = useState<'PREVIEW' | 'EDITOR'>('EDITOR');

  return (
    <div className="space-y-3 w-full">
      <Label htmlFor={name}>
        {label}
        {isRequired && <span className="text-error ltr:ml-2 rtl:mr-2">*</span>}
      </Label>
      <div className="w-full">
        <Button
          onClick={() => setState('EDITOR')}
          variant={state === 'EDITOR' ? 'outline' : 'default'}
          type="button"
          className="text-sm"
        >
          ویرایشگر
        </Button>
        <Button
          onClick={() => setState('PREVIEW')}
          variant={state === 'PREVIEW' ? 'outline' : 'default'}
          type="button"
          className="text-sm"
        >
          پیش نمایش
        </Button>
      </div>
      {state === 'EDITOR' ? (
        <Textarea
          id={name}
          className={clsx('textField block w-full border border-secondary-300 min-h-96', className)}
          {...register(name)}
          {...rest}
        />
      ) : (
        <MarkdownContent className="min-h-96 bg-secondary-0 overflow-y-auto rounded p-3">
          {value}
        </MarkdownContent>
      )}
      {hasError && <p className="text-error mt-3 text-sm">{hasError.toString()}</p>}
    </div>
  );
}
