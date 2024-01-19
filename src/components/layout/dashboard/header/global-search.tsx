import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function GlobalSearch() {
    return (
        <>
            <div className="relative">
                <Search
                    size={16}
                    className="text-muted-foreground absolute left-2 top-[50%] -translate-y-[50%]"
                />
                <Input
                    type="text"
                    placeholder="Start typing ..."
                    className="w-full px-8"
                />

                <div className="absolute right-2 top-[50%] -translate-y-[50%]">
                    <Chip label="⌘ + K" />
                </div>
            </div>
        </>
    );
}

function Chip({ label }: { label: string }) {
    return (
        <span className="bg-muted border border-border px-2 rounded-md py-1 text-sm">
            {label}
        </span>
    );
}
