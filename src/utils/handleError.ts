import { AxiosError } from 'axios';

export function handleError(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response) {
      return `${error.response.data?.message || 'متاسفانه خطایی رخ داد'}`;
    }

    if (error.request) {
      return `پاسخی از سرور دریافت نشد. لطفا اتصال اینترنت خود را بررسی کنید`;
    }

    return `${error.message}`;
  }

  if (error instanceof Error) {
    return `${error.message}`;
  }

  return 'متاسفانه خطایی رخ داد';
}
