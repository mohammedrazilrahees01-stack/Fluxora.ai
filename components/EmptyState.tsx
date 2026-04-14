type EmptyStateProps = {
    title: string;
    description: string;
    buttonText?: string;
};

export default function EmptyState({
    title,
    description,
    buttonText,
}: EmptyStateProps) {
    return (
        <div className="glass rounded-3xl p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-3xl">
                ✨
            </div>

            <h3 className="mt-5 text-2xl font-bold">
                {title}
            </h3>

            <p className="mx-auto mt-3 max-w-md text-zinc-400">
                {description}
            </p>

            {buttonText && (
                <button className="mt-6 rounded-2xl bg-blue-500 px-6 py-3 font-semibold transition hover:scale-105">
                    {buttonText}
                </button>
            )}
        </div>
    );
}