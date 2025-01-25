import { QUERY_KEYS } from '@/lib/tanstack-query/queryKeys';
import { editCommentApi } from '@/services/comment.service';
import { handleError } from '@/utils/handleError';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useEditComment = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.EDIT_COMMENT],
    mutationFn: editCommentApi,
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
