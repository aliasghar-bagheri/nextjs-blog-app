import { INewComment } from '@/types';
import { AxiosRequestConfig } from 'axios';
import http from './httpService';

// *********** Create new comment
export default async function createNewCommentApi(data: INewComment, options?: AxiosRequestConfig) {
  return await http.post('/comment/add', data, options).then(({ data }) => data.data);
}

// *********** Get all comments
export async function getAllComments(queries?: string, options?: AxiosRequestConfig) {
  try {
    const { data } = await http.get(`/comment/list?${queries}`, options);

    const { comments, commentsCount, totalPages } = data.data || {};

    return { comments, commentsCount, totalPages };
  } catch (error) {
    console.log(error);
    return { comments: [], commentsCount: 0, totalPages: 0 };
  }
}

// *********** Edit a comment
export async function editCommentApi(
  { commentId, data }: { commentId: string; data: { status: string } },
  options?: AxiosRequestConfig
) {
  return http.patch(`/comment/update/${commentId}`, data, options).then(({ data }) => data.data);
}

// *********** Delete a comment
export async function deleteCommentApi(commentId: string, options?: AxiosRequestConfig) {
  return http.delete(`/comment/remove/${commentId}`, options).then(({ data }) => data.data);
}
