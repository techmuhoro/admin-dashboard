import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps extends ButtonProps {
    loading?: boolean;
}

export default function LoadingButton({
    loading,
    className,
    children,
    ...props
}: LoadingButtonProps) {
    return (
        <Button
            className={`flex gap-x-1 ${loading && 'cursor-no-drop'}`}
            {...props}
            disabled={loading}
        >
            {loading && <Loader2 className="animate-spin" size={16} />}
            {children}
        </Button>
    );
}
