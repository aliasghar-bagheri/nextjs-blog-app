'use client';

import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import Textarea from '@/components/ui/Textarea';
import { useAuth } from '@/context/AuthContext';
import { TPostComment } from '@/types';
import { useFormState } from 'react-dom';
import createComment from '../../actions/actions';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/ui/SubmitButton';

type PostCommentFormProps = {
  postId: string;
  parentComment: TPostComment | null;
  onCloseCommentWriting: () => void;
};

export type T_InitialStateAction = {
  error?: string;
  message?: string;
};

const initialState: T_InitialStateAction = {
  error: '',
  message: '',
};

export default function PostCommentForm({
  postId,
  parentComment,
  onCloseCommentWriting,
}: PostCommentFormProps) {
  const [state, formAction] = useFormState(createComment, initialState);

  const { user } = useAuth();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    if (state?.message) {
      toast.success(state.message);
      onCloseCommentWriting();
    }
    if (state?.error) {
      toast.error(state?.error);
    }
  }, [state]);

  return (
    <div className="rounded bg-secondary-0 border border-secondary-100 p-3 sm:p-5">
      <div className="flex items-center gap-3 mb-5">
        <Avatar
          src={user?.avatar || '/assets/images/user-placeholder.svg'}
          className="w-14 h-14"
          alt={user?.name || ''}
        />
        <div>
          <p className="text-lg text-secondary-900">{user?.name}</p>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>
      <form
        action={async (formData: FormData) => {
          formData.append('postId', postId);
          formData.append('parentId', parentComment?._id || '');
          await formAction(formData);
        }}
      >
        <Textarea
          ref={textareaRef}
          name="text"
          placeholder={
            parentComment ? `پاسخ به نظر ${parentComment.user.name}...` : 'نظر خود را بنویسید...'
          }
          className="inputField w-full min-h-40 resize-y"
        ></Textarea>
        <div className="flex items-center gap-x-3">
          <SubmitButton
            variant="primary"
            type="submit"
          >
            ثبت
          </SubmitButton>
          <Button
            type="submit"
            variant="ghost"
            onClick={onCloseCommentWriting}
          >
            انصراف
          </Button>
        </div>
      </form>
    </div>
  );
}
