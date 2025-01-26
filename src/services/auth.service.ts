import { SignInSchemaType, SignUpSchemaType } from '@/lib/validations/user/user.schema';
import http from './httpService';
import { AxiosRequestConfig } from 'axios';

export async function signInApi(userData: SignInSchemaType) {
  return await http.post('/user/signin', userData).then(({ data }) => data.data);
}

export async function signUpApi(userData: SignUpSchemaType) {
  return await http.post('/user/signup', userData).then(({ data }) => data.data);
}

export async function getUserApi(options?: AxiosRequestConfig) {
  return await http.get('/user/profile', options).then(({ data }) => data.data);
}

export async function signOutApi() {
  return await http.post('/user/logout').then(({ data }) => data);
}

// *********** Update avatar user
export async function updateAvatar(data: FormData | File | string, options?: AxiosRequestConfig) {
  return http.post('/user/upload-avatar', data, options).then(({ data }) => data.data);
}
