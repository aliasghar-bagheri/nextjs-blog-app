'use server';

import { updateAvatar } from '@/services/auth.service';
import { handleError } from '@/utils/handleError';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function uploadAvatar(
  prevState: { message: string; error: string },
  formData: FormData
) {
  try {
    const cookie = cookies();
    const options = setCookieOnReq(cookie);

    const { message } = await updateAvatar(formData, options);

    revalidatePath('/profile/settings');

    return { message, error: '' };
  } catch (error) {
    const errorMsg = handleError(error);
    return { error: errorMsg, message: '' };
  }
}
