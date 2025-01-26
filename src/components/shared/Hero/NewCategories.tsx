import Button from '@/components/ui/Button';
import { getAllCategory } from '@/services/category.service';
import { ICategory } from '@/types';
import Link from 'next/link';
import queryString from 'query-string';
import React from 'react';

export default async function NewCategories() {
  const queries = queryString.stringify({ limit: 5 });
  const { categories } = (await getAllCategory(queries)) as { categories: ICategory[] };

  return (
    <>
      {categories && categories.length > 0
        ? categories.map((category) => (
            <Link
              key={category._id}
              href={`/blogs/category/${category.slug}`}
            >
              <Button>{category.title}</Button>
            </Link>
          ))
        : null}
    </>
  );
}
