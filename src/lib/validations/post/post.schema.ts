import { z } from 'zod';

const postSchema = z.object({
  title: z
    .string({ message: 'عنوان پست الزامی است' })
    .min(1, 'عنوان پست باید حداقل 5 کارکتر باشد')
    .max(100, 'عنوان پست باید کمتر از 100 کارکتر باشد'),
  briefText: z
    .string({ message: 'متن خلاصه الزامی است' })
    .min(2, { message: 'متن خلاصه ی پست باید حداقل 2 کارکتر باشد' }),
  coverImage: z
    .string({ message: 'کاور پست را آپلود کنید' })
    .min(3, { message: 'کاور پست الزامی است' })
    .or(z.instanceof(File, { message: 'کاور پست الزامی است' })),
  slug: z
    .string({ message: 'اسلاگ پست الزامی است' })
    .min(2, { message: 'اسلاگ پست باید حداقل 2 کارکتر باشد' }),
  type: z
    .union([z.literal('free'), z.literal('premium')], {
      message: 'نوع پست را به درستی انتخاب کنید',
    })
    .default('free'),
  category: z.string({ message: 'شناسه ی دسته بندی الزامی است' }),
  readingTime: z
    .number({ message: 'زمان مطالعه الزامی است' })
    .positive({ message: 'زمان مطالعه نمیتواند 0 یا عددی منفی باشد' })
    .min(1, { message: 'زمان مطالعه باید شامل یک عدد باشد' }),
  text: z
    .string({ message: 'متن پست را به درستی وارد کنید' })
    .min(10, { message: 'متن پست باید حداقل 10 کارکتر باشد' }),
});

type PostSchemaType = z.infer<typeof postSchema>;

export { type PostSchemaType, postSchema };
