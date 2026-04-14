type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionCard({
  title,
  children,
}: SectionCardProps) {
  return (
    <section className="glass rounded-3xl p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-4">
        {children}
      </div>
    </section>
  );
}