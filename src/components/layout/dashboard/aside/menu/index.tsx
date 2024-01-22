import { type AsideMenuItem, asideMenuItems } from '../items';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import MenuItem from './MenuItem';
import DropdownMenuItem from './DropdownMenuItem';

export default function MenuItems() {
    return (
        <ul className="space-y-4">
            {asideMenuItems.map(item => {
                return item.links ? (
                    <DropdownMenuItem key={item.id} item={item} />
                ) : (
                    <MenuItem key={item.id} item={item} />
                );
            })}
        </ul>
    );
}
