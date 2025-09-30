export function Timeline({events}:{events:{date:string; title:string; detail?:string}[]}) {
  return (
    <ol className="relative border-l border-hair pl-4">
      {events.map((e,i)=>(
        <li key={i} className="mb-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-fg"></div>
          <time className="text-sm text-muted">{new Date(e.date).toLocaleDateString()}</time>
          <div className="font-ui">{e.title}</div>
          {e.detail && <p className="text-sm text-muted">{e.detail}</p>}
        </li>
      ))}
    </ol>
  );
}
