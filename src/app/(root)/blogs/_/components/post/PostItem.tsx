import Link from 'next/link';
import { IPost } from '@/types';
import PostCover from './PostCover';
import Author from './Author';

export default function PostItem(post: IPost) {
  const { slug, coverImageUrl, title, text, author, category, createdAt } = post;

  return (
    <article className="flex-1 space-y-4">
      <Link href={`/blogs/${slug}`}>
        <PostCover
          fill
          src={coverImageUrl}
          className="hover:scale-110"
          alt="post cover"
        />
      </Link>
      <div className="space-y-4">
        <Link href={`/blogs/${slug}`}>
          <h4 className="text-xl font-semibold text-secondary-900 hover:text-primary line-clamp-2">
            {title}
          </h4>
        </Link>
        <p className="line-clamp-3">{text}</p>
      </div>

      <div className="flex items-center justify-between gap-x-3">
        <Author
          postCreationDate={createdAt}
          name={author.name}
          avatarUrl={author.avatarUrl || '/assets/images/user-placeholder.svg'}
        />
        <Link href={`/blogs/category/${category.slug}`}>
          <div className="py-1.5 inline text-nowrap bg-primary-200/30 px-2 text-xs md:text-sm rounded text-primary dark:bg-primary-400/30 dark:text-primary-100 backdrop-blur-sm">
            {category.title}
          </div>
        </Link>
      </div>
    </article>
  );
}
