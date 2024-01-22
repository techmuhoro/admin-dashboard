import { Home } from 'lucide-react';
import Title from '../../section-title';

export default function ProfessionalSummary() {
    return (
        <div className="">
            <Title icon={<Home />} text="Professional Summary" />

            <div>
                <p className="text-sm">
                    I am results oriented a Fullstack software developer with 3+
                    years of experience in building scalable, maintainable, and
                    high-quality software programs. I excel at solving business
                    by carefully collecting and analyzing systems requirements
                    and converting them into software applications. I have a
                    great passion for programming and make sure every line of
                    code I write is readable, optimized, and free of bugs.
                </p>
            </div>
        </div>
    );
}
