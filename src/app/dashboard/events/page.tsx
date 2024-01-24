import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import ReusableTable from '@/components/table/reusable-table';
import { tableColumns, breadcrumbsItems } from './data';
import { getEvents, getEventsCount } from '@/db/events';
import { convertToNumber } from '@/lib/formatter';
import { DEFAULT_ROWS_PER_PAGE } from '@/lib/constants';
import { type EventType } from '@/db/events-data';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Download, Filter, FilterX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardContentWrapper from '@/components/dashboard-content-wrapper';

interface PageProps {
    searchParams: {
        page?: string;
        rowsPerPage?: string;
    };
}

export default async function Page({ searchParams }: PageProps) {
    const { page, rowsPerPage } = searchParams;

    // keep a copy of the current url params
    const searchParamsString = new URLSearchParams(searchParams).toString();

    const currentPage = convertToNumber(page) || 1;
    const rowsPerPageOption =
        convertToNumber(rowsPerPage) || DEFAULT_ROWS_PER_PAGE;

    const events = await getEvents({
        take: rowsPerPageOption,
        skip: (currentPage - 1) * rowsPerPageOption,
    });
    const eventsCount = await getEventsCount();

    const totalPages = eventsCount / rowsPerPageOption;

    return (
        <DashboardContentWrapper breadcrumbsItems={breadcrumbsItems}>
            {/* <div className="mb-4">
                <CustomBreadcrumb separator={'>'} items={breadcrumbsItems} />
            </div> */}

            <h1 className="text-xl font-bold">Events</h1>
            <div className="flex justify-end items-center mb-2 gap-x-3">
                <Button
                    className="flex gap-x-1 items-center"
                    variant={'secondary'}
                    size={'sm'}
                >
                    <Filter size={14} />
                    <span>Filter</span>
                </Button>

                <Button
                    variant={'destructive'}
                    size={'sm'}
                    className="flex gap-x-1 items-center"
                >
                    <FilterX size={14} />
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
                            <Download className="" size={14} />

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

            <ReusableTable<EventType>
                data={events}
                baseUrl="/dashboard/events"
                columns={tableColumns}
                count={eventsCount}
                currentPage={currentPage}
                totalPages={totalPages}
                searchParams={searchParamsString}
                rowsPerPage={rowsPerPageOption}
            />
        </DashboardContentWrapper>
    );
}
