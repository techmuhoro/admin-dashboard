import React from 'react';
import CustomBreadcrumb, {
    BreadcrumbItem,
} from '@/components/CustomBreadcrumb';

export default function DashboardContentWrapper({
    children,
    breadcrumbsItems,
}: {
    children: React.ReactNode;
    breadcrumbsItems: BreadcrumbItem[];
}) {
    return (
        <main className="py-4 px-8 space-y-4">
            <div>
                <CustomBreadcrumb items={breadcrumbsItems} separator=">" />
            </div>
            <div>{children}</div>
        </main>
    );
}
