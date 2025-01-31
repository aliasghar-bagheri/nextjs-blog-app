'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { useMoveBack } from '@/hooks/useMoveBack';

export default function MoveBackButton() {
  const handleMove = useMoveBack();

  return (
    <Button
      type="button"
      onClick={handleMove}
      variant="primary"
    >
      بازگشت به صفحه ی قبل
      <ArrowLeftIcon />
    </Button>
  );
}
