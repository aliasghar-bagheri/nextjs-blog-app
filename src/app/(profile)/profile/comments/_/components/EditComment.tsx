'use client';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import Modal from '@/components/ui/Modal';
import { Option, Select } from '@/components/ui/Select';
import { IComment } from '@/types';
import { PencilIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';
import { useEditComment } from '../hooks/useEditComment';
import SpinnerMini from '@/components/ui/SpinnerMini';
import { useRouter } from 'next/navigation';

export default function EditComment({ comment }: { comment: IComment }) {
  const [showModal, setShowModal] = useState(false);
  const [commentStatus, setCommentStatus] = useState('0');

  const { mutate: editComment, isPending: isEditing } = useEditComment();

  const router = useRouter();

  const statusOptions = [
    {
      value: '0',
      label: 'در انتظار تایید',
    },
    {
      value: '1',
      label: 'رد شده',
    },
    {
      value: '2',
      label: 'تایید شده',
    },
  ];

  const handleEditComment = () => {
    editComment(
      { commentId: comment._id, data: { status: commentStatus } },
      {
        onSuccess() {
          setShowModal(false);
          router.refresh();
        },
      }
    );
  };

  return (
    <>
      <ButtonIcon
        onClick={() => setShowModal(true)}
        variant="secondary"
      >
        <PencilIcon />
      </ButtonIcon>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={`بروزرسانی کامنت '${comment.user.name}'`}
      >
        <fieldset
          disabled={isEditing}
          className="w-full space-y-3"
        >
          <Select
            name="status"
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setCommentStatus(event.target.value)
            }
            defaultValue={comment.status}
            className="w-full"
          >
            {statusOptions.map((status) => (
              <Option
                key={status.value}
                value={status.value}
              >
                {status.label}
              </Option>
            ))}
          </Select>
          <Button
            onClick={handleEditComment}
            className="flex items-center justify-center"
            disabled={isEditing}
            variant="primary"
            fullWidth
          >
            {isEditing ? <SpinnerMini /> : 'تایید'}
          </Button>
        </fieldset>
      </Modal>
    </>
  );
}
