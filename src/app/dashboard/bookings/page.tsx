import DashboardContentWrapper from '@/components/dashboard-content-wrapper';
import { breadcrumbsItems, columns } from './data';
import { PageProps } from './types';
import { convertToNumber } from '@/lib/formatter';
import { DEFAULT_ROWS_PER_PAGE } from '@/lib/constants';
import { getBookings, getBookingsCount } from '@/db/bookings';
import ReusableTable from '@/components/table/reusable-table';
import { BookingType } from '@/db/bookings-data';
import BookingFilter from './booking-filter';
import BookingAdd from './booking-add';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function Page({ searchParams }: PageProps) {
    const { rowsPerPage, page, ...filterOptions } = searchParams;

    // keep a copy of the current url params
    const searchParamsString = new URLSearchParams({
        ...searchParams,
    }).toString();

    const currentPage = convertToNumber(page) || 1;
    const rowsPerPageOption =
        convertToNumber(rowsPerPage) || DEFAULT_ROWS_PER_PAGE;

    const bookingsPromise = getBookings({
        take: rowsPerPageOption,
        skip: (currentPage - 1) * rowsPerPageOption,
        where: filterOptions,
    });

    const countPromise = getBookingsCount(filterOptions);

    const [bookings, count] = await Promise.all([
        bookingsPromise,
        countPromise,
    ]);

    const totalPages = Math.ceil(count / rowsPerPageOption);

    const baseUrl = '/dashboard/bookings';

    return (
        <DashboardContentWrapper breadcrumbsItems={breadcrumbsItems}>
            <div className="space-y-2">
                <p className="text-lg font-bold">Bookings</p>
                <div className="flex items-center">
                    <BookingAdd />
                    <div className="ml-auto">
                        <BookingFilter
                            searchParams={searchParamsString}
                            baseUrl={baseUrl}
                        />
                    </div>
                </div>
                <ReusableTable<BookingType>
                    data={bookings}
                    baseUrl={baseUrl}
                    count={count}
                    currentPage={currentPage}
                    columns={columns}
                    rowsPerPage={rowsPerPageOption}
                    totalPages={totalPages}
                    searchParams={searchParamsString}
                />
            </div>
        </DashboardContentWrapper>
    );
}
