import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import {
    MoreHorizontal,
    EyeIcon,
    PlusIcon,
    EditIcon,
    TrashIcon,
} from 'lucide-react';
import RoleAddUser from './role-add-user';
import { Dialog } from '@/components/ui/dialog';

export default function RoleActions() {
    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator></DropdownMenuSeparator>

                    <div className="space-y-1">
                        <DropdownMenuItem className="flex items-center gap-x-1">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            <span>View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <RoleAddUser />
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center gap-x-1">
                            <EditIcon className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-x-1">
                            <TrashIcon className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
