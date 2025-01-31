import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'دسته بندی مدنظر شما یافت نشد',
};

export default function NotFoundPage() {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center gap-5 text-center">
      <h1 className="text-5xl md:text-7xl text-primary font-bold [text-shadow:_0_0px_12px_hsl(var(--primary-500))]">
        404
      </h1>
      <p className="font-medium">دسته بندی مدنظر شما یافت نشد</p>
      <Link href="/blogs">
        <Button variant="primary">مشاهده ی تمامی دسته بندی ها</Button>
      </Link>
    </div>
  );
}
