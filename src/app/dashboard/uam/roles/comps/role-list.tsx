import ReusableTable from '@/components/table/reusable-table';
import { columns } from '../data';
import { DEFAULT_ROWS_PER_PAGE } from '@/lib/constants';
interface Role {
    id: number;
    name: string;
    description: string;
    createdBy: string;
    dateCreated: string;
}

const roles: Role[] = [
    {
        id: 1,
        name: 'Finance Auditor',
        description: 'This is a custom role',
        createdBy: 'James Muhoro',
        dateCreated: '11.1.2024',
    },
    {
        id: 2,
        name: 'Human Resource Manager',
        description: 'Head of HR',
        createdBy: 'Jack Odour',
        dateCreated: '13.1.2024',
    },
    {
        id: 3,
        name: 'Engineering Lead',
        description: 'Software Engineering Coodinator',
        createdBy: 'James Muhoro',
        dateCreated: '13.1.2024',
    },
    {
        id: 4,
        name: 'Operations Lead',
        description: 'Customer operations lead',
        createdBy: 'James Muhoro',
        dateCreated: '13.1.2024',
    },
    {
        id: 5,
        name: 'Customer Care Executive',
        description: 'Head of customer care team',
        createdBy: 'James Muhoro',
        dateCreated: '13.1.2024',
    },
];

export default function RoleList() {
    const currentPage = 1;
    const count = roles.length;
    const totalPages = Math.ceil(count / DEFAULT_ROWS_PER_PAGE);
    return (
        <div>
            <ReusableTable
                baseUrl="dashboard/uam/roles"
                data={roles}
                searchParams=""
                count={roles.length}
                columns={columns}
                currentPage={currentPage}
                rowsPerPage={DEFAULT_ROWS_PER_PAGE}
                totalPages={totalPages}
                paginate={false}
            />
        </div>
    );
}
