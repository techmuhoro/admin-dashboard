import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Page() {
    return (
        <main>
            <div className="mx-auto w-[840px]  text-foreground space-y-3">
                {/**Header */}
                <div className="py-2 flex justify-between px-4 bg-primary text-white items-center">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">James Muhoro</h1>
                        <p>Software Developer | Angular</p>
                    </div>
                    <div>
                        <p className="flex gap-x-1 items-center justify-end">
                            <span>muhorojames7@gmail.com</span>
                            <span>
                                <Mail size={16} />
                            </span>
                        </p>
                        <p className="flex gap-x-1 items-center justify-end">
                            <span>0743301115</span>
                            <span>
                                <Phone size={16} />
                            </span>
                        </p>
                    </div>
                </div>

                {/**Body */}
                <div className="px-4 space-y-4">
                    <div className="">
                        <p className="text-muted-foreground">To</p>
                        <p className="font-medium">Zeraki</p>
                        <Link
                            className="underline"
                            href="https://www.zeraki.app"
                        >
                            www.zeraki.app
                        </Link>
                    </div>

                    <p>23th January 2024.</p>

                    <p>Dear Hiring Manager,</p>

                    {/**Content */}
                    <div className="space-y-2">
                        <p>
                            I am writing to express my sincere interest in the
                            recently advertised position of Angular developer. I
                            understand Zeraki goal is to impact the Education
                            sector through technology and as an all-rounded
                            Software Engineer with 3+ years of building quality
                            and innovative software products, I believe that I
                            can positively contribute to this goal.
                        </p>

                        <p>
                            I hold a bachelor{"'"}s degree in Software
                            engineering from the Multimedia University of Kenya.
                            In the course of five years I have accumulated
                            immense knowledge in building high quality,
                            scalable, maintainable and fast software products. I
                            always build with the end user in mind so as to
                            deliver apps with outstanding user experience. I
                            write clean code that is efficient and well
                            documented to make maintenance by any other person
                            easier.
                        </p>

                        <p>
                            In my previous role at Innovex Solutions I became an
                            integral part of a team that built Flip(A claims
                            processing application for Insurance companies).
                            Through Innovation and creativity, by analyzing the
                            existing challenges in the industry, we were able to
                            grow the system from a customer base of one
                            Insurance to ten Insurance companies in Kenya and
                            Uganda.
                        </p>

                        <p>
                            I am a team player who values the importance of
                            communication and collaboration to building
                            successful products. Am also a hard working
                            individual and always stay up to date with the
                            emerging technologies mostly in the Frontend sector
                            and Software development in general.
                        </p>

                        <p>
                            I understand that Zeraki{"'"}s goal is to digitize
                            and continually impact the education sector through
                            technology. This aligns well with my personal goals
                            of using my skills to positively impact the society
                            for a better tomorrow. The education sector is the
                            one of the most important as it shapes the citizens
                            of tomorrow. Being able to use my skills in frontend
                            development and UX to serve such a sector would be a
                            fulfilling endeavour.
                        </p>

                        <p>
                            Thank you for your time and consideration. I welcome
                            a chance to discuss further how my skills and
                            competencies can help Zeraki to continue impacting
                            the education sector digitally. Feel free to reach
                            me through the provided contacts.
                        </p>
                    </div>

                    <div>
                        <p>Warm Regards,</p>
                        <p>James Muhroro.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
