import { getPostByIdApi } from '@/services/post.service';
import PostForm from '../../_/forms/PostForm';
import { IPost } from '@/types';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: Promise<string> };
}) {
  const { post } = (await getPostByIdApi(await postId)) as { post: IPost };

  if (!post?._id) return notFound();

  return {
    title: `${post.title} | ویرایش پست`,
  };
}

export default async function EditPostPage({
  params: { postId },
}: {
  params: { postId: Promise<string> };
}) {
  const { post } = (await getPostByIdApi(await postId)) as { post: IPost };

  return (
    <div className="w-full space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 className="text-secondary-900 font-medium text-xl text-nowrap">ویرایش پست</h2>
      </div>
      <PostForm
        type="UPDATE"
        initialData={post}
      />
    </div>
  );
}
