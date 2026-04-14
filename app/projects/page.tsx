import AppShell from '@/components/AppShell';
import PageHeader from '@/components/PageHeader';
import EmptyState from '@/components/EmptyState';
import SectionCard from '@/components/SectionCard';

const projects = [
    {
        name: 'Ecommerce Store',
        status: 'Active',
        updated: '2h ago',
    },
    {
        name: 'Restaurant App',
        status: 'Draft',
        updated: '1d ago',
    },
    {
        name: 'Portfolio Site',
        status: 'Completed',
        updated: '3d ago',
    },
];

export default function ProjectsPage() {
    return (
        <AppShell>
            <div className="space-y-6">
                <PageHeader
                    title="Projects"
                    description="Manage your builds and workspaces."
                    actionText="New Project"
                />

                <SectionCard title="Recent Projects">
                    <div className="space-y-3">
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className="rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <h3 className="font-semibold">{project.name}</h3>
                                        <p className="text-sm text-zinc-400">
                                            Updated {project.updated}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionCard>

                <EmptyState
                    title="Need another build?"
                    description="Start a new project and let Fluxora accelerate the workflow."
                    buttonText="Create Project"
                />
            </div>
        </AppShell>
    );
}