export function ProvenanceFooter({
  sources = [], updatedAt,
}:{sources:{title:string;url?:string;publisher?:string;date?:string}[]; updatedAt?:string;}) {
  return (
    <footer className="mt-12 pt-6 border-t border-hair text-sm text-muted">
      <div className="flex flex-col gap-2">
        <div>Last updated: {updatedAt ? new Date(updatedAt).toLocaleDateString() : "—"}</div>
        {sources.length>0 && (
          <ul className="list-disc pl-5">
            {sources.map((s,i)=>(
              <li key={i}>
                {s.url ? <a href={s.url} className="underline">{s.title}</a> : s.title}
                {s.publisher ? ` — ${s.publisher}`: ""}{s.date ? ` (${new Date(s.date).toLocaleDateString()})`:""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
