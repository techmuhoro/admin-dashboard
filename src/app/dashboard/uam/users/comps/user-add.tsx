'use client';

import { useState } from 'react';
import * as Dialog from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import UserForm from './user-form';

export default function UserAdd() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Dialog.Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <Dialog.DialogTrigger>
                <Button
                    className="flex items-center gap-x-1"
                    variant={'default'}
                    size={'sm'}
                >
                    <Plus size={16} />
                    <span>New User</span>
                </Button>
            </Dialog.DialogTrigger>

            <Dialog.DialogContent className="md:max-w-2xl">
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Create New User</Dialog.DialogTitle>

                    <Dialog.DialogDescription>
                        Fill in the form below to create a new user
                    </Dialog.DialogDescription>
                </Dialog.DialogHeader>

                <div>
                    <UserForm />
                </div>
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
}
