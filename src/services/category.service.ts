import { AxiosRequestConfig } from 'axios';
import http from './httpService';

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
