import { Badge } from '@/components/ui/badge';
import { type TableColumn } from '@/components/table/reusable-table';
import { Gauge, ArrowDown, ArrowUp } from 'lucide-react';
import { BreadcrumbItem } from '@/components/CustomBreadcrumb';

export const tableColumns: TableColumn[] = [
    {
        assessor: 'id',
        label: 'S/N',
    },
    {
        assessor: 'eventOwner',
        label: 'Event Owner',
    },
    {
        assessor: 'eventName',
        label: 'Event Name',
    },
    {
        assessor: 'eventOwnerEmail',
        label: 'Onwer Email',
    },
    {
        assessor: 'ticketTypes',
        label: 'No of Tickets',
    },

    {
        assessor: 'sales',
        label: 'Sales',
        cell: ({ value }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                currency: 'KES',
                style: 'currency',
            }).format(value);

            return formatted;
        },
    },

    {
        assessor: 'approved',
        label: 'Approved',
        cell: ({ value }) => {
            if (value === true) {
                return (
                    <p className="flex gap-x-1 items-center">
                        <span>
                            <ArrowUp size={14} />
                        </span>
                        <span>Yes</span>
                    </p>
                );
            }
            if (value === false) {
                return (
                    <p className="flex gap-x-1 items-center">
                        <span>
                            <ArrowDown size={14} />
                        </span>
                        <span>No</span>
                    </p>
                );
            }
            return value;
        },
    },
    {
        assessor: 'dateCreated',
        label: 'Date Created',
    },
];

export const breadcrumbsItems: BreadcrumbItem[] = [
    {
        icon: <Gauge size={16} />,
        label: 'Dashboard',
        link: '/dashboard',
    },
    {
        label: 'Events',
    },
];
