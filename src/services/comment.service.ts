import { INewComment } from '@/types';
import { AxiosRequestConfig } from 'axios';
import http from './httpService';

// *********** Create new comment
export default async function createNewCommentApi(data: INewComment, options?: AxiosRequestConfig) {
  return await http.post('/comment/add', data, options).then(({ data }) => data.data);
}

// *********** Get all comments
export async function getAllComments(options?: AxiosRequestConfig) {
  return await http.get('/comment/list', options).then(({ data }) => data.data);
}
