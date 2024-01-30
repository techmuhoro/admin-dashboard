'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function LoginForm() {
    const { toast } = useToast();

    function handleLogin() {
        toast({
            title: 'Account not found!',
            description: 'Either your email or password is wrong',
            variant: 'destructive',
            duration: 2000,
        });
        // toast({
        //     title: 'Link sent!',
        //     description:
        //         'A magic link has been sent to your email. Use it to login',
        //     variant: 'primary',
        //     duration: 2000,
        // });
    }

    return (
        <div className="space-y-2">
            <Input placeholder="e.i muhorojames7@gmail.com" />
            <Button type="button" onClick={handleLogin} className="w-full">
                Sign in with email
            </Button>
        </div>
    );
}
