import DashboardContentWrapper from '@/components/dashboard-content-wrapper';
import { Gauge } from 'lucide-react';
import ShortStats from '@/features/dashboard/short-stats';
import DashboardGraphs from '@/features/dashboard/graphs';

export default function Page() {
    return (
        <DashboardContentWrapper
            breadcrumbsItems={[
                {
                    label: 'Dashboard',
                    icon: <Gauge size={16} />,
                    link: '/dashboard',
                },
            ]}
        >
            <div className="space-y-4">
                <ShortStats />
                <DashboardGraphs />
            </div>
        </DashboardContentWrapper>
    );
}
