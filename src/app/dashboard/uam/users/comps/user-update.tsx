import * as Dialog from '@/components/ui/dialog';
import { EditIcon } from 'lucide-react';
import UserForm from './user-form';
import { type User } from '../data';

interface UserUpdateProps {
    row: User;
}

export default function UserUpdate({ row }: UserUpdateProps) {
    return (
        <Dialog.Dialog>
            <Dialog.DialogTrigger>
                <EditIcon size={20} />
            </Dialog.DialogTrigger>

            <Dialog.DialogContent className="md:max-w-2xl">
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Update User</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                        Modify the details you wish to change
                    </Dialog.DialogDescription>
                </Dialog.DialogHeader>

                <div>
                    <UserForm row={row} isUpdate={true} />
                </div>
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
}
