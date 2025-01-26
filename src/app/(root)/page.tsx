import HeroSection from '@/components/shared/Hero/HeroSection';
import LatestArticlesSection from '@/components/shared/latest-articles/LatestArticlesSection';

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <LatestArticlesSection />
    </div>
  );
}
