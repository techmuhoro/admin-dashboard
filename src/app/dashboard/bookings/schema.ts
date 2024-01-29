import * as z from 'zod';
import { genders } from '@/lib/constants';

const requiredString = z.string().min(1, 'Required');

export const formSchema = z.object({
    name: requiredString.max(50),
    email: z.string().email().max(100),
    phone: requiredString.max(20),
    // gender: requiredString.refine(
    //     value => genders.includes(value),
    //     `Gender can only be of following types: ${genders.join(', ')}`
    // ),
    gender: z.string(),
});

export type BookingSchemaType = z.infer<typeof formSchema>;
