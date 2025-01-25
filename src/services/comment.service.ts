import { INewComment } from '@/types';
import { AxiosRequestConfig } from 'axios';
import http from './httpService';

// *********** Create new comment
export default async function createNewCommentApi(data: INewComment, options?: AxiosRequestConfig) {
  return await http.post('/comment/add', data, options).then(({ data }) => data.data);
}

// *********** Get all comments
export async function getAllComments(options?: AxiosRequestConfig) {
  try {
    const { data } = await http.get('/comment/list', options);

    const { comments, commentsCount } = data.data || {};

    return { comments, commentsCount };
  } catch (error) {
    console.log(error);
    return { comments: [], commentsCount: 0 };
  }
}
