import HeroSection from '@/components/shared/Hero/HeroSection';
import LatestArticlesSection from '@/components/shared/latest-articles/LatestArticlesSection';
import MostPopularCategories from '@/components/shared/MostPopularCategories/MostPopularCategories';

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <LatestArticlesSection />
      <MostPopularCategories />
    </div>
  );
}
