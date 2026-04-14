'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 text-white">
      <div className="glass max-w-xl rounded-3xl p-10 text-center">
        <div className="text-6xl">⚠️</div>

        <h1 className="mt-4 text-3xl font-bold">Something Went Wrong</h1>

        <p className="mt-3 text-zinc-400 break-words">
          {error.message || 'Unexpected application error.'}
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-2xl bg-blue-500 px-6 py-3 font-semibold transition hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}