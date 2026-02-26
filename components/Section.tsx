import type { ReactNode } from "react";

export default function Section(props: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const { id, title, subtitle, children } = props;
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-zinc-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}