import {
  ChatBubbleBottomCenterTextIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
  DocumentTextIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

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
  {
    label: 'تنظیمات پروفایل',
    href: '/profile/settings',
    icon: Cog8ToothIcon,
  },
];
