'use client';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import Modal from '@/components/ui/Modal';
import SpinnerMini from '@/components/ui/SpinnerMini';
import { ICategory } from '@/types';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDeleteCategory } from '../hooks/useDeleteCategory';

export default function DeleteCategory({ category }: { category: ICategory }) {
  const [showModal, setShowModal] = useState(false);

  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory();

  const router = useRouter();

  const handleDeleteCategory = async () => {
    deleteCategory(category._id, {
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
            با پذیرفتن این عمل, دسته بندی <q>{category.title}</q> به صورت کامل حذف میشود و قابل
            برگشت نیست.
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
              onClick={handleDeleteCategory}
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
