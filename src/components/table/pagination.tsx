'use client';
import {
    ChevronLast,
    ChevronLeft,
    ChevronFirst,
    ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ROWS_PER_PAGE_OPTIONS, DEFAULT_ROWS_PER_PAGE } from '@/lib/constants';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { convertStringParamsToObject } from '@/lib/helpers';
import { redirect } from 'next/navigation';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    baseUrl: string;
    searchParams: string;
    count: number;
}

export default function Pagination({
    currentPage,
    totalPages,
    rowsPerPage,
    baseUrl,
    searchParams,
    count,
}: PaginationProps) {
    function handleRowPerPageChange(value: string) {
        const newParams = new URLSearchParams({
            ...convertStringParamsToObject(searchParams),
            rowsPerPage: value,
            page: '1', // reset to page one
        }).toString();

        redirect(`${baseUrl}/?${newParams}`);
    }

    function getPaginationLink(page: number) {
        const newParams = new URLSearchParams({
            ...convertStringParamsToObject(searchParams),
            page: page.toString(),
        }).toString();

        return `${baseUrl}/?${newParams}`;
    }

    function getPaginationLabel() {
        const start = (currentPage - 1) * rowsPerPage + 1;
        const end = currentPage * rowsPerPage;
        return `${start} - ${end} of ${count}`;
    }

    return (
        <div className="flex items-center justify-end gap-x-4 mt-2">
            <div className="flex items-center gap-x-2">
                <p>Rows: </p>
                <Select onValueChange={handleRowPerPageChange}>
                    <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder={rowsPerPage} />
                    </SelectTrigger>
                    <SelectContent>
                        {ROWS_PER_PAGE_OPTIONS.map(item => (
                            <SelectItem key={item} value={item.toString()}>
                                {item}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-x-2">
                <div>
                    <Link
                        href={getPaginationLink(1)}
                        className={cn(
                            'inline-block rounded px-3 py-2 hover:bg-muted',
                            currentPage <= 1 &&
                                'pointer-events-none text-muted-foreground'
                        )}
                    >
                        <ChevronFirst />
                    </Link>

                    <Link
                        href={getPaginationLink(currentPage - 1)}
                        className={cn(
                            'inline-block rounded px-3 py-2 hover:bg-muted',
                            currentPage <= 1 &&
                                'pointer-events-none text-muted-foreground'
                        )}
                    >
                        <ChevronLeft />
                    </Link>
                </div>
                <span className="-mt-1 inline-block rounded px-3 py-2 hover:bg-muted">
                    {getPaginationLabel()}
                </span>
                <div>
                    <Link
                        href={getPaginationLink(currentPage + 1)}
                        className={cn(
                            'inline-block rounded px-3 py-2 hover:bg-muted',
                            currentPage >= totalPages &&
                                'pointer-events-none text-muted-foreground'
                        )}
                    >
                        <ChevronRight />
                    </Link>

                    <Link
                        href={getPaginationLink(totalPages)}
                        className={cn(
                            'inline-block rounded px-3 py-2 hover:bg-muted',
                            currentPage >= totalPages &&
                                'pointer-events-none text-muted-foreground'
                        )}
                    >
                        <ChevronLast />
                    </Link>
                </div>
            </div>
        </div>
    );
}
