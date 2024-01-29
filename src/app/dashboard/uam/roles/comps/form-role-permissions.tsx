import { type UseFormReturn, useFieldArray } from 'react-hook-form';
import * as Form from '@/components/ui/form';
import { permissionCategories } from '../data';
import { RoleAddSchemaType } from '../schema';
import { Checkbox } from '@/components/ui/checkbox';

interface FormRolePermissionProps {
    form: UseFormReturn<RoleAddSchemaType>;
}
export default function FormRolePermissions({ form }: FormRolePermissionProps) {
    const fieldArray = useFieldArray({
        control: form.control,
        name: 'permissions',
    });

    return (
        <div className="space-y-4">
            <h3 className="font-semibold">Permissions</h3>

            <div className="space-y-5 ">
                {permissionCategories.map(category => (
                    <div key={category} className="space-y-2">
                        <h4 className="capitalize font-medium">{category}</h4>
                        <div className="grid grid-cols-12 gap-3">
                            {fieldArray.fields.map((field, index) => {
                                const permissionItem = form.getValues(
                                    `permissions.${index}`
                                );

                                if (permissionItem?.category === category) {
                                    return (
                                        <div
                                            key={field.id}
                                            className="col-span-3"
                                        >
                                            <Form.FormField
                                                control={form.control}
                                                name={`permissions.${index}.name`}
                                                render={({ field }) => (
                                                    <Form.FormItem>
                                                        <div className="flex items-center gap-x-1">
                                                            <Form.FormControl>
                                                                <Checkbox
                                                                    {...field}
                                                                    onCheckedChange={value => {
                                                                        if (
                                                                            typeof value ===
                                                                            'boolean'
                                                                        ) {
                                                                            form.setValue(
                                                                                `permissions.${index}.checked`,
                                                                                value
                                                                            );
                                                                        }
                                                                    }}
                                                                />
                                                            </Form.FormControl>

                                                            <Form.FormLabel>
                                                                {
                                                                    permissionItem?.name
                                                                }
                                                            </Form.FormLabel>
                                                        </div>
                                                    </Form.FormItem>
                                                )}
                                            />
                                        </div>
                                    );
                                }
                                return '';
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
