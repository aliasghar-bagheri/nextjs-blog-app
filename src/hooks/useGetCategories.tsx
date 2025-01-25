import { QUERY_KEYS } from '@/lib/tanstack-query/queryKeys';
import { getAllCategory } from '@/services/category.service';
import { ICategory } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

export const useGetCategories = (queries?: string, options?: AxiosRequestConfig) => {
  const { data, isPending, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_CATEGORIES],
    queryFn: async () => getAllCategory(queries, options),
  });

  const { categories: categoryList = [] } = data || {};

  const categories = categoryList.map((item: ICategory) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = categoryList.map((item: ICategory) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { categories, transformedCategories, isPending, isError };
};
