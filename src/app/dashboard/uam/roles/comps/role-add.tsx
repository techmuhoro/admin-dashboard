'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import * as Dialog from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import * as Form from '@/components/ui/form';
import LoadingButton from '@/components/loading-button';
import { RoleAddSchemaType, RoleAddSchema } from '../schema';
import { getShapedPermissions } from '../data';
import { zodResolver } from '@hookform/resolvers/zod';
import FormRolePermissions from './form-role-permissions';
import RoleForm from './actions/form';

export default function RoleAdd() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const form = useForm<RoleAddSchemaType>({
        defaultValues: {
            name: '',
            description: '',
            permissions: [...getShapedPermissions()],
        },
        resolver: zodResolver(RoleAddSchema),
    });

    function handleSubmit(values: any) {
        console.log(values);
        alert('James muhoro, best software in the world');
    }

    return (
        <Dialog.Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <Dialog.DialogTrigger>
                <Button size={'sm'} className="flex items-center gap-x-1">
                    <Plus size={16} />
                    <span>New Role</span>
                </Button>
            </Dialog.DialogTrigger>
            <Dialog.DialogContent className="sm:max-w-md md:max-w-[60%]">
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Create New Role</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                        Fillout below form to create a role
                    </Dialog.DialogDescription>
                </Dialog.DialogHeader>
                <div>
                    <RoleForm handleSubmit={handleSubmit} />
                </div>
                {/* <Form.Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-4"
                    >
                        <div className="space-y-4">
                            <Form.FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <Form.FormItem>
                                        <Form.FormLabel>Name</Form.FormLabel>
                                        <Form.FormControl>
                                            <Input
                                                placeholder="i.e Finance Auditor"
                                                {...field}
                                            />
                                        </Form.FormControl>
                                        <Form.FormMessage />
                                    </Form.FormItem>
                                )}
                            />

                            <Form.FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <Form.FormItem>
                                        <Form.FormLabel>
                                            Description
                                        </Form.FormLabel>
                                        <Form.FormControl>
                                            <Textarea
                                                placeholder="enter your description"
                                                {...field}
                                            />
                                        </Form.FormControl>
                                        <Form.FormMessage />
                                    </Form.FormItem>
                                )}
                            />
                            <FormRolePermissions form={form} />
                        </div>

                        <Dialog.DialogFooter className="sm:justify-start">
                            <LoadingButton type="submit" size={'sm'}>
                                <Plus size={16} /> <span>Create Role</span>
                            </LoadingButton>
                        </Dialog.DialogFooter>
                    </form>
                </Form.Form> */}
            </Dialog.DialogContent>
        </Dialog.Dialog>
    );
}
