import { Button } from '@/components/ui/button';

export default function Page() {
    return (
        <div className="space-y-10 p-4">
            <Button>Hello</Button>
            <div className="border border-border w-48 h-36 bg-background"></div>
            <div className="border border-border w-48 h-36 bg-accent flex items-center justify-center">
                <p className="text-accent-foreground">Hello</p>
            </div>

            <div className="w-48 h-36 bg-secondary border flex items-center justify-center text-secondary-foreground">
                <p>Hello</p>
            </div>

            {/* <div className="w-48 h-36 bg-card border border-border"></div> */}
        </div>
    );
}
