import { z } from 'zod';

const emailSchema = z
  .string()
  .min(1, { message: 'ایمیل ضروری است' })
  .email({ message: 'لطفا یک ایمیل معتبر را وارد کنید' })
  .transform((email) => email.toLowerCase());

const passwordSchema = z
  .string()
  .min(8, { message: 'رمز عبور باید بیشتر از 8 کارکتر باشد' })
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'رمز عبور باید شامل عدد, یک کارکتر بزرگ, و یک کارکتر کوچک باشد'
  );

const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

type SignInSchemaType = z.infer<typeof signInSchema>;

export { type SignInSchemaType, emailSchema, passwordSchema, signInSchema };
