import { Gauge, HomeIcon } from 'lucide-react';
import { BreadcrumbItem } from '@/components/CustomBreadcrumb';
import { TableColumn } from '@/components/table/reusable-table';

export const columns: TableColumn[] = [
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
        assessor: 'gender',
        label: 'Gender',
    },
    {
        assessor: 'phone',
        label: 'Phone',
    },
    {
        assessor: 'bookedBy',
        label: 'Booked By',
    },
    {
        assessor: 'dateBooked',
        label: 'Date Booked',
    },
];

export const breadcrumbsItems: BreadcrumbItem[] = [
    {
        label: 'Dashboard',
        icon: <HomeIcon size={16} />,
        link: '/dashboard',
    },
    {
        label: 'Bookings',
        link: '/dashboard/bookings',
    },
];
