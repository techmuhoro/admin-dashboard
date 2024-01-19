import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ModeToggle from '@/components/layout/dashboard/header/mode-toggle';
import Aside from '@/components/layout/dashboard/aside';
import { ChevronDown } from 'lucide-react';
import Notifications from '@/components/layout/dashboard/header/notifications';
import GlobalSearch from '@/components/layout/dashboard/header/global-search';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="grid grid-cols-12 h-screen">
            <Aside />
            <div className="col-start-3 col-end-13  overflow-y-auto">
                <header className="border-b border-border h-14 sticky top-0 bg-white flex justify-between items-center px-4">
                    <div className="font-semibold uppercase">Admin Portal</div>
                    <div className="w-[30%]">
                        <GlobalSearch />
                    </div>
                    <div className="flex items-center text-muted-foreground gap-x-5 ">
                        <ModeToggle />
                        <Notifications />
                        <UserAvatar />
                    </div>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
}

function UserAvatar() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex items-center text-muted-foreground cursor-pointer">
                        <Avatar>
                            <AvatarImage src="/imgs/james-muhoro.enc" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <ChevronDown size={16} />
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
