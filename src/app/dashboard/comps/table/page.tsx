import { BreabcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Gauge } from 'lucide-react';
import ReusableTable from '@/components/table/reusable-table';
import { getUsers, getUsersCount } from '@/db/users';
import { convertToNumber } from '@/lib/formatter';
import { DEFAULT_ROWS_PER_PAGE } from '@/lib/constants';
import { UserType } from '@/db/data';
import { TableColumn } from '@/components/table/reusable-table';

export type SearchParams = {
    page?: string;
    rowsPerPage?: string;
};

interface TablePageProps {
    searchParams: SearchParams;
}

const tableColumns: TableColumn[] = [
    {
        assessor: 'id',
        label: 'id',
    },
    {
        assessor: 'name',
        label: 'Name',
    },
    {
        assessor: 'email',
        label: 'Email',
    },
    {
        assessor: 'gender',
        label: 'Gender',
    },
    {
        assessor: 'Occupation',
        label: 'Occupation',
    },
    {
        assessor: 'favorite',
        label: 'Favorite Color',
    },
    {
        assessor: 'ip_address',
        label: 'Ip Address',
    },
];

export default async function TablePage({ searchParams }: TablePageProps) {
    const { page, rowsPerPage } = searchParams;

    const searchParamsString = new URLSearchParams(searchParams).toString();

    const currentPage = convertToNumber(page) || 1;
    const rowsPerPageOption =
        convertToNumber(rowsPerPage) || DEFAULT_ROWS_PER_PAGE;

    const skip = (currentPage - 1) * rowsPerPageOption;
    const take = rowsPerPageOption;

    const users = await getUsers({ skip, take });
    const usersCount = await getUsersCount();
    const totalPages = usersCount / rowsPerPageOption;

    return (
        <div className="p-4">
            <div className="mb-4">
                <Breadcrumbs>
                    <BreabcrumbItem
                        href="/dashboard"
                        className="flex items-center gap-x-1 hover:underline"
                    >
                        <span>
                            <Gauge size={18} />
                        </span>
                        <span>Dashboard</span>
                    </BreabcrumbItem>

                    <BreabcrumbItem
                        href="/dashboard/comps"
                        className="flex items-center gap-x-1 hover:underline"
                    >
                        <span>Components</span>
                    </BreabcrumbItem>

                    <BreabcrumbItem
                        href="/dashboard/comps/table"
                        className="flex items-center gap-x-1 hover:underline"
                    >
                        <span>Table</span>
                    </BreabcrumbItem>
                </Breadcrumbs>
            </div>

            <div>
                <div className="mb-2">
                    <h1 className="font-bold text-lg">Reusable Table</h1>
                </div>
                <ReusableTable<UserType>
                    currentPage={currentPage}
                    totalPages={totalPages}
                    count={usersCount}
                    rowsPerPage={rowsPerPageOption}
                    data={users}
                    columns={tableColumns}
                    searchParams={searchParamsString}
                    baseUrl="/dashboard/comps/table"
                />
            </div>
        </div>
    );
}
