'use client';

import { ChangeEvent, useState } from 'react';
import Radio from './Radio';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const filterOptions = [
  {
    id: 'latest',
    name: 'filter',
    value: 'latest',
    label: 'جدیدترین ها',
  },
  {
    id: 'earliest',
    name: 'filter',
    value: 'earliest',
    label: 'قدیمی ترین ها',
  },
  {
    id: 'popular',
    name: 'filter',
    value: 'popular',
    label: 'محبوب ترین ها',
  },
  {
    id: 'time_desc',
    name: 'filter',
    value: 'time_desc',
    label: 'کمترین زمان مطالعه',
  },
  {
    id: 'time_asc',
    name: 'filter',
    value: 'time_asc',
    label: 'بیشترین زمان مطالعه',
  },
];

const Filter = () => {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const router = useRouter();

  const [selectedFilter] = useState<string | null>(searchParam.get('sort'));

  const handleFilter = (event: ChangeEvent<HTMLFormElement>) => {
    const filterValue = event.target.value;

    const newParam = new URLSearchParams(searchParam.toString());

    if (filterValue) {
      newParam.set('sort', filterValue);
    } else {
      newParam.delete('sort');
    }

    router.push(`${pathname}?${newParam.toString()}`);
  };

  return (
    <form
      onChange={handleFilter}
      className="space-y-4"
    >
      {filterOptions.map((item) => (
        <Radio
          key={item.id}
          id={item.id}
          value={item.value}
          name={item.name}
          label={item.label}
          defaultChecked={selectedFilter === item.value}
        />
      ))}
    </form>
  );
};

export default Filter;
