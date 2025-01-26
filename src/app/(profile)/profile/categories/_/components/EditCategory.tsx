'use client';

import ButtonIcon from '@/components/ui/ButtonIcon';
import Modal from '@/components/ui/Modal';
import { ICategory } from '@/types';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import CategoryForm from '../forms/CategoryForm';

export default function EditCategory({ category }: { category: ICategory }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ButtonIcon
        onClick={() => setShowModal(true)}
        variant="secondary"
      >
        <PencilIcon />
      </ButtonIcon>
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          title="بروزرسانی دسته بندی"
        >
          <CategoryForm
            type="UPDATE"
            initialData={category}
            onCloseModal={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}
