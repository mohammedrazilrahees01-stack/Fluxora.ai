import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import CursorGlow from '@/components/CursorGlow';

type AppShellProps = {
    children: React.ReactNode;
};

export default function AppShell({
    children,
}: AppShellProps) {
    return (
        <main className="min-h-screen p-6 text-white">
            <CursorGlow />

            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
                <Sidebar />

                <section className="min-w-0">
                    <Topbar />
                    {children}
                </section>
            </div>
        </main>
    );
}