import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '../constants/sidebarLinks';
import NavLink from './NavLink';
import SignOutButton from './SignoutButton';

export default function Sidebar() {
  return (
    <>
      <div className="space-y-10">
        <Link
          href="/"
          className="flex items-center gap-x-2 justify-center"
        >
          <div className="relative w-12 h-12">
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
        <nav>
          <ul className="space-y-3">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    isPathEqual={item.href}
                  >
                    <Icon
                      width={27}
                      height={27}
                    />
                    <p className="text-nowrap">{item.label}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <SignOutButton />
    </>
  );
}
