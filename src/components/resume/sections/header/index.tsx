import Link from 'next/link';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function ResumeHeader() {
    return (
        <div className="space-y-2">
            <div className="text-center">
                <h1 className="text-4xl text-primary font-bold">
                    James Muhoro
                </h1>
                <p className="text-lg font-medium">
                    Angular | Frontend developer | Fullstack Software Engineer
                </p>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
                <Link
                    href="mailto:muhorojames7@gmail.com"
                    className="flex items-center gap-x-1"
                >
                    <span>
                        <Mail size={14} />
                    </span>
                    <span className="text-sm">muhorojames7@gmail.com</span>
                </Link>
                <Link
                    href="tel:+254 743301115"
                    className="flex items-center gap-x-1"
                >
                    <span>
                        <Phone size={14} />
                    </span>
                    <span className="text-sm">+254 743301115</span>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/james-muhoro/"
                    className="flex items-center gap-x-1"
                >
                    <span>
                        <Linkedin size={14} />
                    </span>
                    <span className="text-sm">
                        linkedin.com/in/james-muhoro/
                    </span>
                </Link>
                <Link
                    href="https://github.com/techmuhoro"
                    className="flex items-center gap-x-1"
                >
                    <span>
                        <Github size={14} />
                    </span>
                    <span className="text-sm">github.com/techmuhoro</span>
                </Link>
            </div>
        </div>
    );
}
