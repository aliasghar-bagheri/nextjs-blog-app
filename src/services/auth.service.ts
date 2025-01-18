import { SignInSchemaType, SignUpSchemaType } from '@/lib/validations/user/user.schema';
import http from './httpService';

export async function signInApi(userData: SignInSchemaType) {
  return await http.post('/user/signin', userData).then(({ data }) => data.data);
}

export async function signUpApi(userData: SignUpSchemaType) {
  return await http.post('/user/signup', userData).then(({ data }) => data.data);
}

export async function getUserApi() {
  return await http.get('/user/profile').then(({ data }) => data.data);
}

export async function signOutApi() {
  return await http.post('/user/logout').then(({ data }) => data);
}
