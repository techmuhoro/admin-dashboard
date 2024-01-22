import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from '@/components/ui/sheet';

export default function SheetComp() {
    const sides: ['top', 'right', 'bottom', 'left'] = [
        'top',
        'right',
        'bottom',
        'left',
    ];
    return (
        <div>
            <p className="mb-2">Sheets / Modals</p>

            <div className="space-x-2">
                {sides.map(side => (
                    <CustomSheet key={side} side={side} />
                ))}
            </div>
        </div>
    );
}

function CustomSheet({ side }: { side: 'top' | 'right' | 'bottom' | 'left' }) {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="sm" className="capitalize">
                    Open {side}
                </Button>
            </SheetTrigger>

            <SheetContent side={side}>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you{' '}
                        {"'"}re done.
                    </SheetDescription>
                </SheetHeader>

                <div className="my-4">Custom content goes here</div>

                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
