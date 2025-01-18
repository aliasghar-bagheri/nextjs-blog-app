'use client';

import Button from '@/components/ui/Button';
import RHFTextField from '@/components/ui/RHFTextField';
import SpinnerMini from '@/components/ui/SpinnerMini';
import { useAuth } from '@/context/AuthContext';
import { signInSchema, SignInSchemaType } from '@/lib/validations/user/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function SignInForm() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  });

  const handleSignInForm = async (values: SignInSchemaType) => {
    await signIn(values);
  };

  return (
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
  );
}
