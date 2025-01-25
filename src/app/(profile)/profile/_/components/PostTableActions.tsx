import ButtonIcon from '@/components/ui/ButtonIcon';
import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import DeletePost from './DeletePost';
import { IPost } from '@/types';

export default function PostTableActions({ post }: { post: IPost }) {
  return (
    <div className="flex items-center gap-x-4">
      <Link href={`/profile/posts/${post._id}/edit`}>
        <ButtonIcon variant="secondary">
          <PencilIcon />
        </ButtonIcon>
      </Link>
      <DeletePost post={post} />
    </div>
  );
}
