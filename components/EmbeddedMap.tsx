export default function EmbeddedMap(props: { src: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <iframe
        title={props.title ?? "map"}
        src={props.src}
        className="h-[380px] w-full"
        frameBorder={0}
      />
    </div>
  );
}