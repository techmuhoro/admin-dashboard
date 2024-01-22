import Dialog from './Dialog';
import SheetComp from './sheet';

export default function ComponentsPage() {
    return (
        <main className="p-4">
            <div className="space-y-4">
                <Dialog />
                <SheetComp />
            </div>
        </main>
    );
}
