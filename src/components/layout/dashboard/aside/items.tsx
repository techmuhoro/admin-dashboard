import {
    HomeIcon,
    User,
    Gauge,
    CalendarClock,
    Wallet,
    Component,
    BookOpenCheck,
    ChevronRight,
    ChevronDown,
} from 'lucide-react';

export type AsideMenuItem = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    to?: string;
    links?: AsideMenuItem[];
    visible?: boolean;
};

export const asideMenuItems: AsideMenuItem[] = [
    {
        id: '1',
        label: 'Dashboard',
        icon: <Gauge size={16} />,
        to: '/dashboard',
    },

    {
        id: '2',
        label: 'Bookings',
        icon: <BookOpenCheck size={16} />,
        to: '/dashboard/bookings',
    },
    {
        id: '3',
        label: 'Wallet',
        icon: <Wallet size={16} />,
        to: '/dashboard',
    },
    {
        id: '4',
        label: 'Events',
        icon: <CalendarClock size={16} />,
        to: '/dashboard/events',
    },
    {
        id: '5',
        label: 'Components',
        icon: <Component size={16} />,
        to: '/dashboard',
        links: [
            {
                id: '5-1',
                label: 'Index',
                to: '/dashboard/comps',
            },
            {
                id: '5-2',
                label: 'Re-usable Table',
                to: '/dashboard/comps/table',
            },
            {
                id: '5-3',
                label: 'Data Table',
                to: '/dashboard/comps/data-table',
            },
            {
                id: '5-4',
                label: 'Modal',
                to: '/',
            },
        ],
    },
    {
        id: '6',
        label: 'Access control',
        icon: <User size={16} />,

        links: [
            {
                id: '6-1',
                label: 'User',
                to: '/setting/uam/users',
                links: [
                    {
                        id: '6-1-1',
                        label: 'Vies users',
                        to: '',
                    },

                    {
                        id: '6-1-2',
                        label: 'Create users',
                        to: '',
                    },
                ],
            },
            {
                id: '6-2',

                label: 'Roles',
                to: '/setting/uam/roles',
            },
            {
                id: '6-3',
                label: 'Permission',
                to: '/setting/uam/permissions',
            },
        ],
    },
];
