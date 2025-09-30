type Item={title:string; sub?:string; href?:string; meta?:string};
export function SmallMultiples({items}:{items:Item[]}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i)=>(
        <a key={i} href={it.href||"#"} className="block border border-hair p-3 hover:bg-neutral-50">
          <div className="text-sm text-muted">{it.meta}</div>
          <div className="text-base font-ui">{it.title}</div>
          {it.sub && <div className="text-sm text-muted mt-1">{it.sub}</div>}
        </a>
      ))}
    </div>
  );
}
