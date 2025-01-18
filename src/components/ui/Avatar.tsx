'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { forwardRef } from 'react';

const Avatar = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, ...props }, ref) => (
    <div className={clsx('relative h-11 w-11 overflow-hidden rounded-full', className)}>
      <Image
        src={src || '/assets/images/user-placeholder.svg'}
        fill
        alt={alt}
        className="rounded-full object-cover"
        ref={ref}
        {...props}
      />
    </div>
  )
);
Avatar.displayName = 'Avatar';

export default Avatar;
