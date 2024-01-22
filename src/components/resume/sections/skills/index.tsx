import { ArrowRight, DraftingCompass, Star, Play } from 'lucide-react';
import Title from '../../section-title';

export default function Skills() {
    return (
        <div className="">
            <Title icon={<DraftingCompass />} text="Skills" />

            <div className="">
                <div className="flex items-center gap-x-1.5">
                    <ArrowRight className="text-foreground" size={16} />
                    <p className="font-semibold">Core:</p>
                    <ul className="flex items-center text-sm gap-x-4">
                        <BulletList bulletSize={10}>
                            <span className="font-semibold">JS/TS</span>
                            {'<'}Angular / Next.js & Express.js
                            {'>'}
                        </BulletList>
                        <BulletList bulletSize={10}>
                            <span className="font-semibold">API{"'"}s</span>
                            {'<'}GraphQl & Rest API{'>'}
                        </BulletList>

                        <BulletList bulletSize={10}>
                            <p>
                                <span className="font-semibold">Backend</span>
                                {'<'}
                                Java | PHP
                                {'>'}
                            </p>
                        </BulletList>
                    </ul>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <ArrowRight className="text-foreground" size={16} />
                    <p className="font-semibold">Other:</p>
                    <ul className="flex items-center text-sm gap-x-4">
                        <BulletList bulletSize={10}>
                            <span className="font-semibold">UI/UX</span>
                            {'<'}Figma
                            {'>'}
                        </BulletList>
                        <BulletList bulletSize={10}>AWS</BulletList>
                    </ul>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <ArrowRight className="text-foreground" size={16} />
                    <p className="font-semibold">Tools & Platforms:</p>
                    <ul className="flex items-center text-sm gap-x-4">
                        <BulletList bulletSize={10}>
                            <span>Git & Gitbub</span>
                        </BulletList>
                        <BulletList bulletSize={10}>Webpack</BulletList>
                        <BulletList bulletSize={10}>Docker</BulletList>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function BulletList({
    children,
    bulletSize,
}: {
    children: React.ReactNode;
    bulletSize: number;
}) {
    return (
        <li className="flex items-center gap-x-0.5">
            <span>
                <Play size={bulletSize} />
            </span>
            {children}
        </li>
    );
}
