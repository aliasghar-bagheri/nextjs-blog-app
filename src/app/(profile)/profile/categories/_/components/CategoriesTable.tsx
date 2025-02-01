import DataTable from '@/components/ui/DataTable';
import { getAllCategory } from '@/services/category.service';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import { allCategoriesTableColumns } from './columns';
import Pagination from '@/components/ui/Pagination';

export default async function CategoriesTable({ queries }: { queries: string }) {
  const cookie = cookies();
  const options = setCookieOnReq(cookie);

  const { categories, totalPages } = await getAllCategory(queries, options);

  return (
    <>
      <DataTable
        columns={allCategoriesTableColumns}
        data={categories}
      />
      <div className="w-full flex items-center justify-center">
        <Pagination
          totalPages={totalPages}
          limit={8}
        />
      </div>
    </>
  );
}
