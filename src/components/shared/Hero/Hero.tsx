import Button from '@/components/ui/Button';
import PostSlider from '@/components/ui/PostSlider';
import { postSliderSampleData } from '@/constants';

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 py-10">
      <div className="text-center relative w-full">
        <h1 className="font-bold text-2xl sm:text-4xl text-primary">به دیجی نیوز خوش آمدید</h1>
        <p className="text-lg mt-4">اینجا جدیدترین مطالب حوزه تکنولوژی قرار داده می شود</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="hidden md:flex items-center p-1.5 border rounded border-secondary-200">
          <Button>موبایل</Button>
          <Button>کامپیوتر</Button>
          <Button>سخت افزار</Button>
          <Button>سیستم عامل</Button>
          <Button>بررسی ویدیویی</Button>
          <Button variant="primary">مشاهده همه</Button>
        </div>
      </div>
      <PostSlider posts={postSliderSampleData} />
    </div>
  );
}
