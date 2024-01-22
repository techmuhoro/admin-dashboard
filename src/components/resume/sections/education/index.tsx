import { GraduationCap, ArrowRight } from 'lucide-react';
import Title from '../../section-title';

export default function Education() {
    return (
        <div>
            <Title icon={<GraduationCap />} text="Education" />
            <div className="space-x-1">
                <h4 className="font-mono text-sm font-semibold flex items-center justify-between">
                    <span>Mulitimedia Univeristy of Kenya</span>
                    <span>Sept 2017 - Dec 2021</span>
                </h4>

                <ul className="text-sm space-x-0.5">
                    <li className="flex items-center gap-x-1">
                        <ArrowRight className="text-foreground" size={16} />
                        <p>
                            <span className="font-semibold">Certicate:</span>{' '}
                            <span>
                                Bachelors degree in{' '}
                                <span className="uppercase">
                                    software engineering
                                </span>
                            </span>
                        </p>
                    </li>

                    <li className="flex items-center gap-x-1">
                        <ArrowRight className="text-foreground" size={16} />
                        <p>
                            <span className="font-semibold">Grade:</span>{' '}
                            <span>Second class honours (upper division)</span>
                        </p>
                    </li>

                    <li className="flex items-center gap-x-1">
                        <ArrowRight className="text-foreground" size={16} />

                        <p>
                            <span className="font-semibold">Courses:</span>{' '}
                            <span>
                                User Interface design, Algorithms & data
                                structures, Software web programming, OOP
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
