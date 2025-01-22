'use server';

import { handleError } from '@/utils/handleError';
import createNewCommentApi from '@/services/comment.service';
import { INewComment } from '@/types';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { T_InitialStateAction } from '../components/comment/PostCommentForm';
import { revalidatePath } from 'next/cache';

export default async function createComment(prevState: T_InitialStateAction, formData: FormData) {
  const cookie = cookies();
  const options = setCookieOnReq(cookie);

  const data: INewComment = {
    postId: `${formData.get('postId')}`,
    parentId: `${formData.get('parentId')}`,
    text: `${formData.get('text')}`,
  };

  try {
    const { message } = (await createNewCommentApi(data, options)) as { message: string };

    revalidatePath('/blogs/[slug]', 'page');

    return { message, error: '' };
  } catch (error) {
    const message = handleError(error);
    return { error: message, message: '' };
  }
}
