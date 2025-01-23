import { ReactNode } from 'react';
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from './Table';

export interface DataTableColumn<T> {
  key: keyof T;
  label: ReactNode;
  render?: (item: T) => ReactNode;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  className?: string;
  data: T[];
}

const DataTable = <T,>({ className = '', columns, data }: DataTableProps<T>) => {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key as string}>{column.label as ReactNode}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableData key={column.key as string}>
                  {column.render ? column.render(item) : (item[column.key] as ReactNode)}
                </TableData>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableData
              colSpan={columns.length}
              className="!text-center"
            >
              هیچ نتیجه ای یافت نشد
            </TableData>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DataTable;
