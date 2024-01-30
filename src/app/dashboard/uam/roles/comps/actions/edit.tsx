'use client';

import { forwardRef } from 'react';
import * as Dialog from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { EditIcon } from 'lucide-react';
import { RoleAddSchemaType } from '../../schema';
import RoleForm from './form';

interface EditRoleProps {
    row: RoleAddSchemaType;
}

export const EditRole = forwardRef<
    React.ElementRef<typeof DropdownMenuItem>,
    EditRoleProps
>(function EditRole(props, forwardedRef) {
    // handle the edit
    const handleSubmit = (values: RoleAddSchemaType) => {
        console.log(values);
    };

    const { row } = props;
    return (
        <Dialog.Dialog>
            <Dialog.DialogTrigger>
                <DropdownMenuItem
                    ref={forwardedRef}
                    onSelect={event => {
                        event.preventDefault();
                    }}
                    className="flex items-center gap-x-1"
                >
                    <EditIcon className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                </DropdownMenuItem>
            </Dialog.DialogTrigger>

            <Dialog.DialogContent className="md:max-w-2xl">
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Edit Role</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                        Modify the necessary details and click edit to save
                    </Dialog.DialogDescription>
                </Dialog.DialogHeader>

                <div>
                    <RoleForm
                        row={row}
                        isUpdate={true}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
});
