import AppShell from '@/components/AppShell';
import PageHeader from '@/components/PageHeader';
import StatCard from '@/components/StatCard';
import SectionCard from '@/components/SectionCard';

export default function DashboardPage() {
    return (
        <AppShell>
            <div className="space-y-6">
                <PageHeader
                    title="Dashboard"
                    description="Your premium AI control center."
                    actionText="New Project"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    <StatCard title="Projects" value="12" hint="2 active this week" />
                    <StatCard title="AI Requests" value="284" hint="Fast responses enabled" />
                    <StatCard title="Deployments" value="7" hint="Latest: 2 hours ago" />
                </div>

                <SectionCard title="Recent Activity">
                    <div className="space-y-3 text-zinc-300">
                        <p>• Generated landing page UI</p>
                        <p>• Created chatbot workspace</p>
                        <p>• Improved glass animations</p>
                        <p>• Published project update</p>
                    </div>
                </SectionCard>
            </div>
        </AppShell>
    );
}