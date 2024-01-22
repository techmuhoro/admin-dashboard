import {
    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { redirect } from 'next/navigation';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Pagination from './pagination';
import { Button } from '../ui/button';
import { Download, Filter, FilterX } from 'lucide-react';

export type TableColumn = {
    assessor: string;
    label: string;
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
}: ReusableTableProps<T>) {
    return (
        <div>
            <div className="flex justify-end items-center mb-2 gap-x-3">
                <Button
                    className="flex gap-x-1 items-center"
                    variant={'secondary'}
                    size={'sm'}
                >
                    <Filter size={16} />
                    <span>Filter</span>
                </Button>

                <Button
                    variant={'destructive'}
                    size={'sm'}
                    className="flex gap-x-1 items-center"
                >
                    <FilterX size={16} />
                    <span>Clear</span>
                </Button>
                <Button variant="outline" size={'sm'}>
                    Show All
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            className="flex gap-x-1 items-center"
                            size={'sm'}
                        >
                            <Download className="" size={16} />

                            <span>Export</span>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>Choose Format</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>PDF</DropdownMenuItem>
                        <DropdownMenuItem>EXCEL</DropdownMenuItem>
                        <DropdownMenuItem>CSV</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
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
                            {columns.map(({ label, assessor }) => (
                                <TableCell key={`${label}-${assessor}`}>
                                    {item[assessor]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex items-center justify-end gap-x-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    rowsPerPage={rowsPerPage}
                    baseUrl={baseUrl}
                    searchParams={searchParams}
                />
            </div>
        </div>
    );
}
