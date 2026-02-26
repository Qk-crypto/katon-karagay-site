export default function FAQ(props: { items: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <div className="space-y-3">
      {props.items.map((x) => (
        <details key={x.q} className="rounded-2xl border border-zinc-200 bg-white p-5">
          <summary className="cursor-pointer text-sm font-semibold">{x.q}</summary>
          <p className="mt-2 text-sm text-zinc-700">{x.a}</p>
        </details>
      ))}
    </div>
  );
}