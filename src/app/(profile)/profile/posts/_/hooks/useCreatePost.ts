import { QUERY_KEYS } from '@/lib/tanstack-query/queryKeys';
import { createNewPostApi } from '@/services/post.service';
import { handleError } from '@/utils/handleError';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreatePost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.CREATE_NEW_POST],
    mutationFn: createNewPostApi,
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
