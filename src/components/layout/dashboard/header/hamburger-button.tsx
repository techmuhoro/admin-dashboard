import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Aside from '../aside';
import AsideContent from '../aside/aside-content';

export default function HamburgerMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-screen md:w-[300px] ">
                <div className="">
                    <AsideContent />
                </div>
            </SheetContent>
        </Sheet>
    );
}
