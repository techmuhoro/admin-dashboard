'use client';

import * as Dialog from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { PlusIcon } from 'lucide-react';
import { forwardRef, useState } from 'react';
import UserMultiSelect from '../user-multi-select';
import { Button } from '@/components/ui/button';
import LoadingButton from '@/components/loading-button';
import { sleep } from '@/lib/helpers';
import { type RoleAddSchemaType } from '../../schema';
import { XCircleIcon } from 'lucide-react';

interface RoleAddUserProps {
    row: RoleAddSchemaType;
}

export const RoleAddUser = forwardRef<
    React.ElementRef<typeof DropdownMenuItem>,
    RoleAddUserProps
>(function RoleAddUser({ row }, forwardedRef) {
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleAdd = async () => {
        setLoading(true);

        try {
            await sleep(2000);
            alert('Users to be added');
            setDialogOpen(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog.Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Dialog.DialogTrigger>
                <DropdownMenuItem
                    ref={forwardedRef}
                    onSelect={event => {
                        event.preventDefault();
                    }}
                >
                    <p className="flex items-center gap-x-1">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        <span>Add User</span>
                    </p>
                </DropdownMenuItem>
            </Dialog.DialogTrigger>

            <Dialog.DialogContent className="md:max-w-xl">
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>
                        Role [{row.name}] - Manage users{' '}
                    </Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                        Remove and add users to this role
                    </Dialog.DialogDescription>
                </Dialog.DialogHeader>

                <div className="space-y-4">
                    <div>
                        <p className="font-medium">Remove users</p>

                        <div className="flex gap-2 flex-wrap">
                            <UserChip />
                            <UserChip />
                            <UserChip />
                            <UserChip />
                            <UserChip />
                        </div>
                    </div>

                    <div className="">
                        <p className="font-medium">Add Users</p>
                    </div>
                    <UserMultiSelect />

                    <div className="flex justify-end gap-x-2">
                        <Dialog.DialogClose>
                            <Button className="" variant="outline">
                                Cancel
                            </Button>
                        </Dialog.DialogClose>

                        <LoadingButton
                            type="button"
                            onClick={handleAdd}
                            loading={loading}
                        >
                            Add
                        </LoadingButton>
                    </div>
                </div>
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
});

function UserChip() {
    return (
        <div className="bg-muted inline-flex items-center gap-x-2 px-2 py-1 rounded-full">
            <span>James Muhoro</span>
            <XCircleIcon
                size={20}
                className="text-destructive cursor-pointer"
            />
        </div>
    );
}
