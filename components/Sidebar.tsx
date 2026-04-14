'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
    href: string;
    label: string;
};

const links: NavItem[] = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/chat', label: 'AI Chat' },
    { href: '/projects', label: 'Projects' },
    { href: '/billing', label: 'Billing' },
    { href: '/settings', label: 'Settings' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="glass rounded-3xl p-5">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 font-bold">
                    F
                </div>

                <div>
                    <h1 className="text-xl font-bold">Fluxora</h1>
                    <p className="text-xs text-zinc-400">AI Workspace</p>
                </div>
            </div>

            <nav className="mt-8 space-y-2">
                {links.map((item) => {
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block rounded-2xl px-4 py-3 transition ${active
                                    ? 'bg-white/10 text-white'
                                    : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-8 rounded-3xl bg-white/5 p-4">
                <p className="text-sm text-zinc-400">Current Plan</p>
                <h3 className="mt-1 text-lg font-semibold">Pro</h3>

                <button className="mt-4 w-full rounded-2xl bg-blue-500 px-4 py-3 font-medium transition hover:scale-105">
                    Upgrade
                </button>
            </div>
        </aside>
    );
}