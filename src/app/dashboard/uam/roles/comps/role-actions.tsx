import { Button } from '@/components/ui/button';
import * as DropdownMenu from '@/components/ui/dropdown-menu';
import { MoreHorizontal, EyeIcon, EditIcon, TrashIcon } from 'lucide-react';
import { RoleAddUser } from './actions/role-add-user';
import { RoleDelete } from './actions/delete';
import { EditRole } from './actions/edit';
import { RoleAddSchemaType } from '../schema';

interface RoleActionsProps {
    row: RoleAddSchemaType;
}

export default function RoleActions({ row }: RoleActionsProps) {
    return (
        <>
            <DropdownMenu.DropdownMenu modal={false}>
                <DropdownMenu.DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenu.DropdownMenuTrigger>
                <DropdownMenu.DropdownMenuContent>
                    <DropdownMenu.DropdownMenuLabel>
                        Actions
                    </DropdownMenu.DropdownMenuLabel>
                    <DropdownMenu.DropdownMenuSeparator></DropdownMenu.DropdownMenuSeparator>

                    <div className="space-y-1 flex flex-col">
                        <DropdownMenu.DropdownMenuItem className="flex items-center gap-x-1">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            <span>View</span>
                        </DropdownMenu.DropdownMenuItem>
                        <RoleAddUser row={row} />
                        <EditRole row={row} />
                        <RoleDelete row={row} />
                    </div>
                </DropdownMenu.DropdownMenuContent>
            </DropdownMenu.DropdownMenu>
        </>
    );
}
