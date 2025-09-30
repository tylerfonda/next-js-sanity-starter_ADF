export function FactPanel({label, stat, unit}:{label:string; stat:number|string; unit?:string}) {
  return (
    <div className="border border-hair p-4 rounded-lg">
      <div className="text-sm text-muted">{label}</div>
      <div className="text-3xl font-ui">{stat}{unit ? ` ${unit}`: ""}</div>
    </div>
  );
}

