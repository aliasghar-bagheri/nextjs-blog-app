import { AxiosRequestConfig } from 'axios';
import http from './httpService';

// *********** Get all posts
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

// *********** Get post by slug
export async function getPostBySlug(slug: string, options?: AxiosRequestConfig) {
  try {
    const { data } = await http.get(`/post/slug/${slug}`, options);

    const { post } = data.data || {};

    return { post };
  } catch (error) {
    console.log(error);
    return { post: {} };
  }
}

// *********** Like post
export async function likePostApi(postId: string) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

// *********** Save post
export async function savePostApi(postId: string) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
