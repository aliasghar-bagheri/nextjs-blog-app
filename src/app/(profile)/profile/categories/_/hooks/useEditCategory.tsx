import { QUERY_KEYS } from '@/lib/tanstack-query/queryKeys';
import { editCategoryApi } from '@/services/category.service';
import { handleError } from '@/utils/handleError';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useEditCategory = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.CREATE_NEW_CATEGORY],
    mutationFn: editCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      const message = handleError(error);

      toast.error(message);
    },
  });

  return { mutate, isPending };
};
