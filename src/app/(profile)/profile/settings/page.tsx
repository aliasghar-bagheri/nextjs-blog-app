import ProfileSetting from './_/components/ProfileSetting';

export default function ProfileSettingsPage() {
  return (
    <div className="w-full space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 className="text-secondary-900 font-medium text-xl text-nowrap">تنظیمات پروفایل</h2>
      </div>
      <div className="flex justify-center">
        <ProfileSetting />
      </div>
    </div>
  );
}
