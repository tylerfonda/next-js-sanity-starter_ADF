import { PortableText, type PortableTextComponents } from "@portabletext/react";
import clsx from "clsx";

const components: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="font-ui text-4xl leading-tight">{children}</h1>,
    h2: ({children}) => <h2 className="font-ui text-3xl leading-tight mt-8">{children}</h2>,
    normal: ({children}) => <p className="font-serif text-base leading-relaxed max-w-[75ch]">{children}</p>,
  },
  types: {
    image: ({value}: any) => (
      <figure className="my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={value.asset?.url} alt={value.alt || ""} className="border border-hair" />
        {value.caption && <figcaption className="text-sm text-muted mt-2">{value.caption}</figcaption>}
      </figure>
    ),
  },
  marks: {
    strong: ({children}) => <strong className="font-semibold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    link: ({value, children}) => <a href={value?.href} className="underline decoration-accentMagenta">{children}</a>,
  },
};

export function Prose({value, className}:{value:any; className?:string}) {
  return (
    <article className={clsx("prose prose-neutral max-w-none prose-p:my-4 prose-headings:mt-8", className)}>
      <PortableText value={value} components={components}/>
    </article>
  );
}
