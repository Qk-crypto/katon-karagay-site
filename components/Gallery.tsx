export default function Gallery(props: { images: ReadonlyArray<string> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {props.images.map((src) => (
        <div key={src} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <img src={src} alt="gallery" className="h-40 w-full object-cover" />
        </div>
      ))}
    </div>
  );
}