'use client';

import { forwardRef, useState } from 'react';
import * as AlertDialog from '@/components/ui/alert-dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { TrashIcon } from 'lucide-react';
import LoadingButton from '@/components/loading-button';
import { sleep } from '@/lib/helpers';
import { RoleAddSchemaType } from '../../schema';

interface RoleDeleteProps {
    row: RoleAddSchemaType;
}
export const RoleDelete = forwardRef<
    React.ElementRef<typeof DropdownMenuItem>,
    RoleDeleteProps
>(function RoleDelete({ row }, forwardedRef) {
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDelete = async () => {
        setLoading(true);

        try {
            await sleep(2000);
            alert('Role to be delete');
            setDialogOpen(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AlertDialog.AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <AlertDialog.AlertDialogTrigger>
                <DropdownMenuItem
                    ref={forwardedRef}
                    onSelect={event => {
                        event.preventDefault();
                    }}
                >
                    <TrashIcon className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                </DropdownMenuItem>
            </AlertDialog.AlertDialogTrigger>

            <AlertDialog.AlertDialogContent>
                <AlertDialog.AlertDialogHeader>
                    <AlertDialog.AlertDialogTitle>
                        Delete Role - {row.name}
                    </AlertDialog.AlertDialogTitle>
                    <AlertDialog.AlertDialogDescription>
                        Users will not be able to perform actions that were in
                        this role
                    </AlertDialog.AlertDialogDescription>
                </AlertDialog.AlertDialogHeader>

                <AlertDialog.AlertDialogFooter>
                    <AlertDialog.AlertDialogCancel>
                        Cancel
                    </AlertDialog.AlertDialogCancel>

                    <LoadingButton
                        variant="destructive"
                        loading={loading}
                        type="button"
                        onClick={handleDelete}
                    >
                        Delete
                    </LoadingButton>
                </AlertDialog.AlertDialogFooter>
            </AlertDialog.AlertDialogContent>
        </AlertDialog.AlertDialog>
    );
});
