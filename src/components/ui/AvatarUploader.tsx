import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react';
import Input from './Input';
import Label from './Label';
import { PencilIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { z, ZodError } from 'zod';
import { handleError } from '@/utils/handleError';
import Image from 'next/image';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ImageSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, { message: 'حجم فایل باید کمتر از 5 مگابایت باشد' })
  .refine((file) => ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'].includes(file.type), {
    message: 'فرمت فایل معتبر نیست',
  });

interface AvatarUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (file: File) => void;
}

const AvatarUploader = forwardRef<HTMLInputElement, AvatarUploaderProps>(
  ({ id = 'avatar-uploader', src, name = 'avatar-uploader', handleChange, ...props }, ref) => {
    const [avatarSrc, setAvatarSrc] = useState<string>(
      src || '/assets/images/user-placeholder.svg'
    );

    const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;

      if (files && files?.length > 0) {
        try {
          ImageSchema.parse(files[0]);

          const fileUrl = URL.createObjectURL(files[0]);
          setAvatarSrc(fileUrl);
          if (handleChange) handleChange(files[0]);
        } catch (error) {
          const message = error instanceof ZodError ? error.issues[0].message : handleError(error);
          return toast.error(message);
        }
      }
    };

    return (
      <div className="relative w-36 h-36">
        <Image
          src={avatarSrc}
          fill
          className="object-cover rounded-full"
          alt="profile"
        />
        <Input
          type="file"
          name={name}
          accept="image/*"
          id={id}
          ref={ref}
          className="invisible pointer-events-none"
          onChange={handleChangeAvatar}
          {...props}
        />
        <Label
          htmlFor={id}
          className="bg-primary absolute w-10 h-10 flex items-center top-3/4 right-2 justify-center rounded-full cursor-pointer"
        >
          <PencilIcon
            width={20}
            height={20}
            className="stroke-white"
          />
        </Label>
      </div>
    );
  }
);

AvatarUploader.displayName = 'AvatarUploader';

export default AvatarUploader;
