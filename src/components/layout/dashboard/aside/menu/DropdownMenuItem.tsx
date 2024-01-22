'use client';
import { useState } from 'react';
import { HomeIcon, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AsideMenuItem } from '../items';
import MenuItem from './MenuItem';

export default function DropdownMenuItem({ item }: { item: AsideMenuItem }) {
    const [open, setOpen] = useState(false);

    return (
        <li className={cn('transition duration-300 hover:rounded')}>
            <div
                className="flex justify-between items-center cursor-pointer mb-2 pl-2 py-2 hover:bg-muted hover:rounded"
                onClick={() => setOpen(prev => !prev)}
            >
                <p className="flex gap-x-2 items-center">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                </p>

                <span>
                    <ChevronRight
                        size={18}
                        className={cn(
                            'text-muted-foreground transition-all duration-300',
                            open && 'rotate-90'
                        )}
                    />
                </span>
            </div>
            <div
                className={cn(
                    'pl-5 max-h-0 overflow-hidden transition-all duration-300 ease-out',
                    open && 'max-h-[300px]'
                )}
            >
                {item.links?.map(childItem =>
                    childItem.links ? (
                        <DropdownMenuItem key={childItem.id} item={childItem} />
                    ) : (
                        <MenuItem key={childItem.id} item={childItem} />
                    )
                )}
            </div>
        </li>
    );
}
