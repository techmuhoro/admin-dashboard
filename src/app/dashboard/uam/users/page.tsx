import DashboardContentWrapper from '@/components/dashboard-content-wrapper';
import { breadcrumbItems, tableColumns, users } from './data';
import ReusableTable from '@/components/table/reusable-table';
import { DEFAULT_ROWS_PER_PAGE } from '@/lib/constants';
import UserAdd from './comps/user-add';

export default function Page() {
    const currentPage = 1;
    const rowsPerPage = DEFAULT_ROWS_PER_PAGE;
    const count = 5;
    const totalPages = Math.ceil(count / rowsPerPage);

    return (
        <DashboardContentWrapper breadcrumbsItems={breadcrumbItems}>
            <div className="space-y-2">
                <p className="text-lg font-bold">Roles</p>
                <div>
                    <UserAdd />
                </div>

                <div>
                    <ReusableTable
                        data={users}
                        columns={tableColumns}
                        count={count}
                        currentPage={currentPage}
                        rowsPerPage={rowsPerPage}
                        totalPages={totalPages}
                        baseUrl="/dashboard/uam/users"
                        searchParams=""
                        paginate={false}
                    />
                </div>
            </div>
        </DashboardContentWrapper>
    );
}
