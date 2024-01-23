import { Home } from 'lucide-react';
import Title from '../../section-title';

export default function ProfessionalSummary() {
    return (
        <div className="">
            <Title icon={<Home />} text="Professional Summary" />

            <div className="space-y-1">
                <p className="text-sm">
                    I am a results oriented Fullstack software developer with 3+
                    years of experience in building scalable, maintainable, and
                    high-quality software programs.
                </p>
                <p className="text-sm">
                    I excel at building frontend applications with exceptional
                    user experience through applying UX principle and
                    continuously integrating user feedback. This coupled with
                    use of caching algorithms and well architectured code
                    guarantee the speed and efficiency of the application. I
                    also build for cross browser compatibility and also use
                    mobile first design principle to ensure responsiveness.
                </p>
                <p className="text-sm">
                    Lastly, I excel at problem solving by carefully collecting
                    and analyzing systems requirements and converting them into
                    software applications. I have a great passion for
                    programming and make sure every line of code I write is
                    readable, optimized, and free of bugs.
                </p>
            </div>
        </div>
    );
}
