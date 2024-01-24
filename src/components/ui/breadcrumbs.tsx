import React from 'react';
import Link from 'next/link';

function Breadcrumbs({
    children,
    separator = '/',
}: {
    children: React.ReactNode;
    separator?: string | React.ReactNode;
}) {
    const lastIndex = React.Children.count(children) - 1;

    return (
        <div className="flex space-x-2">
            {React.Children.map(children, (child, index) => (
                <div className="flex space-x-2">
                    {child}
                    <span>{index !== lastIndex && <>{separator}</>}</span>
                </div>
            ))}
        </div>
    );
}

// React.HTMLProps<HTMLAnchorElement>

function BreabcrumbItem(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link {...props} href={props.href || ''}>
            {props.children}
        </Link>
    );
}

export { Breadcrumbs, BreabcrumbItem };
