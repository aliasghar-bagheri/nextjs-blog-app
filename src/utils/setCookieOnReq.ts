import { AxiosRequestConfig } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export default function setCookieOnReq(cookie: ReadonlyRequestCookies) {
  const accessToken = cookie.get('accessToken');
  const refreshToken = cookie.get('refreshToken');

  let options: AxiosRequestConfig = {};
  if (accessToken && refreshToken) {
    options = {
      headers: {
        Cookie: `${accessToken.name}=${accessToken.value}; ${refreshToken.name}=${refreshToken.value}`,
      },
    };
  }

  return options;
}
