'use client';

import Link from 'next/link';

export default function Topbar() {
    return (
        <header className="glass mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl px-5 py-4">
            <div>
                <h2 className="text-xl font-semibold">Welcome back</h2>
                <p className="text-sm text-zinc-400">
                    Build faster with Fluxora AI
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden rounded-2xl bg-white/5 px-4 py-2 text-sm text-zinc-300 md:block">
                    1,024 Credits
                </div>

                <Link
                    href="/pricing"
                    className="rounded-2xl px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                    Pricing
                </Link>

                <Link
                    href="/chat"
                    className="rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium transition hover:scale-105"
                >
                    Open Chat
                </Link>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 font-semibold">
                    R
                </div>
            </div>
        </header>
    );
}