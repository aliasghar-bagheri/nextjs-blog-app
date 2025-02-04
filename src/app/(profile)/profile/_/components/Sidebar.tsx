import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '../constants/sidebarLinks';
import NavLink from './NavLink';
import SignOutButton from './SignoutButton';

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col gap-y-5">
      <Link
        href="/"
        className="flex items-center gap-x-2 justify-center"
      >
        <div className="relative w-6 sm:w-12 h-6 sm:h-12">
          <Image
            src="/assets/images/logo.svg"
            fill
            loading="eager"
            alt="logo"
          />
        </div>
        <p className="text-lg text-nowrap sm:text-3xl font-semibold text-primary dark:text-primary-400">
          دیجی نیوز
        </p>
      </Link>
      <nav className="flex-1 overflow-y-auto mt-5">
        <ul className="space-y-3 h-full overflow-y-auto">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  isPathEqual={item.href}
                >
                  <Icon className="w-5 h-5 " />
                  <p className="text-nowrap text-xs sm:text-sm">{item.label}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto">
        <SignOutButton />
      </div>
    </div>
  );
}
