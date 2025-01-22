import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import ButtonIcon from './ButtonIcon';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'link';
}

const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ variant = 'outline', className, value, ...props }, ref) => {
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(value);
      setIsCopy(true);
      toast.success('کپی شد');

      setTimeout(() => setIsCopy(false), 2000);
    };

    return (
      <ButtonIcon
        onClick={handleCopy}
        className={clsx(className)}
        variant={variant}
        ref={ref}
        {...props}
      >
        {isCopy ? <CheckCircleIcon /> : <ClipboardIcon />}
      </ButtonIcon>
    );
  }
);

CopyButton.displayName = 'CopyButton';

export default CopyButton;
