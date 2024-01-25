'use client';

import { LineChart, Line } from 'recharts';

export default function BarChart() {
    const data = [
        {
            name: 'Page D',
            uv: 1000,
            pv: 3000,
            amt: 3000,
        },

        {
            name: 'Page B',
            uv: 600,
            pv: 2600,
            amt: 2600,
        },
        {
            name: 'Page c',
            uv: 800,
            pv: 2800,
            amt: 2800,
        },
        {
            name: 'Page D',
            uv: 1000,
            pv: 3000,
            amt: 3000,
        },
        {
            name: 'Page A',
            uv: 400,
            pv: 2400,
            amt: 2400,
        },
    ];
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type={'monotone'} dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    );
}
