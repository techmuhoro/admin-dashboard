import { DataTable } from './data-table';
import { columns, Payment } from './columns';

async function getData(): Promise<Payment[]> {
    return [
        {
            id: '1',
            amount: 5000,
            status: 'processing',
            email: 'muhorojames7@gmail.com',
        },

        {
            id: '2',
            amount: 5000,
            status: 'success',
            email: 'mucherujulius@gmail.com',
        },
    ];
}
export default async function DataTablePage() {
    const data = await getData();

    return (
        <main className="p-4">
            <p>Hello from data table</p>
            <DataTable columns={columns} data={data} />
        </main>
    );
}
