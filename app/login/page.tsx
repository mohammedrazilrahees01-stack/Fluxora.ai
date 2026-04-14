'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex min-h-screen items-center justify-center p-6 text-white">
            <div className="glass w-full max-w-md rounded-3xl p-8">
                <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500 text-xl font-bold">
                        F
                    </div>

                    <h1 className="mt-4 text-3xl font-bold">Welcome Back</h1>

                    <p className="mt-2 text-zinc-400">
                        Sign in to continue to Fluxora
                    </p>
                </div>

                <form className="mt-8 space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                    />

                    <div className="flex gap-2">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="rounded-2xl border border-white/10 px-4"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <button className="w-full rounded-2xl bg-blue-500 px-5 py-3 font-semibold transition hover:scale-105">
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-zinc-400">
                    No account?{' '}
                    <Link href="/register" className="text-blue-400 hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </main>
    );
}