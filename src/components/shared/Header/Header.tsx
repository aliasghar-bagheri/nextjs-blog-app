import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6">
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

        <div className="flex items-center gap-x-2">
          <Button>ورود</Button>
          <Button variant="primary">ثبت نام</Button>
        </div>
      </div>
    </header>
  );
}
