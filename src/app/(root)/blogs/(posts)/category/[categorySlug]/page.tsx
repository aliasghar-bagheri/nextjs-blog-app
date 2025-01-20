import { getAllPosts } from '@/services/post.service';
import PostList from '@/app/(root)/blogs/_/components/post/PostList';
import queryString from 'query-string';
import { getAllCategory } from '@/services/category.service';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ICategory } from '@/types';

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

  return <PostList posts={posts} />;
}
