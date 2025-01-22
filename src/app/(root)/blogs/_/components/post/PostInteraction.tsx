import ButtonIcon from '@/components/ui/ButtonIcon';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { toPersianNumber } from '@/utils/numberFormatter';
import Link from 'next/link';
import { IPost } from '@/types';
import LikePost from './LikePost';
import SavePost from './SavePost';

export default function PostInteraction({
  _id,
  slug,
  isBookmarked,
  isLiked,
  likesCount,
  commentsCount,
}: IPost) {
  return (
    <div className="flex gap-x-3 justify-between items-center">
      <SavePost
        postId={_id}
        isBookmarked={isBookmarked}
      />
      <div className="flex gap-x-2 items-center">
        <Link href={`/blogs/${slug}/#comments`}>
          <ButtonIcon variant="ghost">
            <ChatBubbleBottomCenterIcon />
            {toPersianNumber(commentsCount)}
          </ButtonIcon>
        </Link>

        <LikePost
          postId={_id}
          isLiked={isLiked}
          likesCount={likesCount}
        />
      </div>
    </div>
  );
}
