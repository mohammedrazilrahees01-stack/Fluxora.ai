type StatCardProps = {
    title: string;
    value: string;
    hint?: string;
};

export default function StatCard({
    title,
    value,
    hint,
}: StatCardProps) {
    return (
        <div className="glass rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <p className="text-sm text-zinc-400">{title}</p>

            <h3 className="mt-2 text-3xl font-bold">{value}</h3>

            {hint ? (
                <p className="mt-2 text-sm text-zinc-500">{hint}</p>
            ) : null}
        </div>
    );
}