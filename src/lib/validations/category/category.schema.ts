import { z } from 'zod';

const categorySchema = z.object({
  title: z
    .string()
    .min(3, { message: 'عنوان دسته بندی باید بیشتر از 3 کارکتر باشد' })
    .max(100, { message: 'عنوان دسته بندی باید کمتر از 100 کارکتر باشد' }),
  englishTitle: z
    .string()
    .min(3, { message: 'عنوان انگلیسی دسته بندی باید بیشتر از 3 کارکتر باشد' })
    .max(100, { message: 'عنوان انگلیسی دسته بندی باید کمتر از 100 کارکتر باشد' }),
  description: z
    .string()
    .min(3, { message: 'توضیحات دسته بندی باید بیشتر از 3 کارکتر باشد' })
    .max(200, { message: 'توضیحات دسته بندی باید کمتر از 200 کارکتر باشد' }),
});

type CategorySchemaType = z.infer<typeof categorySchema>;

export { type CategorySchemaType, categorySchema };
