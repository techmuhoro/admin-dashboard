import { Contact } from 'lucide-react';
import Title from '../../section-title';
import Link from 'next/link';
import { title } from 'process';
export default function References() {
    return (
        <div>
            <Title icon={<Contact />} text="References" />
            <div className="text-sm flex justify-between">
                <SingleContact
                    name="Ian Ochieng"
                    title="CEO, Techtenum Minds"
                    contact="ian1ochieng@gmail.com"
                    contactType="email"
                />

                <SingleContact
                    name="Dooren Jeptoo"
                    title="Director, Oxata limited"
                    contact="doreenjeptoo@gmail.com"
                    contactType="email"
                />

                <SingleContact
                    name="Alphius Wambua"
                    title="Senior Developer, Innovex"
                    contact="0714292866"
                    contactType="phone"
                />
            </div>
        </div>
    );
}

function SingleContact({
    name,
    title,
    contact,
    contactType,
}: {
    name: string;
    title: string;
    contact: string;
    contactType: 'email' | 'phone' | 'link';
}) {
    const linkPrefix =
        contactType === 'email'
            ? 'mailto:'
            : contactType === 'phone'
            ? 'tel:'
            : '';
    return (
        <div>
            <h3 className="font-semibold">{name}</h3>
            <p>{title}</p>
            <Link href={`${linkPrefix}${contact}`}>{contact}</Link>
        </div>
    );
}
