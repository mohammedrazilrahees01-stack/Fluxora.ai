'use client';

import { useState } from 'react';
import AppShell from '@/components/AppShell';
import PageHeader from '@/components/PageHeader';
import SectionCard from '@/components/SectionCard';

export default function SettingsPage() {
    const [name, setName] = useState('Razil');
    const [email, setEmail] = useState('you@example.com');
    const [notifications, setNotifications] = useState(true);

    return (
        <AppShell>
            <div className="space-y-6">
                <PageHeader
                    title="Settings"
                    description="Manage your account preferences."
                />

                <SectionCard title="Profile">
                    <div className="space-y-4">
                        <div>
                            <label className="mb-2 block text-sm text-zinc-300">
                                Full Name
                            </label>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-zinc-300">
                                Email
                            </label>

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                            />
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title="Notifications">
                    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                        <span>Email Notifications</span>

                        <button
                            onClick={() => setNotifications(!notifications)}
                            className={`rounded-full px-4 py-2 text-sm ${notifications
                                    ? 'bg-blue-500'
                                    : 'bg-zinc-700'
                                }`}
                        >
                            {notifications ? 'On' : 'Off'}
                        </button>
                    </div>
                </SectionCard>

                <button className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold transition hover:scale-105">
                    Save Changes
                </button>
            </div>
        </AppShell>
    );
}