import * as z from 'zod';

const requiredString = z.string().min(1, 'Required');

export const userSchema = z.object({
    name: requiredString,
    email: z.string().email('Email should be a valid email address'),
    phone: requiredString,
    department: requiredString,
});

export type UserSchemaValues = z.infer<typeof userSchema>;
