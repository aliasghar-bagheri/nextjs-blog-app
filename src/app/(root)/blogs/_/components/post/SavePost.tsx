'use client';

import ButtonIcon from '@/components/ui/ButtonIcon';
import { savePostApi } from '@/services/post.service';
import { handleError } from '@/utils/handleError';
import toast from 'react-hot-toast';

import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface SavePostProps {
  postId: string;
  isBookmarked: boolean;
}

export default function SavePost({ postId, isBookmarked }: SavePostProps) {
  const router = useRouter();

  const handleSavePost = async () => {
    try {
      const { message } = await savePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      const message = handleError(error);
      toast.error(message);
    }
  };
  return (
    <ButtonIcon
      onClick={handleSavePost}
      variant="ghost"
    >
      {isBookmarked ? (
        <BookmarkSolidIcon className="fill-primary" />
      ) : (
        <BookmarkIcon className="stroke-primary" />
      )}
    </ButtonIcon>
  );
}
