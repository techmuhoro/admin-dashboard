'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { convertStringParamsToObject } from '@/lib/helpers';
import { redirect, useRouter } from 'next/navigation';

/**
 *
 * @param searchParams string. Already existing params on the url
 * @returns
 */
export default function BookingFilter({
    searchParams,
    baseUrl,
}: {
    searchParams: string;
    baseUrl: string;
}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const [search, setSearch] = useState({
        id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
        bookedBy: '',
        dateBooked: '',
    });

    // once the page loads automaticat set params
    useEffect(() => {
        setSearch(prev => ({
            ...prev,
            ...convertStringParamsToObject(searchParams),
        }));
    }, [searchParams]);

    function handleChange(name: string) {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(prev => ({ ...prev, [name]: event.target.value }));
        };
    }

    function clearFilters() {
        // clear the filters
        // close popover
        setOpen(false);

        // rerender the page
    }

    function handleFilter() {
        const existingParams = convertStringParamsToObject(searchParams);
        let paramsObj = {
            ...existingParams,
            ...search,
            page: '1',
        };

        // removed empty values
        const cleanParamsObj: { [key: string]: string } = {};

        for (let [key, value] of Object.entries(paramsObj)) {
            if (value) {
                cleanParamsObj[key] = value as string;
            }
        }

        const newParams = new URLSearchParams({
            ...cleanParamsObj,
        }).toString();

        setOpen(false);

        const url = `${baseUrl}?${newParams}`;

        return router.push(url);
    }

    const closePopover = () => setOpen(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Button
                    size={'sm'}
                    variant={'secondary'}
                    className="flex space-x-1"
                >
                    <span>
                        <Filter size={14} />
                    </span>
                    <span>Filter</span>
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[500px] min-h-[200px]">
                <div className="space-y-2">
                    <p className="font-bold text-lg">Filter Bookings</p>

                    <div className="grid grid-cols-12 gap-x-2 gap-y-2">
                        <InputWrapper>
                            <Label htmlFor="id">Id</Label>
                            <Input
                                id="id"
                                name="id"
                                placeholder="i.e 12"
                                value={search.id}
                                onChange={handleChange('id')}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="i.e john doe"
                                value={search.name}
                                onChange={handleChange('name')}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="i.e johndoe@test.com"
                                value={search.email}
                                onChange={handleChange('email')}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="i.e (656) 1607409"
                                value={search.phone}
                                onChange={handleChange('phone')}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Label htmlFor="gender">Gender</Label>
                            <Select
                                name="gender"
                                onValueChange={value =>
                                    setSearch(prev => ({
                                        ...prev,
                                        gender: value,
                                    }))
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder={
                                            search.gender || 'Select Gender'
                                        }
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">
                                        Female
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </InputWrapper>
                    </div>

                    <div className="flex justify-between">
                        <Button size={'sm'} variant="ghost">
                            Clear
                        </Button>
                        <div className="flex space-x-2">
                            <Button
                                onClick={closePopover}
                                size={'sm'}
                                variant="outline"
                            >
                                Cancel
                            </Button>
                            <Button size={'sm'} onClick={handleFilter}>
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

function InputWrapper({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col gap-y-1 col-span-6">{children}</div>;
}
