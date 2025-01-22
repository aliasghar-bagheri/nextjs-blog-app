import Author from '@/app/(root)/blogs/_/components/post/Author';
import ButtonIcon from '@/components/ui/ButtonIcon';
import { TPostComment } from '@/types';
import getRelativeTimePersian from '@/utils/persianTime';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function PostCommentItem({
  comment,
  onReplyComment,
}: {
  comment: TPostComment;
  onReplyComment?: () => void;
}) {
  const { user, createdAt, openToComment, content } = comment;

  return (
    <div className="p-3 sm:p-5">
      <div className="flex items-center gap-x-3 justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <Author
            avatarUrl={user.avatarUrl || '/assets/images/user-placeholder.svg'}
            name={user.name}
          />
          <span
            className="text-xs"
            suppressHydrationWarning
          >
            {getRelativeTimePersian(createdAt)}
          </span>
        </div>

        {openToComment && (
          <ButtonIcon
            onClick={onReplyComment}
            variant="outline"
          >
            <ChatBubbleBottomCenterTextIcon />
            پاسخ
          </ButtonIcon>
        )}
      </div>
      <div className="mt-4 mr-2">
        <p>{content.text}</p>
      </div>
    </div>
  );
}
