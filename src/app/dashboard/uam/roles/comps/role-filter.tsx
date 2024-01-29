import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export default function RoleFilter() {
    return (
        <Button
            size={'sm'}
            variant="secondary"
            className="flex items-center gap-x-1"
        >
            <Filter size={16} />
            <span>Filter</span>
        </Button>
    );
}
