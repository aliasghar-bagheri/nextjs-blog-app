import clsx from 'clsx';
import { forwardRef, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div className={clsx('w-full overflow-x-auto rounded')}>
        <table
          className={clsx('w-full border-collapse border-spacing-0', className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Table.displayName = 'Table';

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        className={clsx('bg-secondary-0', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

TableHeader.displayName = 'TableHeader';

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => {
    return (
      <tbody
        ref={ref}
        {...props}
      />
    );
  }
);

TableBody.displayName = 'TableBody';

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => {
    return (
      <tr
        ref={ref}
        {...props}
      />
    );
  }
);

TableRow.displayName = 'TableRow';

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    return (
      <th
        className={clsx(
          'border-b border-secondary-200 rtl:text-right ltr:text-left whitespace-nowrap py-3 px-4 text-secondary-600',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TableHead.displayName = 'TableHead';

const TableData = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    return (
      <td
        className={clsx(
          'border-b border-secondary-200 max-w-64 truncate rtl:text-right ltr:text-left whitespace-nowrap p-4 text-secondary-600 text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TableData.displayName = 'TableData';

export { Table, TableHeader, TableBody, TableRow, TableHead, TableData };
