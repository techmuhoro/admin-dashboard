import { Linkedin, Github, Mail, Phone, ArrowRight } from 'lucide-react';
import { Home, DraftingCompass } from 'lucide-react';
import Link from 'next/link';
import ProfessionalSummary from '@/components/resume/sections/summary';
import Skills from '@/components/resume/sections/skills';
import ResumeHeader from '@/components/resume/sections/header';
import Education from '@/components/resume/sections/education';
import CareerHighlights from '@/components/resume/sections/career';
import Projects from '@/components/resume/sections/projects';
import References from '@/components/resume/sections/references';

export default function Page() {
    return (
        <div>
            <div className="border mx-auto w-[840px] px-4 text-foreground space-y-3">
                {/*Header */}
                <ResumeHeader />

                {/** Professional summary */}
                <ProfessionalSummary />

                {/** Skills */}
                <Skills />

                {/** Educations */}
                <Education />

                {/** Experience */}
                <CareerHighlights />

                {/**Projects */}
                <Projects />

                {/** References */}
                <References />
                <div className="mb-32" />
            </div>
        </div>
    );
}
