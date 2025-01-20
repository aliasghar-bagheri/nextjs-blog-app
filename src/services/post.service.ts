import { AxiosRequestConfig } from 'axios';
import http from './httpService';

export async function getAllPosts(queries?: string, options?: AxiosRequestConfig) {
  try {
    const { data } = await http.get(`/post/list?${queries}`, options);

    const { posts, totalPages } = data.data;

    return { posts, totalPages };
  } catch (error) {
    console.log(error);

    return { posts: [], totalPages: 0 };
  }
}
