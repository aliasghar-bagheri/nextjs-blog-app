'use client';

import { IUser } from '@/types';
import { useFormState } from 'react-dom';
import { updateInfo } from '../actions/actions';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import SubmitButton from '@/components/ui/SubmitButton';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const initialState = {
  error: '',
  message: '',
};

export default function UserInfoForm({ initialData }: { initialData: IUser }) {
  const [state, formAction] = useFormState(updateInfo, initialState);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }

    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="space-y-3 max-w-md w-full mx-auto"
    >
      <div className="space-y-3">
        <Label htmlFor="name">نام</Label>
        <Input
          type="text"
          name="name"
          id="name"
          className="block w-full"
          defaultValue={initialData.name}
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="email">ایمیل</Label>
        <Input
          type="email"
          name="email"
          id="email"
          className="block w-full"
          defaultValue={initialData.email}
        />
      </div>
      <SubmitButton variant="primary">بروزرسانی</SubmitButton>
    </form>
  );
}
