import { getAllCategory } from '@/services/category.service';
import { ICategory } from '@/types';
import Link from 'next/link';

export default async function CategoryList() {
  const { categories } = (await getAllCategory()) as { categories: ICategory[] };

  return (
    <ul className="flex gap-2 items-start flex-wrap text-nowrap">
      <li className="bg-secondary-200 py-1.5 px-2 rounded text-sm transition-colors hover:bg-secondary-300">
        <Link href="/blogs">همه</Link>
      </li>
      {categories && categories.length > 0
        ? categories.map((category) => (
            <li
              key={category._id}
              className="bg-secondary-200 py-1.5 px-2 rounded text-sm transition-colors hover:bg-secondary-300"
            >
              <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
            </li>
          ))
        : null}
    </ul>
  );
}
