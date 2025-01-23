import { DocumentTextIcon } from '@heroicons/react/24/outline';
import DashboardCard from './DashboardCard';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { getDashboardCardsData } from '@/services/dashboard.service';

export default async function DashboardCardList() {
  const { postsCount, categoriesCount, commentsCount } = await getDashboardCardsData();
  return (
    <>
      <DashboardCard
        Icon={DocumentTextIcon}
        title="تعداد پست ها"
        value={postsCount}
      />
      <DashboardCard
        Icon={RectangleGroupIcon}
        title="تعداد دسته بندی ها"
        value={categoriesCount}
      />
      <DashboardCard
        Icon={ChatBubbleBottomCenterTextIcon}
        title="تعداد کامنت ها"
        value={commentsCount}
      />
    </>
  );
}
