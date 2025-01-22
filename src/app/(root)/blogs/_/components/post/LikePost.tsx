'use client';

import ButtonIcon from '@/components/ui/ButtonIcon';
import { likePostApi } from '@/services/post.service';
import { handleError } from '@/utils/handleError';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { toPersianNumber } from '@/utils/numberFormatter';

interface LikePostProps {
  postId: string;
  isLiked: boolean;
  likesCount: number;
}

export default function LikePost({ postId, isLiked, likesCount }: LikePostProps) {
  const router = useRouter();

  const handleLikePost = async () => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      const message = handleError(error);
      toast.error(message);
    }
  };
  return (
    <ButtonIcon
      onClick={handleLikePost}
      variant="ghost"
    >
      {isLiked ? (
        <HeartSolidIcon className="fill-red-500" />
      ) : (
        <HeartIcon className="stroke-red-500" />
      )}
      {toPersianNumber(likesCount)}
    </ButtonIcon>
  );
}
