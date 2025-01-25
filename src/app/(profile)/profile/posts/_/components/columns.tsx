import { toPersianNumber } from '@/utils/numberFormatter';
import getRelativeTimePersian from '@/utils/persianTime';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import PostTableActions from '../../../_/components/PostTableActions';
import Badge from '@/components/ui/Badge';
import { DataTableColumn } from '@/components/ui/DataTable';
import { IPost } from '@/types';

export const allPostsTableColumns: DataTableColumn<IPost>[] = [
  {
    label: 'عنوان',
    key: 'title',
  },
  {
    label: 'نویسنده',
    key: 'author',
    render: (post) => <p>{post.author.name}</p>,
  },
  {
    label: 'اسلاگ',
    key: 'slug',
  },
  {
    label: 'دسته بندی',
    key: 'category',
    render: (post) => <p>{post.category.title}</p>,
  },
  {
    label: 'زمان مطالعه',
    key: 'readingTime',
    render: (post) => <p>{toPersianNumber(post.readingTime)} دقیقه</p>,
  },
  {
    label: 'تعداد لایک ها',
    key: 'likesCount',
    render: (post) => <p>{toPersianNumber(post.likesCount)}</p>,
  },
  {
    label: 'تعداد نظرات',
    key: 'commentsCount',
    render: (post) => <p>{toPersianNumber(post.commentsCount)}</p>,
  },
  {
    label: 'نوع',
    key: 'type',
    render: (post) => {
      const isFree = post.type === 'free';
      return (
        <Badge
          variant={isFree ? 'success' : 'warning'}
          className="text-sm"
        >
          {isFree ? 'رایگان' : 'پولی'}
        </Badge>
      );
    },
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
    render: (post) => <PostTableActions postId={post._id} />,
  },
];
