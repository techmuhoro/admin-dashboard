import {
    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from '@/components/ui/table';

import { redirect } from 'next/navigation';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Pagination from './pagination';
import { Button } from '../ui/button';
import { Download, Filter, FilterX } from 'lucide-react';

export type TableColumn = {
    assessor: string;
    label: string;
    cell?: (v: any) => any;
};

interface ReusableTableProps<T> {
    data: T[];
    columns: TableColumn[];
    currentPage: number;
    totalPages: number;
    count: number;
    rowsPerPage: number;
    baseUrl: string;
    searchParams: string;
    paginate?: boolean;
}
export default function ReusableTable<T>({
    columns,
    data,
    currentPage,
    totalPages,
    count,
    rowsPerPage,
    baseUrl,
    searchParams,
    paginate = true,
}: ReusableTableProps<T>) {
    return (
        <div>
            <Table className="border border-border">
                <TableHeader>
                    <TableRow>
                        {columns.map(({ label, assessor }) => (
                            <TableHead key={`${label}-${assessor}`}>
                                {label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((item: any, index) => (
                        <TableRow key={item.id}>
                            {columns.map(({ label, assessor, cell }) => (
                                <TableCell key={`${label}-${assessor}`}>
                                    {cell && typeof cell === 'function'
                                        ? cell(item[assessor])
                                        : item[assessor]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {paginate && (
                <div className="flex items-center justify-end gap-x-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        rowsPerPage={rowsPerPage}
                        baseUrl={baseUrl}
                        searchParams={searchParams}
                        count={count}
                    />
                </div>
            )}
        </div>
    );
}
