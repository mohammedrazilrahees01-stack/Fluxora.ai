import AppShell from '@/components/AppShell';
import PageHeader from '@/components/PageHeader';
import SectionCard from '@/components/SectionCard';

export default function BillingPage() {
    return (
        <AppShell>
            <div className="space-y-6">
                <PageHeader
                    title="Billing"
                    description="Manage plans, usage, and invoices."
                    actionText="Upgrade Plan"
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <SectionCard title="Current Plan">
                        <p className="text-4xl font-bold">Pro</p>
                        <p className="mt-2 text-zinc-400">$19 / month</p>

                        <button className="mt-6 rounded-2xl bg-blue-500 px-5 py-3 font-semibold transition hover:scale-105">
                            Change Plan
                        </button>
                    </SectionCard>

                    <SectionCard title="Usage">
                        <p className="text-4xl font-bold">78%</p>

                        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-[78%] rounded-full bg-blue-500" />
                        </div>

                        <p className="mt-3 text-sm text-zinc-400">
                            780 / 1000 requests used
                        </p>
                    </SectionCard>
                </div>

                <SectionCard title="Invoices">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                            <span>March 2026</span>
                            <span>$19</span>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                            <span>February 2026</span>
                            <span>$19</span>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </AppShell>
    );
}