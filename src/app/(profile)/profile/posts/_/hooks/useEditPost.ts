import { QUERY_KEYS } from '@/lib/tanstack-query/queryKeys';
import { editPostApi } from '@/services/post.service';
import { handleError } from '@/utils/handleError';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useEditPost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.EDIT_POST],
    mutationFn: editPostApi,
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
