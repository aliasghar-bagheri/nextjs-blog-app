'use client';

import Input from './Input';
import CopyButton from './CopyButton';

const Clipboard = ({ value }: { value: string }) => {
  return (
    <div className="w-56 relative">
      <Input
        type="text"
        readOnly
        dir="ltr"
        value={value}
        className="text-xs py-2.5 font-semibold pl-10 w-full focus-visible:ring-0"
      />
      <CopyButton
        className="absolute top-1/2 -translate-y-1/2 left-0"
        value={value}
      />
    </div>
  );
};

export default Clipboard;
