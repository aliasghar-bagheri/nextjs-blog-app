import Avatar from '@/components/ui/Avatar';
import { toLocalDateShort } from '@/utils/dateFormatter';
import clsx from 'clsx';

interface AuthorProps {
  avatarUrl: string;
  name: string;
  postCreationDate?: string;
  className?: string;
}

export default function Author({ avatarUrl, name, postCreationDate, className }: AuthorProps) {
  return (
    <div className={clsx('flex items-center gap-x-2', className)}>
      <Avatar
        src={avatarUrl}
        alt="author"
      />
      <div className="space-y-1">
        <p className="text-xs font-semibold text-secondary-900 text-nowrap">{name}</p>
        {postCreationDate && <p className="text-xs">{toLocalDateShort(postCreationDate)}</p>}
      </div>
    </div>
  );
}
