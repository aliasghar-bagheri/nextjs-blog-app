import ButtonIcon from '@/components/ui/ButtonIcon';
import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function PostTableActions() {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <PencilIcon />
      </ButtonIcon>
      <ButtonIcon variant="danger">
        <TrashIcon />
      </ButtonIcon>
    </div>
  );
}
