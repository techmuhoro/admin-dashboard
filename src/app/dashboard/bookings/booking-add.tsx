'use client';

import { Button } from '@/components/ui/button';
import { Plus, Copy } from 'lucide-react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { formSchema, BookingSchemaType } from './schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { genders } from '@/lib/constants';
import Select from '@/components/ui/native-select';
import { useToast } from '@/components/ui/use-toast';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import LoadingButton from '@/components/loading-button';

export default function BookingAdd() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<BookingSchemaType>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: BookingSchemaType) {
        setLoading(true);
        try {
            await sleep();
            toast({
                variant: 'primary',
                title: 'Success',
                description: 'Booking has been created successfully',
            });
            setOpen(false);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button size="sm" className="flex items-center gap-x-1">
                    <span>
                        <Plus size={14} />
                    </span>
                    <span>New Booking</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-xl">
                <DialogHeader>
                    <DialogTitle>New Booking</DialogTitle>
                    <DialogDescription>
                        Fill in the details to create new booking
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-12 gap-2 mb-4">
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="i.e James Muhoro"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="col-span-6">
                                <FormField
                                    name="email"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="i.e muhorojames7@gmail.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="i.e (254) 743301115"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Gender</FormLabel>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    defaultValue={''}
                                                >
                                                    <option value="">
                                                        Select gender
                                                    </option>
                                                    {genders.map(gender => (
                                                        <option
                                                            key={gender}
                                                            value={gender}
                                                        >
                                                            {gender}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <DialogFooter className="sm:justify-start">
                            <LoadingButton
                                type="submit"
                                variant="default"
                                size={'sm'}
                                loading={loading}
                            >
                                Create
                            </LoadingButton>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

function sleep(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
}
