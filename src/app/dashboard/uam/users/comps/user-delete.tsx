'use client';

import LoadingButton from '@/components/loading-button';
import * as AlertDialog from '@/components/ui/alert-dialog';
import { DeleteIcon, TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { User } from '../data';
import { sleep } from '@/lib/helpers';

interface UserDeleteProps {
    row: User;
}

export default function UserDelete({ row }: UserDeleteProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        setLoading(true);

        try {
            await sleep(2000);
            setModalOpen(false);
            alert(`User ${row.name} to be delete`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AlertDialog.AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
            <AlertDialog.AlertDialogTrigger>
                <TrashIcon size={20} />
            </AlertDialog.AlertDialogTrigger>

            <AlertDialog.AlertDialogContent>
                <AlertDialog.AlertDialogHeader>
                    <AlertDialog.AlertDialogTitle>
                        Delete User - {row.name || ''}
                    </AlertDialog.AlertDialogTitle>

                    <AlertDialog.AlertDialogDescription>
                        This actions is permanent and not reversible
                    </AlertDialog.AlertDialogDescription>
                </AlertDialog.AlertDialogHeader>

                <AlertDialog.AlertDialogFooter>
                    <AlertDialog.AlertDialogCancel>
                        Cancel
                    </AlertDialog.AlertDialogCancel>
                    <LoadingButton
                        onClick={handleDelete}
                        variant={'destructive'}
                        loading={loading}
                    >
                        Delete
                    </LoadingButton>
                </AlertDialog.AlertDialogFooter>
            </AlertDialog.AlertDialogContent>
        </AlertDialog.AlertDialog>
    );
}
