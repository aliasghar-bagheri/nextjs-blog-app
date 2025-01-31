'use client';

import Avatar from '@/components/ui/Avatar';
import ButtonIcon from '@/components/ui/ButtonIcon';
import Drawer from '@/components/ui/Drawer';
import { useAuth } from '@/context/AuthContext';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { BellIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { user, isPending } = useAuth();
  const [isShowHeader, setIsShowHeader] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsShowHeader(false);
  }, [pathname]);

  return (
    <header
      className={clsx('w-full flex items-center justify-between p-6 transition-all duration-300', {
        'blur-md': isPending,
      })}
    >
      <ButtonIcon
        onClick={() => setIsShowHeader(true)}
        className="lg:hidden"
        variant="outline"
      >
        <Bars3BottomRightIcon />
      </ButtonIcon>
      <h4 className="text-xl font-semibold hidden sm:block">خوش آمدی {user?.name} عزیز 👋</h4>
      <div className="flex items-center gap-x-5">
        <BellIcon
          width={25}
          height={25}
        />
        <Avatar
          src={user?.avatarUrl || '/assets/images/user-placeholder.svg'}
          alt={user?.name || ''}
        />
      </div>
      <Drawer
        open={isShowHeader}
        onClose={() => setIsShowHeader(false)}
      >
        <div className="flex flex-col justify-between h-full">
          <Sidebar />
        </div>
      </Drawer>
    </header>
  );
}
