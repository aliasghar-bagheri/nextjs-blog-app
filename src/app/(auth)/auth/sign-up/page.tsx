import SignUpForm from '@/app/(auth)/auth/_/forms/SignUpForm';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ثبت نام',
};

export default function SignUpPage() {
  return (
    <div className="max-w-sm w-full rounded space-y-6 flex flex-col items-center">
      <Link
        href="/"
        className="flex items-center gap-x-2"
      >
        <div className="relative w-12 h-12">
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
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-secondary-800">حساب کاربری خود را ایجاد کنید</h2>
        <p className="mt-3 text-secondary-600">خوش آمدید! لطفا مشخصات خود را وارد کنید.</p>
      </div>
      <SignUpForm />
      <p>
        حساب کاربری دارید؟
        <Link
          href="/auth/sign-in"
          className="text-primary rtl:mr-2 ltr:ml-2"
        >
          ورود
        </Link>
      </p>
    </div>
  );
}
