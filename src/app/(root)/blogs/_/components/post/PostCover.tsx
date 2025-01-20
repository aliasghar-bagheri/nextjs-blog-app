'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { forwardRef, useState } from 'react';

interface PostCoverProps extends ImageProps {
  containerClassName?: string;
}

const PostCover = forwardRef<HTMLImageElement, PostCoverProps>(
  ({ containerClassName, className, src, alt, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div className={clsx('w-full relative h-60 overflow-hidden rounded', containerClassName)}>
        <Image
          src={!hasError ? src : '/assets/images/cover-post.png'}
          className={clsx('object-cover transition-all', className)}
          onError={() => setHasError(true)}
          alt={alt}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
PostCover.displayName = 'PostCover';

export default PostCover;
