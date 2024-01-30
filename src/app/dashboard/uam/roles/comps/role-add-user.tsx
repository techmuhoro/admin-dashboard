'use client';

import { Button } from '@/components/ui/button';
import * as Dialog from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { PlusIcon } from 'lucide-react';
import { forwardRef, useState } from 'react';

export default function RoleAddUser() {
    const [open, setOpen] = useState(false);
    return (
        <Dialog.Dialog open={open} onOpenChange={setOpen}>
            <Dialog.DialogTrigger>
                <p className="flex items-center gap-x-1">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    <span>Add User</span>
                </p>
            </Dialog.DialogTrigger>
            <Dialog.DialogContent>
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Assign Role</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                        Select users and proceed to assign role
                    </Dialog.DialogDescription>

                    <div>Role</div>
                </Dialog.DialogHeader>
                <Dialog.DialogFooter>
                    <Button type="button">Assign</Button>
                </Dialog.DialogFooter>
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
}

interface DialogItemProps {}
