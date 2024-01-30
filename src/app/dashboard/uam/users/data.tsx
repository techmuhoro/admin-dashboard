import { type BreadcrumbItem } from '@/components/CustomBreadcrumb';
import { type TableColumn } from '@/components/table/reusable-table';
import { Home } from 'lucide-react';
import UserActions from './comps/user-actions';

export const breadcrumbItems: BreadcrumbItem[] = [
    {
        label: 'Dashboard',
        link: '/dashbaord',
        icon: <Home size={16} />,
    },
    {
        label: 'Acces Control',
    },

    {
        label: 'Users',
        link: '/dashbaord/uam/users',
    },
];

export const tableColumns: TableColumn[] = [
    {
        assessor: 'id',
        label: 'S/N',
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
        assessor: 'department',
        label: 'Department',
    },
    {
        assessor: 'roles',
        label: 'Roles',
        visible: false,
    },

    {
        assessor: 'actions',
        label: 'Actions',
        cell: ({ row }) => <UserActions row={row} />,
    },
];

export interface User {
    id: string;
    email: string;
    name: string;
    department: string;
    phone: string;
    roles?: string;
}

export const users: User[] = [
    {
        id: '1',
        name: 'James Muhoro',
        email: 'muhorojames7@gmail.com',
        department: 'Engineering',
        phone: '0743301115',
    },

    {
        id: '2',
        name: 'Esther Munene',
        email: 'esthermunene@easymail.com',
        department: 'Customer Care',
        phone: '0743301115',
    },

    {
        id: '3',
        name: 'Justus Omollo',
        email: 'justus@hotmail.com',
        department: 'Operations',
        phone: '0743301115',
    },

    {
        id: '4',
        name: 'Damaris Njeri',
        email: 'damarisnjeri@yahoo.com',
        department: 'Marketing',
        phone: '0743301115',
    },

    {
        id: '5',
        name: 'Ian John',
        email: 'ianjohn@gmail.com',
        department: 'Finance',
        phone: '0743301115',
    },
];

interface Department {
    name: string;
    id: string;
}

export const departments: Department[] = [
    {
        id: '1',
        name: 'Engineering',
    },
    {
        id: '2',
        name: 'DevOps',
    },
    {
        id: '3',
        name: 'Human Resource',
    },
    {
        id: '4',
        name: 'Operations',
    },
    {
        id: '5',
        name: 'Customer Care',
    },
    {
        id: '6',
        name: 'Marketing',
    },
    {
        id: '7',
        name: 'Finance',
    },
];
