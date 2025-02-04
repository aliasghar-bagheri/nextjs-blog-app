import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { footerLinks, socialLinks } from '@/constants/mainLinks';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary-100">
      <div className="container pt-10 pb-20 flex items-start flex-wrap gap-8 md:gap-16">
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="flex-1 text-nowrap group"
          >
            <h5 className="group-first-of-type:text-primary-400 text-secondary-900 font-bold text-lg">
              {item.title}
            </h5>
            <ul className="space-y-4 mt-3">
              {item.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex-1 text-nowrap">
          <h5 className="text-secondary-900 font-bold text-lg">
            برای اطلاع از آخرین اخبار عضو شوید
          </h5>
          <div className="space-y-10">
            <div className="flex items-center gap-1 mt-3">
              <Input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full sm:w-60"
              />
              <Button variant="primary">عضویت</Button>
            </div>
            <div className="flex items-center justify-start gap-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                >
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={item.label}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center p-3 bg-primary">
        <p className="text-white font-semibold text-xs sm:text-base">
          © کلیه حقوق مادی و معنوی دوره ها متعلق به دیجی نیوز می باشد.
        </p>
      </div>
    </footer>
  );
}
