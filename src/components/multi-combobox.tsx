'use client';

import { useEffect, useState } from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Framework {
    value: string;
    label: string;
}

const frameworks: Framework[] = [
    {
        value: 'next.js',
        label: 'Next.js',
    },
    {
        value: 'sveltekit',
        label: 'SvelteKit',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
];

export default function MultiCombobox() {
    const [open, setOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<Framework[]>([]);

    useEffect(() => {
        console.log(selectedItems);
    }, [selectedItems]);

    function placeholderMessage() {
        if (selectedItems.length < 1) return 'Select framework';
        return `${selectedItems.length} selected`;
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-[200px] justify-between">
                    {`${
                        selectedItems.length < 1
                            ? 'Select Framework ...'
                            : `${selectedItems.length} selected`
                    }`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <Command>
                    <CommandInput placeholder="Start typing.." />
                    <CommandEmpty>No frameworks found.</CommandEmpty>

                    <CommandGroup>
                        {frameworks.map(framework => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={currentValue => {
                                    if (
                                        selectedItems.find(
                                            item => item.value === currentValue
                                        )
                                    ) {
                                        // remove from list
                                        setSelectedItems(prev =>
                                            prev.filter(
                                                item =>
                                                    item.value !== currentValue
                                            )
                                        );
                                    } else {
                                        // add to list
                                        setSelectedItems([
                                            ...selectedItems,
                                            framework,
                                        ]);
                                    }
                                }}
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4',
                                        !!selectedItems.find(
                                            item =>
                                                item.value === framework.value
                                        )
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    )}
                                />
                                {framework.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
