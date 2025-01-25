'use client';

import Button from '@/components/ui/Button';
import ImageDropzone from '@/components/ui/ImageDropzone';
import Label from '@/components/ui/Label';
import RHFSelect from '@/components/ui/RHFSelect';
import RHFTextarea from '@/components/ui/RHFTextarea';
import RHFTextField from '@/components/ui/RHFTextField';
import { useGetCategories } from '@/hooks/useGetCategories';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useCreatePost } from '../hooks/useCreatePost';
import { useRouter } from 'next/navigation';
import { postSchema, PostSchemaType } from '@/lib/validations/post/post.schema';
import { useEditPost } from '../hooks/useEditPost';
import { IPost } from '@/types';
import SpinnerMini from '@/components/ui/SpinnerMini';

type PostFormProps = { type: 'CREATE' } | { type: 'UPDATE'; initialData: IPost };

export default function PostForm(param: PostFormProps) {
  // Get all categories
  const { categories, isPending: isFetchCategories } = useGetCategories();

  // Create new post
  const { mutate: createNewPost, isPending: isCreating } = useCreatePost();

  // Edit post
  const { mutate: editPost, isPending: isEdititng } = useEditPost();

  let initialData: IPost | undefined;
  const isUpdate = param.type === 'UPDATE' && param.initialData?._id;

  if (isUpdate) {
    initialData = param.initialData;
  }

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postSchema),
    mode: 'onTouched',
    defaultValues: {
      type: initialData?.type || 'free',
      title: initialData?.title || '',
      briefText: initialData?.briefText || '',
      coverImage: initialData?.coverImageUrl || '',
      text: initialData?.text || '',
      slug: initialData?.slug || '',
      readingTime: initialData?.readingTime || 0,
    },
  });

  // Submit form
  const onSubmitPostForm = async (values: PostSchemaType) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(values)) {
      formData.set(key, value as keyof PostSchemaType);
    }

    // Update post
    if (isUpdate) {
      editPost(
        { postId: param.initialData._id, postData: formData },
        {
          onSuccess() {
            reset();
            router.push('/profile/posts');
          },
        }
      );
      return;
    }

    // Create new post
    if (param.type === 'CREATE') {
      createNewPost(formData, {
        onSuccess() {
          reset();
          router.push('/profile/posts');
        },
      });
      return;
    }
  };

  return (
    <fieldset className="w-full">
      <form
        onSubmit={handleSubmit(onSubmitPostForm)}
        className="space-y-4"
      >
        <div className="flex lg:flex-row-reverse flex-col gap-6">
          <div className="flex-1 ">
            <Controller
              name="coverImage"
              rules={{ required: 'کاور پست الزامی است' }}
              control={control}
              render={({ field }) => {
                return (
                  <div className="space-y-3 w-full max-w-lg">
                    <Label htmlFor="coverImage">
                      کاور پست
                      <span className="text-error ltr:ml-2 rtl:mr-2">*</span>
                    </Label>
                    <ImageDropzone
                      imageUrl={typeof field.value === 'string' ? field.value : ''}
                      name="coverImage"
                      onBlur={field.onBlur}
                      onChangeFile={field.onChange}
                    />
                    {errors.coverImage?.message && (
                      <p className="text-error mt-3 text-sm">
                        {errors.coverImage.message.toString()}
                      </p>
                    )}
                  </div>
                );
              }}
            />
          </div>
          <div className="flex-1 grid grid-cols-1 gap-3">
            <RHFTextField
              label="عنوان"
              name="title"
              placeholder="پست جدید"
              register={register}
              errors={errors}
              isRequired
            />
            <RHFTextField
              label="اسلاگ"
              name="slug"
              placeholder="مثال: new post"
              register={register}
              errors={errors}
              isRequired
            />
            <RHFTextField
              label="متن خلاصه"
              name="briefText"
              placeholder="یک پست جدید برای آموزش کارکردن با فرم"
              register={register}
              errors={errors}
              isRequired
            />
            <RHFSelect
              label="نوع پست"
              name="type"
              register={register}
              options={[
                {
                  value: 'free',
                  label: 'رایگان',
                },
                {
                  value: 'premium',
                  label: 'پولی',
                },
              ]}
              errors={errors}
              isRequired
            />
            <RHFSelect
              label="دسته بندی"
              name="category"
              register={register}
              options={categories}
              errors={errors}
              disabled={isFetchCategories}
              defaultValue={isUpdate ? param.initialData.category._id : ''}
              isRequired
            />
            <RHFTextField
              type="number"
              label="زمان مطالعه"
              placeholder="1"
              name="readingTime"
              register={register}
              errors={errors}
              valueAsNumber
              isRequired
            />
            <RHFTextarea
              label="متن"
              name="text"
              register={register}
              errors={errors}
              isRequired
            />
          </div>
        </div>

        <Button
          disabled={!isValid || isCreating || isEdititng}
          className="flex items-center gap-2"
          variant="primary"
        >
          {(isCreating || isEdititng) && <SpinnerMini />}
          {param.type === 'UPDATE' ? 'بروزرسانی' : 'ایجاد'}
        </Button>
      </form>
    </fieldset>
  );
}
