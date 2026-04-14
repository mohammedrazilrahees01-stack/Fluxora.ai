'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white transition-colors duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 animate-pulse" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,.14),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,.10),transparent_30%)]" />

      {/* Navbar */}
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-2xl">
          <h1 className="text-2xl font-bold tracking-wide">Fluxora</h1>

          <div className="flex items-center gap-3">
            <button className="rounded-2xl px-4 py-2 transition hover:bg-white/10">
              Features
            </button>

            <button className="rounded-2xl px-4 py-2 transition hover:bg-white/10">
              Pricing
            </button>

            <button
              onClick={() => setDark(!dark)}
              className="rounded-2xl border border-white/10 px-4 py-2 transition hover:bg-white/10"
            >
              {dark ? 'Dark' : 'Light'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
            AI Developer Automation
          </div>

          <h2 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Build Faster with Intelligent Workflows
          </h2>

          <p className="mt-6 max-w-xl text-lg text-zinc-300">
            Create websites, automate tasks, generate code, and manage projects
            in one futuristic workspace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
              Get Started
            </button>

            <button className="rounded-2xl border border-white/10 px-6 py-3 backdrop-blur-xl transition hover:bg-white/10">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right Glass Panel */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-2xl">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/10 p-4">
              Ask Fluxora to build an ecommerce store
            </div>

            <div className="rounded-2xl bg-blue-500/90 p-4 text-white">
              Generating premium storefront, auth, payments, dashboard...
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-5">AI Chat</div>
              <div className="rounded-2xl bg-white/5 p-5">Projects</div>
              <div className="rounded-2xl bg-white/5 p-5">Deploy</div>
              <div className="rounded-2xl bg-white/5 p-5">Analytics</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}