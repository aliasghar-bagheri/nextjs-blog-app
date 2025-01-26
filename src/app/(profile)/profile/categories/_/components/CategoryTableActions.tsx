import { ICategory } from '@/types';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';

export default function CategoryTableActions({ category }: { category: ICategory }) {
  return (
    <div className="flex items-center gap-x-4">
      <EditCategory category={category} />
      <DeleteCategory category={category} />
    </div>
  );
}
