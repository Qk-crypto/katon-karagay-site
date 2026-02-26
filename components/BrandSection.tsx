export default function BrandSection(props: {
  title: string;
  description: string;
  items: ReadonlyArray<{ title: string; image: string }>;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 lg:col-span-1">
        <div className="text-base font-semibold">{props.title}</div>
        <p className="mt-2 text-sm text-zinc-700">{props.description}</p>

        <div className="mt-4 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-700">
          Бұл бөлім — аймақтың танымалдығын арттыруға арналған бренд материалдары.
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
        {props.items.map((it) => (
          <div key={it.title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="aspect-[4/3] w-full bg-zinc-100">
              <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold">{it.title}</div>
              <div className="mt-1 text-xs text-zinc-600">Сувенир/мерч үлгісі</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}