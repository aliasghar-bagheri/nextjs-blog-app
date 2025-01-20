import { IPost } from '@/types';
import PostItem from './PostItem';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function PostList({ posts }: { posts: IPost[] | null | undefined }) {
  return (
    <div className="grid justify-center grid-cols-1 mx-auto sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <PostItem
            key={post._id}
            {...post}
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <h5 className="text-lg text-secondary-700 flex flex-col items-center gap-y-3">
            <ExclamationCircleIcon
              width={40}
              height={40}
            />
            پستی یافت نشد!
          </h5>
        </div>
      )}
    </div>
  );
}
