export default function Cards(props: { items: ReadonlyArray<{ title: string; desc: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="text-base font-semibold">{it.title}</div>
          <div className="mt-2 text-sm text-zinc-700">{it.desc}</div>
        </div>
      ))}
    </div>
  );
}