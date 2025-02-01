import Badge from '@/components/ui/Badge';
import { DataTableColumn } from '@/components/ui/DataTable';
import { IComment } from '@/types';
import getRelativeTimePersian from '@/utils/persianTime';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import CommentTableActions from './CommentTableActions';

export const allCommentsTableColumns: DataTableColumn<IComment>[] = [
  {
    label: 'متن',
    key: 'content',
    render: (comment) => <p>{comment.content.text}</p>,
  },
  {
    label: 'نویسنده',
    key: 'user',
    render: (comment) => <p>{comment.user.name}</p>,
  },
  {
    label: 'وضعیت نمایش',
    key: 'status',
    render: (post) => (
      <Badge variant={post.status === 0 ? 'secondary' : post.status === 1 ? 'error' : 'success'}>
        {post.status === 0 ? 'در انتظار تایید' : post.status === 1 ? 'رد شده' : 'تایید شده'}
      </Badge>
    ),
  },
  {
    label: 'تاریخ ایجاد',
    key: 'createdAt',
    render: (post) => <p suppressHydrationWarning>{getRelativeTimePersian(post.createdAt)}</p>,
  },
  {
    label: 'تاریخ بروزرسانی',
    key: 'updatedAt',
    render: (post) => <p suppressHydrationWarning>{getRelativeTimePersian(post.updatedAt)}</p>,
  },
  {
    label: (
      <WrenchScrewdriverIcon
        width={25}
        height={25}
      />
    ),
    key: 'createdAt',
    render: (comment) => <CommentTableActions comment={comment} />,
  },
];
