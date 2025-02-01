import { useRouter } from 'next/navigation';

export function useMoveBack() {
  const router = useRouter();

  const handleMove = () => router.back();

  return handleMove;
}
