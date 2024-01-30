'use client';

import { useState } from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import {
    Command,
    CommandInput,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from '@/components/ui/command';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { getIntials } from '@/lib/helpers';
import { cn } from '@/lib/utils';

interface UserItem {
    id: string;
    name: string;
    email: string;
}

const users: UserItem[] = [
    {
        id: '1',
        name: 'James Muhoro',
        email: 'muhorojames7@gmail.com',
    },
    {
        id: '2',
        name: 'Angela Otieno',
        email: 'angelaotieno@gmail.com',
    },
    {
        id: '3',
        name: 'Justus Too',
        email: 'justustoo@gmail.com',
    },
    {
        id: '4',
        name: 'William Tumpes',
        email: 'williamtumpes@hotmail.com',
    },
    {
        id: '5',
        name: 'Esther Kiome',
        email: 'estherkiome@gmail.com',
    },
    {
        id: '6',
        name: 'Kate Nyambura',
        email: 'nyamburakate@gmail.com',
    },
    {
        id: '7',
        name: 'Wilberforce Amakoye',
        email: 'nyamburakate@gmail.com',
    },
];

export default function UserMultiSelect() {
    const [open, setOpen] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<UserItem[]>([]);

    function isSelected(item: UserItem) {
        return !!selectedUsers.find(user => user.id == item.id);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="justify-between w-[200px]">
                    {`
                        ${
                            selectedUsers.length == 0
                                ? 'Select users ...'
                                : `${selectedUsers.length} selected`
                        }
                    `}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <Command>
                    <CommandInput placeholder="Start typing .." />
                    <CommandEmpty>No available user</CommandEmpty>
                    <CommandGroup className="space-y-2">
                        {users.map(user => (
                            <CommandItem
                                key={user.id}
                                value={user.id}
                                onSelect={currentValue => {
                                    if (
                                        selectedUsers.find(
                                            selectedUser =>
                                                selectedUser.id === currentValue
                                        )
                                    ) {
                                        setSelectedUsers(prev =>
                                            prev.filter(
                                                item => item.id !== currentValue
                                            )
                                        );
                                    } else {
                                        setSelectedUsers([
                                            ...selectedUsers,
                                            user,
                                        ]);
                                    }
                                }}
                            >
                                <div
                                    className={cn(
                                        'flex items-center gap-x-2 p-1 rounded-md w-full',
                                        isSelected(user) ? 'bg-primary' : ''
                                    )}
                                >
                                    <Avatar>
                                        <AvatarFallback>
                                            {getIntials(user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p
                                            className={cn(
                                                'font-medium',
                                                isSelected(user) && 'text-white'
                                            )}
                                        >
                                            {user.name}
                                        </p>
                                        <p
                                            className={cn(
                                                'text-muted-foreground text-sm',
                                                isSelected(user) && 'text-muted'
                                            )}
                                        >
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
