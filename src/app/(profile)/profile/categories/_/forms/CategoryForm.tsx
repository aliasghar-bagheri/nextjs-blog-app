'use client';

import Button from '@/components/ui/Button';
import RHFTextarea from '@/components/ui/RHFTextarea';
import RHFTextField from '@/components/ui/RHFTextField';
import { categorySchema, CategorySchemaType } from '@/lib/validations/category/category.schema';
import { ICategory } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCreateCategory } from '../hooks/useCreateCategory';
import { useEditCategory } from '../hooks/useEditCategory';
import { useRouter } from 'next/navigation';
import SpinnerMini from '@/components/ui/SpinnerMini';

type TFormType = 'CREATE' | 'UPDATE';

interface BaseCategoryFormProps {
  type: TFormType;
  onCloseModal: () => void;
}

interface IUpdateFormProps extends BaseCategoryFormProps {
  type: 'UPDATE';
  initialData: ICategory;
}

interface ICreateFormProps extends BaseCategoryFormProps {
  type: 'CREATE';
}

type TCategoryFormProps = IUpdateFormProps | ICreateFormProps;

export default function CategoryForm(params: TCategoryFormProps) {
  const { mutate: createNewCategory, isPending: isCreating } = useCreateCategory();
  const { mutate: editCategory, isPending: isEditing } = useEditCategory();

  const router = useRouter();

  let initialData = {} as ICategory;
  const isUpdate = params.type === 'UPDATE' && params.initialData;
  if (isUpdate) {
    initialData = params.initialData;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(categorySchema),
    mode: 'onTouched',
    defaultValues: initialData,
  });

  const handleCategoryForm = (values: CategorySchemaType) => {
    if (isUpdate) {
      editCategory(
        { categoryId: initialData._id, data: values },
        {
          onSuccess() {
            router.refresh();
            params.onCloseModal();
          },
        }
      );
    }

    if (params.type === 'CREATE') {
      createNewCategory(values, {
        onSuccess() {
          router.refresh();
          params.onCloseModal();
        },
      });
    }
  };

  return (
    <fieldset className="w-full">
      <form
        onSubmit={handleSubmit(handleCategoryForm)}
        className="max-w-lg mx-auto space-y-3 w-full"
      >
        <RHFTextField
          name="title"
          label="عنوان"
          register={register}
          errors={errors}
          placeholder="تکنولوژی"
          isRequired
        />
        <RHFTextField
          name="englishTitle"
          label="عنوان انگلیسی"
          register={register}
          errors={errors}
          placeholder="technology"
          isRequired
        />
        <RHFTextarea
          name="description"
          label="توضیحات"
          register={register}
          errors={errors}
          className="resize-none"
          isRequired
        />
        <Button
          disabled={!isValid || isCreating || isEditing}
          className="flex items-center justify-center"
          variant="primary"
          fullWidth
        >
          {isCreating || isEditing ? <SpinnerMini /> : isUpdate ? 'بروزرسانی' : 'ایجاد'}
        </Button>
      </form>
    </fieldset>
  );
}
