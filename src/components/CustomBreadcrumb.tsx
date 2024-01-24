import { BreabcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface BreadcrumbItem {
    icon?: React.ReactNode;
    label: string;
    link?: string;
}
interface CustomBreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string | React.ReactNode;
}
export default function CustomBreadcrumb({
    items,
    separator,
}: CustomBreadcrumbProps) {
    return (
        <Breadcrumbs separator={separator}>
            {items.map(item => (
                <BreabcrumbItem
                    key={`${item.label}-${item.link}`}
                    href={item.link || ''}
                    className={cn(
                        'flex gap-x-1 items-center',
                        !item.link && 'pointer-events-none'
                    )}
                >
                    {item.icon && <>{item.icon}</>}
                    <span>{item.label}</span>
                </BreabcrumbItem>
            ))}
        </Breadcrumbs>
    );
}
