'use client';

import Button from '@/components/ui/Button';
import RHFTextField from '@/components/ui/RHFTextField';
import SpinnerMini from '@/components/ui/SpinnerMini';
import { signInSchema, SignInSchemaType } from '@/lib/validations/user/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  });

  const handleSignInForm = async (values: SignInSchemaType) => {
    console.log(values);
  };

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
        <h2 className="text-2xl font-semibold text-secondary-800">وارد حساب کاربری خود شوید</h2>
        <p className="mt-3 text-secondary-600">خوش آمدید! لطفا مشخصات خود را وارد کنید.</p>
      </div>
      <fieldset
        disabled={isSubmitting}
        className="w-full"
      >
        <form
          onSubmit={handleSubmit(handleSignInForm)}
          className="w-full flex flex-col items-center space-y-5"
        >
          <RHFTextField
            name="email"
            type="email"
            label="ایمیل"
            register={register}
            errors={errors}
            isRequired
          />

          <RHFTextField
            name="password"
            type="password"
            label="رمز عبور"
            register={register}
            errors={errors}
            isRequired
          />
          <Button
            disabled={!isValid || isSubmitting}
            variant="primary"
            fullWidth
          >
            {isSubmitting ? <SpinnerMini /> : 'ورود'}
          </Button>
        </form>
      </fieldset>
      <p>
        حساب کاربری ندارید؟
        <Link
          href="/auth/sign-up"
          className="text-primary rtl:mr-2 ltr:ml-2"
        >
          ثبت نام
        </Link>
      </p>
    </div>
  );
}
