import {
    Timeline,
    TimelineItem,
    TimelineItemHeader,
    TimelineItemContent,
} from '@/components/Timeline';
import Title from '../../section-title';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CareerHighlights() {
    return (
        <div className="text-sm">
            <Title icon={<Briefcase />} text="Career Highlights" />
            <Timeline>
                <TimelineItem>
                    <TimelineItemHeader>
                        <div className="flex justify-between font-mono font-semibold  grow">
                            <p>Innovex solutions</p>
                            <p>Jul 2022 - Dec 2023 (1y 4m)</p>
                        </div>
                    </TimelineItemHeader>
                    <TimelineItemContent>
                        <div className="space-y-2 pb-2">
                            <p>
                                Become a core part of a team that worked on a
                                Claims Processing Management System(Flip) that
                                {"'"}s in use by five major Insurance companies.
                                The application aids companies to have
                                visibility of the entire claim processing chain
                                as well as save on cost by receiving quotations
                                from a wider pool of Service Providers.
                            </p>
                            <ul className="px-4 space-y-1.5">
                                <BulletedList>
                                    <p>
                                        Implemented an analytics module that
                                        increased the marketability of the
                                        system and lead to the signing of one
                                        more client
                                    </p>
                                </BulletedList>
                                <BulletedList>
                                    <p>
                                        Contributed to growth of the product
                                        from a customer base of one to a
                                        customer base of ten Insurance companies
                                    </p>
                                </BulletedList>

                                <BulletedList>
                                    <p>
                                        Anlyzed requirements to convert them
                                        into new features as request by cleints
                                    </p>
                                </BulletedList>

                                <BulletedList>
                                    <p>
                                        Worked on the maintance of the
                                        applications
                                    </p>
                                </BulletedList>
                            </ul>
                        </div>
                    </TimelineItemContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineItemHeader>
                        <div className="flex justify-between font-mono font-semibold  grow">
                            <p>Techtenum Minds</p>
                            <p>Jan 2022 - Jul 2023 (6m)</p>
                        </div>
                    </TimelineItemHeader>
                    <TimelineItemContent>
                        <div className="space-y-2 pb-2">
                            <p>
                                A tech education-driven startup where people
                                gain valuable technological skills in a
                                self-paced environment. I was heavily involved
                                in the prototyping and frontend development of
                                the project
                            </p>
                            <ul className="px-4 space-y-1.5">
                                <BulletedList>
                                    <p>
                                        Wrote highly interactive and quality
                                        front-end applications for the company
                                        {"'"}s three software projects using
                                        modern technologies such as Next.js and
                                        GraqhQl.
                                    </p>
                                </BulletedList>
                                <BulletedList>
                                    <p>
                                        Optimized and increased the speed of the
                                        front-end application by implementing
                                        GraphQL caching algorithms. Also
                                        implemented features such as Server-side
                                        rendering to increase both speed and SEO
                                    </p>
                                </BulletedList>

                                <BulletedList>
                                    <p>
                                        Authored highly reusable React
                                        components which were utilized across
                                        the company{"'"}s three projects. This
                                        was achieved byimplementing a componen
                                        library that ensured certain components
                                        were developed independent of the
                                        application to improve reusability and
                                        consistency
                                    </p>
                                </BulletedList>

                                <BulletedList>
                                    <p>
                                        The development team was remote and
                                        hence gained experience on how to
                                        effectively work in a team
                                    </p>
                                </BulletedList>
                            </ul>
                        </div>
                    </TimelineItemContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineItemHeader>
                        <div className="flex justify-between font-mono font-semibold  grow">
                            <p>Kenyatta National Hospital </p>
                            <p>Jan 2021 - April 2021 (4m)</p>
                        </div>
                    </TimelineItemHeader>
                    <TimelineItemContent>
                        <ul className="px-4 space-y-1.5 pb-2">
                            <BulletedList>
                                <p>
                                    Collaborated with a team of developers to
                                    make an an application that would simplify
                                    the process of applying, processing, and
                                    recruiting of medical students who wished to
                                    intern at the institution
                                </p>
                            </BulletedList>
                            <BulletedList>
                                <p>
                                    Optimized and increased the speed of the
                                    front-end application by implementing
                                    GraphQL caching algorithms. Also implemented
                                    features such as Server-side rendering to
                                    increase both speed and SEO
                                </p>
                            </BulletedList>

                            <BulletedList>
                                <p>
                                    Came up with an elegant design for the
                                    Automated recruitment project
                                </p>
                            </BulletedList>
                        </ul>
                    </TimelineItemContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

function BulletedList({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-x-1">
            <span>
                <ArrowRight size={16} />
            </span>
            {children}
        </li>
    );
}
