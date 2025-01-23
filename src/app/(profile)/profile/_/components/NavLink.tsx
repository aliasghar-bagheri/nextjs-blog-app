'use client';

import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, ReactNode } from 'react';

interface NavLinkProps extends LinkProps {
  children?: ReactNode;
  className?: string;
  isPathEqual?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, isPathEqual, children, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <Link
        className={clsx(
          'flex items-center gap-x-2 transition-all text-lg px-4 py-3 hover:text-primary rounded',
          className,
          {
            'bg-primary text-white hover:bg-primary/90 hover:text-white/90 font-bold':
              pathname === isPathEqual,
          }
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';

export default NavLink;
