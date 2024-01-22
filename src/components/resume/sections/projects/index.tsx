import { Code } from 'lucide-react';
import Title from '../../section-title';
import Link from 'next/link';

export default function Projects() {
    return (
        <div>
            <Title icon={<Code />} text="Projects" />

            <div className="space-y-2">
                <div className="text-sm">
                    <div className="mb-1">
                        <div className=" font-mono font-semibold flex justify-between items-center">
                            <p>Flip - (Motor Claims Processing) </p>

                            <p>@Innovex Solutions</p>
                        </div>
                        <Link
                            className="text-[12px] underline"
                            href="https://demo.insurance-1.flip.innovexsolutions.co.ke/backend/web/index.php?r=site%2Flogin"
                        >
                            https://demo.insurance-1.flip.innovexsolutions.co.ke/backend/web/index.php?r=site%2Flogin
                        </Link>
                    </div>
                    <p>
                        This is a motor claims processing system that helps
                        Insurance companies get visibility of the entire process
                        and save money byreceiving quotations from large pools
                        of service of services providers. Claims are logged in
                        the system, then an assessor is appointed the assess the
                        extent of the damage and provide a draft report. The
                        insurance then floats the draft report to service
                        providers to receive quotations. With the quotations,
                        the assessor comes up with a moderated final report to
                        enable issuing repair authoring or Cash in Lieu. The
                        system enables savings of Kes 10M per client per year.
                    </p>
                </div>

                <div className="text-sm">
                    <div className="mb-1">
                        <div className=" font-mono font-semibold flex justify-between items-center">
                            <p>Eauqtion - (Salvage Disposal(Online bidding))</p>

                            <p>@Innovex Solutions</p>
                        </div>
                        <Link
                            className="text-[12px] underline"
                            href="https://www.eauqtion.com"
                        >
                            https://www.eauqtion.com
                        </Link>
                    </div>
                    <p>
                        Eauqtion is an online bidding platform that enables
                        Insurance to dispose off salvages. A company{"'"}s
                        catalog is usually uploaded to the system then
                        registered and verified bidders are notified of the
                        upcoming auction. On the bidding day, bidders compete
                        for the assets by improving the best bid by a specified
                        bid increment amount.
                    </p>
                </div>

                <div className="text-sm">
                    <div className="mb-1">
                        <div className=" font-mono font-semibold flex justify-between items-center">
                            <p>
                                Techtenum Learning - (Online Learning System){' '}
                            </p>

                            <p>@Techtenum Minds</p>
                        </div>
                        <Link
                            className="text-[12px] underline"
                            href="https://edu.techtenum.com/"
                        >
                            https://edu.techtenum.com/
                        </Link>
                    </div>
                    <p>
                        This project aimed at bridging the skills gap for what
                        is offered in Universities and industry expectations.
                        The system provides a self-paced learning environment
                        where users can track their progress and achieve badges
                        and certificates upon completion
                    </p>
                </div>

                <div className="text-sm">
                    <div className="mb-1">
                        <div className=" font-mono font-semibold flex justify-between items-center">
                            <p>Portfolio - (Personal portfolio website)</p>
                        </div>
                        <Link
                            className="text-[12px] underline"
                            href="jamesmuhoro.netlify.app/"
                        >
                            jamesmuhoro.netlify.app/
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
