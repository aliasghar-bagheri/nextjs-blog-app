'use client';

import Button from '@/components/ui/Button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import CategoryForm from '../forms/CategoryForm';

export default function AddCategory() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        variant="primary"
        className="flex items-center gap-x-2"
      >
        ایجاد دسته بندی
        <PlusCircleIcon
          width={20}
          height={20}
        />
      </Button>
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          title="ایجاد دسته بندی"
        >
          <CategoryForm
            type="CREATE"
            onCloseModal={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}
