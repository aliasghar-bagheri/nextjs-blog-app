'use client';

import Button from '@/components/ui/Button';
import RHFTextField from '@/components/ui/RHFTextField';
import { signUpSchema, SignUpSchemaType } from '@/lib/validations/user/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/context/AuthContext';
import SpinnerMini from '@/components/ui/SpinnerMini';

export default function SignUpForm() {
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignUpSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema),
  });

  const handleSignUpForm = async (values: SignUpSchemaType) => {
    await signUp(values);
  };

  return (
    <fieldset
      disabled={isSubmitting}
      className="w-full"
    >
      <form
        onSubmit={handleSubmit(handleSignUpForm)}
        className="w-full flex flex-col items-center space-y-5"
      >
        <RHFTextField
          name="name"
          type="text"
          label="نام"
          register={register}
          errors={errors}
          isRequired
        />
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
          {isSubmitting ? <SpinnerMini /> : 'ثبت نام'}
        </Button>
      </form>
    </fieldset>
  );
}
