'use client';

import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface SignOutButtonProps {
  className?: string;
}

const SignOutButton = ({ className }: SignOutButtonProps) => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <Button
      onClick={handleSignOut}
      className={clsx(
        'text-right flex items-center gap-x-2 text-red-500 py-3 text-xs sm:text-base',
        className
      )}
      fullWidth
    >
      <ArrowRightEndOnRectangleIcon
        width={27}
        height={27}
      />
      خروج
    </Button>
  );
};

export default SignOutButton;
