import { AxiosRequestConfig } from 'axios';
import http from './httpService';
import { CategorySchemaType } from '@/lib/validations/category/category.schema';

// *********** Get all posts
export async function getAllCategory(queries?: string, options?: AxiosRequestConfig) {
  try {
    const { data } = await http.get(`/category/list?${queries}`, options);

    const { categories } = data.data || [];

    return { categories };
  } catch (error) {
    console.log(error);

    return { categories: [] };
  }
}

// *********** Create new category
export async function createNewCategoryApi(
  categoryData: CategorySchemaType,
  options?: AxiosRequestConfig
) {
  return http.post('/category/add', categoryData, options).then(({ data }) => data.data);
}

// *********** Delete category
export async function deleteCategoryApi(categoryId: string, options?: AxiosRequestConfig) {
  return http.delete(`/category/remove/${categoryId}`, options).then(({ data }) => data.data);
}

// *********** Edit category
export async function editCategoryApi(
  { categoryId, data }: { categoryId: string; data: CategorySchemaType },
  options?: AxiosRequestConfig
) {
  return http.patch(`/category/update/${categoryId}`, data, options).then(({ data }) => data.data);
}
