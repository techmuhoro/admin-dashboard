'use client';

import { useState } from 'react';
import * as Form from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type UserSchemaValues } from '../schema';
import { Input } from '@/components/ui/input';
import Select from '@/components/ui/native-select';
import { departments, type User } from '../data';
import { Button } from '@/components/ui/button';
import { sleep } from '@/lib/helpers';
import LoadingButton from '@/components/loading-button';

interface UserFormProps {
    row?: User;
    isUpdate?: boolean;
}

export default function UserForm({ row, isUpdate = false }: UserFormProps) {
    const [loading, setLoading] = useState(false);
    const form = useForm<UserSchemaValues>({
        defaultValues: {
            name: isUpdate && row?.name ? row.name : '',
            email: isUpdate && row?.email ? row.email : '',
            phone: isUpdate && row?.phone ? row.phone : '',
            department: isUpdate && row?.department ? row.department : '',
        },
        resolver: zodResolver(userSchema),
    });

    async function handleSubmit(values: UserSchemaValues) {
        setLoading(true);

        try {
            await sleep(2000);
            alert(JSON.stringify(values, null, 2));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <Form.Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 md:col-span-6">
                            <Form.FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <Form.FormItem>
                                        <Form.FormLabel>Name</Form.FormLabel>
                                        <Form.FormControl>
                                            <Input
                                                {...field}
                                                placeholder="i.e john doe"
                                            />
                                        </Form.FormControl>
                                        <Form.FormMessage />
                                    </Form.FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <Form.FormItem>
                                        <Form.FormLabel>Email</Form.FormLabel>
                                        <Form.FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="i.e johndoe@gmail.com"
                                            />
                                        </Form.FormControl>
                                        <Form.FormMessage />
                                    </Form.FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <Form.FormItem>
                                        <Form.FormLabel>Phone</Form.FormLabel>
                                        <Form.FormControl>
                                            <Input
                                                {...field}
                                                placeholder="i.e 0743301115"
                                            />
                                        </Form.FormControl>
                                        <Form.FormMessage />
                                    </Form.FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.FormField
                                control={form.control}
                                name="department"
                                render={({ ...field }) => (
                                    <Form.FormItem>
                                        <Form.FormLabel>
                                            Department
                                        </Form.FormLabel>

                                        <Form.FormControl>
                                            <Select
                                                {...field}
                                                onChange={e =>
                                                    form.setValue(
                                                        'department',
                                                        e.target.value
                                                    )
                                                }
                                                defaultValue={
                                                    isUpdate && row?.department
                                                        ? row.department
                                                        : ''
                                                }
                                            >
                                                <option value="">
                                                    Select department
                                                </option>
                                                {departments.map(department => (
                                                    <option
                                                        key={department.id}
                                                        value={department.name}
                                                    >
                                                        {department.name}
                                                    </option>
                                                ))}
                                            </Select>
                                        </Form.FormControl>
                                        <Form.FormMessage />
                                    </Form.FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div>
                        <LoadingButton
                            loading={loading}
                            type="submit"
                            size={'lg'}
                        >
                            Create
                        </LoadingButton>
                    </div>
                </form>
            </Form.Form>
        </div>
    );
}
