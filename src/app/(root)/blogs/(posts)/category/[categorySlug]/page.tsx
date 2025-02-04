import { getAllPosts } from '@/services/post.service';
import PostList from '@/app/(root)/blogs/_/components/post/PostList';
import queryString from 'query-string';
import { getAllCategory } from '@/services/category.service';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ICategory } from '@/types';
import { toPersianNumber } from '@/utils/numberFormatter';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const categorySlug = (await params).categorySlug;

  const query = queryString.stringify({ slug: categorySlug });

  const { categories } = (await getAllCategory(query)) as { categories: ICategory[] };

  const category = categories?.[0];

  if (!category) return notFound();

  return {
    title: `دسته بندی ${category.title}`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const queries = queryString.stringify({ ...params, ...searchParams });

  const { posts } = await getAllPosts(queries);

  const { search } = await searchParams;

  return (
    <div className="space-y-4">
      {search && (
        <p>
          {toPersianNumber(posts.length)} نتیجه در این <b>دسته بندی</b> بر اساس جستجو :
          <q>
            <b>{search}</b>
          </q>
        </p>
      )}
      <PostList
        posts={posts}
        className="grid justify-center grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      />
    </div>
  );
}
