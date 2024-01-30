'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export default function RegisterForm() {
    const { toast } = useToast();

    function handleRegister() {
        // toast({
        //     title: 'Account not found!',
        //     description: 'Either your email or password is wrong',
        //     variant: 'destructive',
        //     duration: 2000,
        // });

        toast({
            title: 'Registration Initiated',
            description: 'Check your email for an onboarding link',
            variant: 'primary',
            duration: 2000,
        });
    }

    return (
        <div className="space-y-2">
            <Input placeholder="e.i muhorojames7@gmail.com" />
            <Button className="w-full" type="button" onClick={handleRegister}>
                Sign in with email
            </Button>
        </div>
    );
}
