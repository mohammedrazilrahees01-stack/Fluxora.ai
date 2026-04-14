export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 text-white">
      <div className="glass rounded-3xl px-8 py-6 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-blue-500" />

        <h1 className="mt-5 text-2xl font-semibold">Loading Fluxora...</h1>

        <p className="mt-2 text-sm text-zinc-400">
          Preparing your premium workspace
        </p>
      </div>
    </main>
  );
}