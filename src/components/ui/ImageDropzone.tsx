'use client';

import Image from 'next/image';
import { forwardRef, InputHTMLAttributes, MouseEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from './Button';
import { CloudArrowDownIcon } from '@heroicons/react/24/outline';
import ButtonIcon from './ButtonIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Input from './Input';
import { z, ZodError } from 'zod';
import { handleError } from '@/utils/handleError';
import toast from 'react-hot-toast';

interface ImageDropzoneProps extends InputHTMLAttributes<HTMLInputElement> {
  imageUrl?: string;
  className?: string;
  onChangeFile: (file?: File | null) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ImageSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, { message: 'حجم فایل باید کمتر از 5 مگابایت باشد' })
  .refine((file) => ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'].includes(file.type), {
    message: 'فرمت کاور پست معتبر نیست',
  });

const ImageDropzone = forwardRef<HTMLInputElement, ImageDropzoneProps>(
  ({ imageUrl, onChangeFile, className, ...props }, ref) => {
    const [fileUrl, setFileUrl] = useState<string | undefined>(imageUrl);
    const onDrop = useCallback(
      (acceptedFiles: File[]) => {
        try {
          ImageSchema.parse(acceptedFiles[0]);

          const file = URL.createObjectURL(acceptedFiles[0]);
          setFileUrl(file);

          onChangeFile(acceptedFiles[0]);
        } catch (error) {
          const message = error instanceof ZodError ? error.issues[0].message : handleError(error);
          toast.error(message);
        }
      },
      [onChangeFile]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      multiple: false,
      onDrop,
    });

    const removeFile = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setFileUrl(undefined);
      onChangeFile();
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'relative w-full max-w-lg flex border border-secondary-200 bg-secondary-200 h-60 xl:h-96 flex-col items-center justify-center gap-y-4 overflow-hidden rounded transition-all',
          className,
          {
            'brightness-105': isDragActive,
          }
        )}
        {...getRootProps(props)}
      >
        <Input
          {...getInputProps()}
          {...props}
        />
        {fileUrl ? (
          <>
            <Image
              src={fileUrl}
              fill
              alt="image"
              className="object-cover"
            />
            <ButtonIcon
              onClick={removeFile}
              variant="secondary"
              className="absolute right-3 top-3 scale-75"
            >
              <XMarkIcon />
            </ButtonIcon>
          </>
        ) : (
          <>
            <CloudArrowDownIcon
              width={50}
              height={50}
            />
            <p className="text-center text-xs font-medium">
              فرمت هایی مثل (.png .jpg .jpeg .svg) بکشید و رها کنید
            </p>
            <Button
              type="button"
              variant="outline"
              className="text-sm"
            >
              انتخاب فایل ها
            </Button>
          </>
        )}
      </div>
    );
  }
);

ImageDropzone.displayName = 'Dropzone';

export default ImageDropzone;
