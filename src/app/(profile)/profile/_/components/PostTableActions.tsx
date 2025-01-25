import ButtonIcon from '@/components/ui/ButtonIcon';
import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PostTableActions({ postId }: { postId: string }) {
  return (
    <div className="flex items-center gap-x-4">
      <Link href={`/profile/posts/${postId}/edit`}>
        <ButtonIcon variant="secondary">
          <PencilIcon />
        </ButtonIcon>
      </Link>
      <ButtonIcon variant="danger">
        <TrashIcon />
      </ButtonIcon>
    </div>
  );
}
