import MyAreaChart from './area-chart';
import MyPieChart from './pie-chart';

export default function DashboardGraphs() {
    return (
        <div>
            <div className="w-full grid gap-x-2 grid-cols-12 ">
                <div className="border col-span-8 h-[400px] rounded-md">
                    <MyAreaChart />
                </div>
                <div className="border border-red col-span-4 rounded-md">
                    <MyPieChart />
                </div>
            </div>
        </div>
    );
}
