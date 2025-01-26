'use client';

import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { isPending, isAuthenticated, user } = useAuth();

  return (
    <header
      className={clsx('w-full py-6 transition-all duration-300', {
        'blur-md': isPending,
      })}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-x-2"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/assets/images/logo.svg"
              fill
              loading="eager"
              alt="logo"
            />
          </div>
          <p className="text-lg text-nowrap sm:text-xl font-semibold text-primary dark:text-primary-400">
            دیجی نیوز
          </p>
        </Link>

        {isAuthenticated && user?._id ? (
          <Link href="/profile">
            <Avatar
              src={user.avatarUrl || '/assets/images/user-placeholder.svg'}
              alt={user.name}
            />
          </Link>
        ) : (
          <div className="flex items-center gap-x-2">
            <Link href="/auth/sign-in">
              <Button>ورود</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button variant="primary">ثبت نام</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
