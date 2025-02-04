'use client';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import Modal from '@/components/ui/Modal';
import { IPost } from '@/types';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDeletePost } from '../../posts/_/hooks/useDeletePost';
import SpinnerMini from '@/components/ui/SpinnerMini';
import { useRouter } from 'next/navigation';

export default function DeletePost({ post }: { post: IPost }) {
  const [showModal, setShowModal] = useState(false);

  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();

  const router = useRouter();

  const handleDeletePost = async () => {
    deletePost(post._id, {
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
            با پذیرفتن این عمل, پست <q>{post.title}</q> به صورت کامل حذف میشود و قابل برگشت نیست.
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
              onClick={handleDeletePost}
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
