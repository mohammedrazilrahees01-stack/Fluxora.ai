type PageHeaderProps = {
  title: string;
  description?: string;
  actionText?: string;
};

export default function PageHeader({
  title,
  description,
  actionText,
}: PageHeaderProps) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>

          {description && (
            <p className="mt-2 text-zinc-400">
              {description}
            </p>
          )}
        </div>

        {actionText && (
          <button className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold transition hover:scale-105">
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}