import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center p-6 text-white">
            <div className="glass max-w-xl rounded-3xl p-10 text-center">
                <div className="text-7xl font-bold">404</div>

                <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>

                <p className="mt-3 text-zinc-400">
                    The page you are looking for does not exist or was moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded-2xl bg-blue-500 px-6 py-3 font-semibold transition hover:scale-105"
                >
                    Back Home
                </Link>
            </div>
        </main>
    );
}