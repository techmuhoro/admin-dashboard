import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

export default function ShortStats() {
    return (
        <div className="flex justify-between">
            <div className="border border-border w-[280px] space-y-2 py-4 px-4 rounded-md shadow ">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Total Revenue</p>
                    <p>
                        <DollarSign size={16} />
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-xl">KES 45,231.89</h1>
                    <p className="text-muted-foreground text-sm">
                        +20.1% from last month
                    </p>
                </div>
            </div>

            <div className="border border-border w-[280px] space-y-2 py-4 px-4 rounded-md shadow ">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Subscriptions</p>
                    <p>
                        <Users size={16} />
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl">+2350</h1>
                    <p className="text-muted-foreground text-sm">
                        +180% from last month
                    </p>
                </div>
            </div>

            <div className="border border-border w-[280px] space-y-2 py-4 px-4 rounded-md shadow ">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Sales</p>
                    <p>
                        <CreditCard size={16} />
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl">KES 12,234</h1>
                    <p className="text-muted-foreground text-sm">
                        +19% from last month
                    </p>
                </div>
            </div>

            <div className="border border-border w-[280px] space-y-2 py-4 px-4 rounded-md shadow ">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Active Now</p>
                    <p>
                        <Activity size={16} />
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl">KES 45,231.89</h1>
                    <p className="text-muted-foreground text-sm">
                        +201 since last hour
                    </p>
                </div>
            </div>
        </div>
    );
}
