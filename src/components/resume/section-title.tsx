export default function Title({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="space-y-1 mb-1">
            <div className="flex items-center font-semibold gap-x-2">
                <span>{icon}</span>
                <h3 className="text-xl">{text}</h3>
            </div>
            <div className="border-b border-border" />
        </div>
    );
}
