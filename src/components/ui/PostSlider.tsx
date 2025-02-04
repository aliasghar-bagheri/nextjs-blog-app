'use client';

import Image from 'next/image';
import ButtonIcon from './ButtonIcon';
import { toLocalDateShort } from '@/utils/dateFormatter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { IPost } from '@/types';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { toPersianNumber } from '@/utils/numberFormatter';
import Link from 'next/link';

export interface PostSlider {
  posts: IPost[];
  autoplayDelay?: number;
}

const PostSlider = ({ posts, autoplayDelay = 6000 }: PostSlider) => {
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="space-x-4 w-full relative overflow-hidden">
      <div className="w-full md:w-9/12 mx-auto relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: autoplayDelay }}
          navigation={{
            nextEl: nextBtnRef.current,
            prevEl: prevBtnRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevBtnRef.current;
              swiper.params.navigation.nextEl = nextBtnRef.current;
            }
            swiper.navigation.update();
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
          dir="ltr"
        >
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <div className="relative w-full h-72 md:h-96 lg:h-[550px] overflow-hidden p-5 md:p-7 lg:p-11">
                <Image
                  src={post.coverImageUrl}
                  fill
                  className="object-cover rounded-2xl -z-10"
                  alt={post.title}
                />
                <div className="flex items-center gap-5 justify-between z-10 font-semibold text-secondary-600">
                  <div className="flex items-center gap-1">
                    <p className="text-xs md:text-base">
                      تاریخ انتشار: {toLocalDateShort(post.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs md:text-base">
                      زمان مطالعه: {toPersianNumber(post.readingTime)} دقیقه
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-10/12 shadow sm:w-8/12 mx-auto lg:w-7/12 py-5 lg:py-8 space-y-4 rounded-3xl px-3 border border-secondary-200 -mt-14 lg:-mt-20 backdrop-blur-xl bg-background z-10 text-center">
                <Link href={`/blogs/${post.slug}`}>
                  <h2
                    style={{ direction: 'rtl' }}
                    className="font-bold text-sm sm:text-lg md:text-xl lg:text-3xl line-clamp-1 text-secondary-900 hover:text-primary transition-colors"
                  >
                    {post.title}
                  </h2>
                </Link>
                <p
                  style={{ direction: 'rtl' }}
                  className="line-clamp-1 text-xs"
                >
                  {post.briefText}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonIcon
          variant="secondary"
          className="absolute top-1/2 -translate-y-6 right-5 lg:right-12 z-10"
          ref={nextBtnRef}
        >
          <ArrowRightIcon />
        </ButtonIcon>

        <ButtonIcon
          variant="secondary"
          className="absolute top-1/2 -translate-y-6 left-5 lg:left-12 z-10"
          ref={prevBtnRef}
        >
          <ArrowLeftIcon />
        </ButtonIcon>
      </div>
    </section>
  );
};

export default PostSlider;
