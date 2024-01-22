function Timeline({ children }: { children: React.ReactNode }) {
    return (
        <div className="space-y-1">
            {children}
            <TimelineIcon />
        </div>
    );
}

function TimelineItem({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

function TimelineItemHeader({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="flex items-center gap-x-2">
            <TimelineIcon />
            {children}
        </h1>
    );
}

function TimelineItemContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-l-[3px] border-muted-foreground ml-1.5 px-4">
            {children}
        </div>
    );
}

function TimelineIcon() {
    return (
        <div className="w-4 h-4 border border-muted-foreground rounded-full" />
    );
}

export { Timeline, TimelineItem, TimelineItemHeader, TimelineItemContent };
