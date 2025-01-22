import Clipboard from '@/components/ui/Clipboard';
import Image from 'next/image';
import Link from 'next/link';

export default function PostShare({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-7">
      <ul className="flex items-center gap-6">
        <li>
          <Link
            target="_blank"
            href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_APP_ADDRESS}/blogs/${slug}`}
          >
            <Image
              src="/assets/icons/telegram.svg"
              width={30}
              height={30}
              alt="telegram"
            />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={`https://twitter.com/share?text=${title}&url=${process.env.NEXT_PUBLIC_APP_ADDRESS}/blogs/${slug}`}
          >
            <Image
              src="/assets/icons/twitter.svg"
              width={30}
              height={30}
              alt="twitter"
            />
          </Link>
        </li>
      </ul>
      <Clipboard value={`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`} />
    </div>
  );
}
