import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { GithubIcon } from 'lucide-react';
import LoginForm from './login-form';

export default function Page() {
    return (
        <div className="flex w-screen h-screen">
            <div className="w-1/2 h-screen bg-primary"></div>
            <div className="w-1/2 h-screen border">
                <header className=" flex justify-end items-center px-4 h-[10%] border">
                    <Button variant="ghost">
                        <Link className="text-xl" href="/auth/register">
                            Register
                        </Link>
                    </Button>
                </header>
                <div className="h-[90%] flex items-center justify-center text-center">
                    <div className="w-[50%] space-y-4">
                        <div className="space-y-1">
                            <h1 className="font-semibold text-2xl capitalize">
                                Sign In
                            </h1>
                            <p className=" text-muted-foreground">
                                Enter your details below to login
                            </p>
                        </div>

                        <LoginForm />

                        <div className="relative">
                            <div className=" border-b border-border w-full absolute top-[50%] " />
                            <p className="uppercase p-2 bg-white relative z-10 inline-block">
                                Or continue with
                            </p>
                        </div>

                        <div>
                            <Button
                                variant={'secondary'}
                                className="w-full flex items-center gap-x-2 font-semibold"
                            >
                                <GithubIcon size={20} />
                                Github
                            </Button>
                        </div>

                        <p className="text-muted-foreground">
                            By clicking continue, you agree to our{' '}
                            <Link className="underline" href="/">
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link className="underline" href="/">
                                Privacy Policy.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
