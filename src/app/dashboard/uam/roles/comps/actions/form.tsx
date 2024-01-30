import { useForm } from 'react-hook-form';
import { RoleAddSchema, type RoleAddSchemaType } from '../../schema';
import { getShapedPermissions } from '../../data';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Form from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import FormRolePermissions from '../form-role-permissions';
import LoadingButton from '@/components/loading-button';

interface RoleFormProps {
    row?: RoleAddSchemaType;
    isUpdate?: boolean;
    handleSubmit: (v: RoleAddSchemaType) => void;
}

export default function RoleForm({ row, isUpdate = false }: RoleFormProps) {
    const form = useForm<RoleAddSchemaType>({
        defaultValues: {
            name: isUpdate && row?.name ? row.name : '',
            description: isUpdate && row?.description ? row.description : '',
            permissions: [...getShapedPermissions()],
        },
        resolver: zodResolver(RoleAddSchema),
    });

    function handleSubmit(values: RoleAddSchemaType) {
        console.log(values);
    }

    return (
        <>
            <Form.Form {...form}>
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
                                    <Form.FormLabel>Description</Form.FormLabel>
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
                    <LoadingButton>
                        {isUpdate ? 'Update' : 'Create'}
                    </LoadingButton>
                </form>
            </Form.Form>
        </>
    );
}
