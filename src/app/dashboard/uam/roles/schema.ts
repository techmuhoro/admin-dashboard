import * as z from 'zod';

const requiredString = z.string().min(1, 'Required');

const permission = z.object({
    name: z.string(),
    category: z.string(),
    checked: z.boolean(),
});

export const RoleAddSchema = z.object({
    name: requiredString,
    description: requiredString,
    permissions: permission.array(),
});

export type RoleAddSchemaType = z.infer<typeof RoleAddSchema>;
export type PermissionObject = z.infer<typeof permission>;
