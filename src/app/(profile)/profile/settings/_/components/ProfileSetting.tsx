import { cookies } from 'next/headers';
import AvatarSettingForm from '../form/AvatarSettingForm';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { getUserApi } from '@/services/auth.service';
import { IUser } from '@/types';
import UserInfoForm from '../form/UserInfoForm';

export default async function ProfileSetting() {
  const cookie = cookies();
  const options = setCookieOnReq(cookie);
  const { user } = (await getUserApi(options)) as { user: IUser };

  return (
    <div className="bg-secondary-0/70 relative drop-shadow px-3 sm:px-7 py-10 rounded flex flex-col gap-10">
      <h2 className="text-secondary-900 font-medium text-lg text-nowrap">اطلاعات حساب</h2>
      <div className="space-y-8">
        <AvatarSettingForm avatarSrc={user.avatarUrl} />
        <UserInfoForm initialData={user} />
      </div>
    </div>
  );
}
