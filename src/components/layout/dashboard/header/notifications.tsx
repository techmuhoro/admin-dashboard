import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import { Bell, Settings } from 'lucide-react';
export default function Notifications() {
    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <div className="relative cursor-pointer">
                        <Bell size={24} />
                        <div className="w-2 h-2 bg-white flex items-center justify-center absolute top-0 right-0.5 rounded-full">
                            <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full " />
                        </div>
                    </div>
                </PopoverTrigger>

                <PopoverContent className="min-w-[350px] space-y-2 max-h-[500px] overflow-y-scroll">
                    <div className="flex justify-between  bg-white">
                        <p className="font-bold">Notifications</p>

                        <Settings size={18} className="cursor-pointer" />
                    </div>
                    <div className="divide-y divide-border ">
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}

function NotificationItem() {
    return (
        <div className="space-y-1 pt-2">
            <p className=" text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, distinctio?
            </p>

            <p className="text-sm text-muted-foreground flex justify-end">
                <span> 9 hours ago</span>
            </p>
        </div>
    );
}
