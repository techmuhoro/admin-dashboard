import { AsideMenuItem } from '../items';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function MenuItem({ item }: { item: AsideMenuItem }) {
    return (
        <li
            className={cn(
                'px-2 py-2 hover:bg-muted  transition duration-300 hover:rounded'
                // active && 'border-l-4 border-primary'
            )}
        >
            <Link href={item.to || ''} className="flex gap-x-2 items-center">
                <span>{item.icon}</span>
                <span>{item.label}</span>
            </Link>
        </li>
    );
}
