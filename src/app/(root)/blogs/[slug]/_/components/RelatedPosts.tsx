import { TPostRelated } from '@/types';
import Link from 'next/link';
import { ListBulletIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { toPersianNumber } from '@/utils/numberFormatter';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function RelatedPosts({ relatedPosts }: { relatedPosts: TPostRelated[] }) {
  return (
    <div className="space-y-7">
      <h6 className="flex items-center gap-x-2 flex-nowrap text-lg text-secondary-900 font-bold">
        <ListBulletIcon
          width={20}
          height={20}
          className="text-primary"
        />
        پست های مرتبط
      </h6>
      {relatedPosts?.length > 0 ? (
        relatedPosts.map((post) => (
          <div
            key={post._id}
            className="bg-background p-4 space-y-4 rounded relative"
          >
            <div className="w-1.5 h-10 rounded-full bg-primary absolute right-0 top-2" />
            <Link href={`/blogs/${post.slug}`}>
              <p className="text-sm font-medium text-secondary-900 hover:text-primary">
                {post.title}
              </p>
            </Link>
            <div className="flex items-center gap-x-2 justify-end">
              <div className="flex text-xs items-center flex-nowrap gap-x-1 text-secondary-600">
                <UserIcon
                  width={15}
                  height={15}
                />
                <p className="truncate">{post.author.name}</p>
              </div>
              |
              <div className="flex text-xs items-center flex-nowrap text-nowrap gap-x-1 text-secondary-600">
                <ClockIcon
                  width={15}
                  height={15}
                />
                زمان مطالعه :<p>{toPersianNumber(post.readingTime)} دقیقه</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm">پست مرتبطی وجود ندارد</p>
      )}
    </div>
  );
}
