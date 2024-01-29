'use client';

import Image from 'next/image';
import SiteLogo from '@/assets/site-logo.png';
import MenuItems from './menu';

export default function AsideContent() {
    return (
        <div className="w-full h-full">
            <header className="h-[20%] ">
                <div className="flex h-full justify-center items-center">
                    <div className="flex flex-col items-center gap-y-2">
                        <div className="h-[65px] w-[65px] relative">
                            <Image src={SiteLogo} alt="Logo" fill />
                        </div>
                        <h1 className="font-semibold tracking-wide">Ipay</h1>
                    </div>
                </div>
            </header>

            <nav>
                <div className="w-[90%] mx-auto">
                    <MenuItems />
                </div>
            </nav>
        </div>
    );
}
