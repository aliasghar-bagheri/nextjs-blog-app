import { Metadata } from 'next';
import { getPostBySlug } from '@/services/post.service';
import { IPost } from '@/types';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import PostCover from '@/app/(root)/blogs/_/components/post/PostCover';
import PostDescription from '@/app/(root)/blogs/[slug]/_/components/PostDescription';
import getRelativeTimePersian from '@/utils/persianTime';
import Badge from '@/components/ui/Badge';
import PostInteraction from '@/app/(root)/blogs/_/components/post/PostInteraction';
import PostShare from '@/app/(root)/blogs/[slug]/_/components/PostShare';
import RelatedPosts from '@/app/(root)/blogs/[slug]/_/components/RelatedPosts';
import PostCommentsList from '@/app/(root)/blogs/[slug]/_/components/comment/PostCommentsList';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = (await getPostBySlug(slug)) as { post: IPost };

  if (!post._id) return notFound();

  return {
    title: post.title,
    description: post.briefText,
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cookie = cookies();
  const options = setCookieOnReq(cookie);

  const { post } = (await getPostBySlug(slug, options)) as { post: IPost };

  if (!post?._id) return notFound();

  return (
    <div className="w-full py-10">
      <div className="w-full h-full flex xl:flex-row flex-col items-start gap-8">
        <div className="flex-1 w-full space-y-10">
          <div className="space-y-7 pb-5">
            <PostCover
              fill
              src={post.coverImageUrl}
              containerClassName="h-72 sm:h-[500px]"
              alt={post.title}
            />
            <PostDescription {...post} />
          </div>
          <div className="w-full border-b-2 border-secondary-200 py-10">
            <div className="flex items-center flex-col sm:flex-row justify-between gap-6">
              <p className="text-sm font-medium">{getRelativeTimePersian(post.createdAt)}</p>
              <Badge
                variant="secondary"
                className="text-sm"
              >
                # {post.category.title}
              </Badge>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-between gap-12 sm:gap-6 mt-8">
              <PostInteraction {...post} />
              <PostShare
                title={post.title}
                slug={post.slug}
              />
            </div>
          </div>
          <PostCommentsList {...post} />
        </div>
        <div className="xl:w-96 bg-secondary-100 p-4 rounded-lg w-full">
          <RelatedPosts relatedPosts={post.related} />
        </div>
      </div>
    </div>
  );
}
