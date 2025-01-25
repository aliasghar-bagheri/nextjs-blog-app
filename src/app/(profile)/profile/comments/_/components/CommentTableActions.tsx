import { IComment } from '@/types';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';

export default function CommentTableActions({ comment }: { comment: IComment }) {
  return (
    <div className="flex items-center gap-x-4">
      <EditComment comment={comment} />
      <DeleteComment comment={comment} />
    </div>
  );
}
