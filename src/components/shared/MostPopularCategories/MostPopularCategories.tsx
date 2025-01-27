import { Squares2X2Icon } from '@heroicons/react/24/outline';

const mockPopularCategories = [
  {
    styles: 'btn bg-indigo-100 text-indigo-500 dark:bg-indigo-700/20 dark:text-indigo-200',
    label: 'سخت افزار',
  },
  {
    styles: 'btn bg-stone-100 text-stone-500 dark:bg-stone-700/20 dark:text-stone-200',
    label: 'بررسی ویدیویی',
  },
  {
    styles: 'btn bg-rose-100 text-rose-500 dark:bg-rose-700/20 dark:text-rose-200',
    label: 'سخت افزار',
  },
  {
    styles: 'btn bg-orange-100 text-orange-500 dark:bg-orange-700/20 dark:text-orange-200',
    label: 'راهنمای خرید',
  },
  {
    styles: 'btn bg-teal-100 text-teal-500 dark:bg-teal-700/20 dark:text-teal-200',
    label: ' گیمینگ',
  },
];

export default function MostPopularCategories() {
  return (
    <div className="w-full flex-col flex items-center py-10 gap-y-10 border-t border-secondary-200">
      <div className="flex items-center gap-x-4">
        <Squares2X2Icon
          width={30}
          height={30}
        />
        <h2 className="font-bold text-2xl text-secondary-900">پربازدید ترین دسته بندی ها</h2>
      </div>
      <div className="flex flex-wrap max-w-lg justify-center w-full gap-4">
        {mockPopularCategories.map((item) => (
          <div
            key={item.label}
            className={item.styles}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
