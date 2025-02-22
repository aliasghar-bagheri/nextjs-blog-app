import Badge from '@/components/ui/Badge';
import { ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Author from '@/app/(root)/blogs/_/components/post/Author';
import { IPost } from '@/types';
import { toPersianNumber } from '@/utils/numberFormatter';
import { MarkdownContent } from '@/lib/react-markdown/Markdown';

export default function PostDescription(post: IPost) {
  const { category, title, readingTime, author, briefText, text } = post;

  return (
    <>
      <div className="w-full space-y-3">
        <div className="flex items-center gap-5 flex-wrap">
          <Link href={`/blogs/category/${category.slug}`}>
            <Badge>{category.title}</Badge>
          </Link>
          <div className="flex text-xs items-center flex-nowrap text-nowrap gap-x-1 text-secondary-600">
            <ClockIcon
              width={20}
              height={20}
            />
            زمان مطالعه :<p>{toPersianNumber(readingTime)} دقیقه</p>
          </div>
        </div>
        <Author
          name={author.name}
          avatarUrl={author.avatar || '/assets/images/user-placeholder.svg'}
        />

        <div className="space-y-5 py-3">
          <h1 className="text-secondary-900 text-3xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-xs md:text-base"> خلاصه: {briefText}</p>
        </div>

        <MarkdownContent>{text}</MarkdownContent>
      </div>
    </>
  );
}
