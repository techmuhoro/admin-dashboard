'use client';
import Image from 'next/image';
import SiteLogo from '@/assets/site-logo.png';
import {
    HomeIcon,
    User,
    Gauge,
    CalendarClock,
    Wallet,
    Component,
    BookOpenCheck,
    ChevronRight,
    ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Aside() {
    return (
        <>
            <aside className="col-start-1 col-end-3 border-r border-border">
                <header className="h-[20%] ">
                    <div className="flex h-full justify-center items-center">
                        <div className="flex flex-col items-center gap-y-2">
                            <div className="h-[65px] w-[65px] relative">
                                <Image src={SiteLogo} alt="Logo" fill />
                            </div>
                            <h1 className="font-semibold tracking-wide">
                                Ipay
                            </h1>
                        </div>
                    </div>
                </header>

                <nav className="">
                    <div className="w-[90%] mx-auto">
                        <ul className="space-y-4">
                            <AsideLinkItem
                                icon={<Gauge size={18} />}
                                text="Dashboard"
                                link="/"
                                active
                            />
                            <AsideLinkItem
                                icon={<BookOpenCheck size={18} />}
                                text="Bookings"
                                link="/"
                            />

                            <AsideLinkItem
                                icon={<Wallet size={18} />}
                                text="Wallet"
                                link="/"
                            />
                            <AsideLinkItem
                                icon={<CalendarClock size={18} />}
                                text="Events"
                                link="/"
                            />
                            <AsideLinkItem
                                icon={<Component size={18} />}
                                text="Components"
                                link="/"
                            />
                            <AsideLinkItem
                                icon={<User size={18} />}
                                text="Access control"
                                link="/"
                            />
                            <LinkDropdown />
                            <LinkDropdown />
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    );
}

function AsideLinkItem({
    icon,
    text,
    link,
    active,
}: {
    icon: React.ReactNode;
    text: string;
    link: string;
    active?: boolean;
}) {
    return (
        <li
            className={cn(
                'px-2 py-2 hover:bg-primary hover:text-white transition duration-300 hover:rounded',
                active && 'border-l-4 border-primary'
            )}
        >
            <Link href={link} className="flex gap-x-2 items-center">
                <span>{icon}</span>
                <span>{text}</span>
            </Link>
        </li>
    );
}

function LinkDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <div
                className="flex justify-between items-center"
                onClick={() => setOpen(prev => !prev)}
            >
                <p className="flex gap-x-2 items-center">
                    <span>
                        <HomeIcon size={18} />
                    </span>
                    <span>Text down</span>
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
                    'pl-6 max-h-0 overflow-hidden transition-all duration-300 ease-out',
                    open && 'max-h-[300px]'
                )}
            >
                <p>Drop</p>
                <p>Drop</p>
            </div>
        </li>
    );
}
