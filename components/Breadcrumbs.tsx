import Link from "next/link";

export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-28">
      <ol className="mx-auto flex max-w-content gap-2 px-5 font-body text-sm text-ink/60 lg:px-10">
        <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li className="text-primary" aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
