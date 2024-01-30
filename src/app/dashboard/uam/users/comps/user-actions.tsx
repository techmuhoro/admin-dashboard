import { type User } from '../data';
import { Edit, Edit2, Edit3 } from 'lucide-react';
import UserUpdate from './user-update';
import UserDelete from './user-delete';

interface UserActionsProps {
    row: User;
}

export default function UserActions({ row }: UserActionsProps) {
    console.log('row ', row);
    return (
        <div className="flex items-center gap-x-2">
            <UserUpdate row={row} />
            <UserDelete row={row} />
        </div>
    );
}
