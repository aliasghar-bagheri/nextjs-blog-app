import { Suspense } from 'react';
import NewCategories from './NewCategories';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import Hero from './Hero';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 py-10">
      <div className="text-center relative w-full">
        <h1 className="font-bold text-2xl sm:text-4xl text-primary">به دیجی نیوز خوش آمدید</h1>
        <p className="text-lg mt-4">اینجا جدیدترین مطالب حوزه تکنولوژی قرار داده می شود</p>
      </div>
      <div className="hidden sm:flex items-center justify-center">
        <div className="flex items-center p-1.5 border rounded border-secondary-200">
          <Suspense
            fallback={
              <Skeleton
                width={410}
                height={40}
                className="ml-1.5 bg-secondary-200 rounded"
              />
            }
          >
            <NewCategories />
          </Suspense>
          <Link href="/blogs">
            <Button variant="primary">مشاهده همه</Button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Suspense
          fallback={
            <Skeleton
              width="100%"
              height={550}
              className="bg-secondary-200 rounded"
            />
          }
        >
          <Hero />
        </Suspense>
      </div>
    </div>
  );
}
