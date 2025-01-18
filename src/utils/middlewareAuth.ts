import { IUser } from '@/types';
import { NextRequest } from 'next/server';

export async function middlewareAuth(request: NextRequest): Promise<IUser | undefined> {
  const access_token = request.cookies.get('accessToken');
  const refresh_token = request.cookies.get('refreshToken');

  if (access_token && refresh_token) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
        headers: {
          Cookie: `${access_token.name}=${access_token.value}; ${refresh_token.name}=${refresh_token.value}`,
        },
      });

      const { data } = await response.json();

      const { user } = data || {};

      return user;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  return undefined;
}
