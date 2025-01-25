'use client';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import Modal from '@/components/ui/Modal';
import { IComment } from '@/types';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SpinnerMini from '@/components/ui/SpinnerMini';
import { useDeleteComment } from '../hooks/useDeleteComment';
import { useRouter } from 'next/navigation';

export default function DeleteComment({ comment }: { comment: IComment }) {
  const [showModal, setShowModal] = useState(false);

  const { mutate: deleteComment, isPending: isDeleting } = useDeleteComment();

  const router = useRouter();

  const handleDeleteComment = async () => {
    deleteComment(comment._id, {
      onSuccess() {
        setShowModal(false);
        router.refresh();
      },
    });
  };

  return (
    <>
      <ButtonIcon
        onClick={() => setShowModal(true)}
        variant="danger"
      >
        <TrashIcon />
      </ButtonIcon>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="آیا مطمئن هستید ؟"
      >
        <div className="space-y-7">
          <p>
            با پذیرفتن این عمل, کامنت <q>{comment.user.name}</q> به صورت کامل حذف میشود و قابل برگشت
            نیست.
          </p>
          <div className="flex items-center gap-x-3">
            <Button
              onClick={() => setShowModal(false)}
              variant="ghost"
            >
              انصراف
            </Button>
            <Button
              disabled={isDeleting}
              className="flex items-center gap-2"
              variant="danger"
              onClick={handleDeleteComment}
            >
              {isDeleting && <SpinnerMini />}
              پذیرفتن
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
