import { type BreadcrumbItem } from '@/components/CustomBreadcrumb';
import { Home } from 'lucide-react';
import { type TableColumn } from '@/components/table/reusable-table';
import { type PermissionObject } from './schema';
import RoleActions from './comps/role-actions';

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
        label: 'Roles',
        link: '/dashbaord/uam/roles',
    },
];

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
        assessor: 'description',
        label: 'Description',
    },
    {
        assessor: 'createdBy',
        label: 'Creator',
    },
    {
        assessor: 'dateCreated',
        label: 'Date Create',
    },
    {
        assessor: 'actions',
        label: 'Actions',
        cell: ({ row }) => {
            return <RoleActions />;
        },
    },
];

// permisssion data
const allPermission = {
    users: ['create_user', 'delete_user', 'update_user', 'list_users'],
    roles: ['create_role', 'delete_role', 'update_role', 'list_roles'],
    events: ['create_event', 'delete_event', 'update_event', 'list_events'],
    bookings: [
        'create_booking',
        'delete_booking',
        'update_booking',
        'list_bookings',
    ],
    user_role: [
        'create_user_role',
        'delete_user_role',
        'update_user_role',
        'list_user_roles',
    ],
};

export function getShapedPermissions() {
    const permissions: PermissionObject[] = [];

    for (let [key, value] of Object.entries(allPermission)) {
        value.forEach(permission => {
            permissions.push({
                name: permission,
                category: key,
                checked: false,
            });
        });
    }

    return permissions;
}

export const permissionCategories = Object.keys(allPermission);
