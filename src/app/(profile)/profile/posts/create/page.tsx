import { Metadata } from 'next';
import PostForm from '../_/forms/PostForm';

export const metadata: Metadata = {
  title: 'ایجاد پست',
};

export default function CreatePostPage() {
  return (
    <div className="w-full space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 className="text-secondary-900 font-medium text-xl text-nowrap">ایجاد پست</h2>
      </div>
      <PostForm type="CREATE" />
    </div>
  );
}
