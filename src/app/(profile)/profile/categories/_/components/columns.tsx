import { DataTableColumn } from '@/components/ui/DataTable';
import { ICategory } from '@/types';
import getRelativeTimePersian from '@/utils/persianTime';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import CategoryTableActions from './CategoryTableActions';

export const allCategoriesTableColumns: DataTableColumn<ICategory>[] = [
  {
    label: 'عنوان',
    key: 'title',
  },
  {
    label: 'اسلاگ',
    key: 'slug',
  },
  {
    label: 'عنوان انگلیسی',
    key: 'englishTitle',
  },
  {
    label: 'توضیحات',
    key: 'description',
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
    render: (category) => <CategoryTableActions category={category} />,
  },
];
