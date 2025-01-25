import { QUERY_KEYS } from '@/lib/tanstack-query/queryKeys';
import { deletePostApi } from '@/services/post.service';
import { handleError } from '@/utils/handleError';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDeletePost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_POST],
    mutationFn: deletePostApi,
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
