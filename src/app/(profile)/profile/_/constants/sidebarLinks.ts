import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

export const sidebarLinks = [
  {
    label: 'داشبورد',
    href: '/profile',
    icon: Squares2X2Icon,
  },
  {
    label: 'پست ها',
    href: '/profile/posts',
    icon: DocumentTextIcon,
  },
  {
    label: 'نظرات',
    href: '/profile/comments',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    label: 'دسته بندی ها',
    href: '/profile/categories',
    icon: RectangleGroupIcon,
  },
];
