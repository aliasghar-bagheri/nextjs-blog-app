'use client';

import { useFormState } from 'react-dom';
import AvatarUploader from '@/components/ui/AvatarUploader';
import { useEffect, useState } from 'react';
import SubmitButton from '@/components/ui/SubmitButton';
import toast from 'react-hot-toast';
import { uploadAvatar } from '../actions/actions';

const initialState = {
  message: '',
  error: '',
};

export default function AvatarSettingForm({ avatarSrc }: { avatarSrc: string | null }) {
  const [state, formAction] = useFormState(uploadAvatar, initialState);
  const [fileExist, setFileExist] = useState<File | undefined>();

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
      setFileExist(undefined);
    }

    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center gap-3"
    >
      <AvatarUploader
        id="avatar"
        name="avatar"
        src={avatarSrc || '/assets/images/user-placeholder.svg'}
        handleChange={(file) => setFileExist(file)}
      />
      <SubmitButton
        disabled={!fileExist}
        type="submit"
        variant="primary"
      >
        اعمال
      </SubmitButton>
    </form>
  );
}
