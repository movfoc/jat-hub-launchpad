import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Armchair, Store, Printer, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import youthLogo from "@/assets/fou/future-of-youth-logo.png.asset.json";
import { youthFloorPlan as plan } from "@/data/youthFloorPlan";

export default function YouthGuildfordFloorPlan() {
  const [selected, setSelected] = useState("overview");
  const [logoAvailable, setLogoAvailable] = useState(true);
  const selectedTable = selected.startsWith("table-") ? Number(selected.slice(6)) : undefined;
  const court = plan.courts.find(item => item.id === selected);
  const title = selectedTable ? `Marketplace · Table ${String(selectedTable).padStart(2, "0")}` : court?.name ?? (selected === "marketplace" ? "Marketplace" : selected === "audience" ? "Audience seating" : "Guildford station floor plan");
  const detail = selectedTable ? "2 m table · Unassigned. Exhibitor allocations will be added later." : court?.detail ?? (selected === "marketplace" ? "35 tables, each 2 m long, arranged along an S-shaped aisle on the right, aligned with courts 02–04. All tables are unassigned." : selected === "audience" ? "150 chairs on the bottom-right, next to the main entrance, facing the top-centre wall-mounted screen. Two presentation tables sit in front of the screen." : "Four active courts on the left; 35 marketplace tables above the audience seating on the right. The screen is mounted on the top-centre wall, with two presentation tables in front. Main entrance: bottom-right corner.");

  useEffect(() => {
    const previous = document.title;
    document.title = "Guildford Sport Park Floor Plan | Future of Youth";
    window.scrollTo(0, 0);
    return () => { document.title = previous; };
  }, []);

  return <div className="youth-theme youth-floor-page min-h-screen bg-background text-foreground">
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link to="/future-of-youth">{logoAvailable ? <img src={youthLogo.url} alt="Future of Youth" className="w-44" onError={() => setLogoAvailable(false)} /> : <span className="inline-block rounded-md bg-primary px-4 py-2 text-xl font-black text-primary-foreground">Future of Youth</span>}</Link>
        <Button asChild variant="ghost"><Link to="/future-of-youth"><ArrowLeft /> Back to event</Link></Button>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-5 py-9 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Future of Youth · Guildford station</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">Sport Park floor plan</h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />Surrey Sport Park, Guildford</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />12 December 2026 · 1:15–4:00 PM</span>
          </div>
        </div>
        <Button variant="outline" onClick={() => window.print()}><Printer /> Print plan</Button>
      </div>
      <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-4 text-sm font-semibold">
        <span className="inline-flex items-center gap-2"><LayoutGrid className="h-5 w-5" />4 activity courts</span>
        <span className="inline-flex items-center gap-2"><Store className="h-5 w-5" />35 × 2 m marketplace tables + 2 presentation tables</span>
        <span className="inline-flex items-center gap-2"><Armchair className="h-5 w-5" />150 audience chairs</span>
        <span className="text-muted-foreground">Draft · Not to scale</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2" aria-label="Floor plan areas">
        {[{id:"overview", name:"All areas"}, ...plan.courts, {id:"marketplace",name:"Marketplace"}, {id:"audience",name:"Audience seating"}].map(area =>
          <Button key={area.id} size="sm" variant={selected === area.id ? "default" : "outline"} aria-pressed={selected === area.id} onClick={() => setSelected(area.id)}>{area.name}</Button>)}
      </div>
      <div className="mt-5 overflow-x-auto rounded-lg border border-border bg-muted/30">
        <svg viewBox="0 0 1140 910" className="floor-drawing block w-full min-w-[720px]" role="img" aria-label="Draft hall floor plan: four active left-hand courts, 35 unassigned marketplace tables aligned with courts 02 to 04, 150 audience chairs on the bottom-right near the entrance, top-centre wall-mounted screen with two presentation tables">
          <defs><marker id="floor-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="floor-arrow" /></marker></defs>
          <rect x="40" y="38" width="1060" height="812" rx="3" className="floor-hall" />
          <text x="85" y="132" className="floor-section-label">ACTIVITY COURTS</text>
          <text x="750" y="132" className="floor-section-label">MARKETPLACE</text>
          <rect {...plan.screen} rx="2" className="floor-screen" />
          <text x="570" y="65" textAnchor="middle" className="floor-small">WALL-MOUNTED SCREEN</text>
          {plan.presentationTables.map((table, i) => <g key={i}>
            <rect data-presentation-table="true" x={table.x} y={table.y} width="45" height="25" rx="3" className="floor-table" />
          </g>)}
          <text x="570" y="123" textAnchor="middle" className="floor-small">2 PRESENTATION TABLES</text>
          <path d="M 530 152 V 792" className="floor-divider" />
          {plan.courts.map((area, index) => <g key={area.id}>
            <rect x="85" y={area.y} width="390" height="148" rx="5" className={`floor-court ${selected === area.id ? "floor-selected" : ""}`} />
            <rect x="101" y={area.y+12} width="358" height="124" className="floor-court-lines" />
            <path d={`M 205 ${area.y+12} V ${area.y+136} M 355 ${area.y+12} V ${area.y+136} M 101 ${area.y+74} H 459`} className="floor-court-lines" />
            <rect x="130" y={area.y+18} width="300" height="52" rx="4" className="floor-label-back" />
            <text x="280" y={area.y+38} textAnchor="middle" className="floor-title">{`0${4-index} · ${area.name.toUpperCase()}`}</text>
            <text x="280" y={area.y+58} textAnchor="middle" className="floor-small">Badminton court footprint</text>
            {area.id === "basketball" && <g className="floor-equipment"><path d="M 245 248 H 315 M 280 248 V 270"/><ellipse cx="280" cy="272" rx="18" ry="5"/></g>}
            {(area.id === "pickleball" || area.id === "badminton") && <path d={`M 108 ${area.y+100} H 452`} className="floor-net" />}
            {area.id === "yoga" && [0,1,2,3,4].map(n => <rect key={n} x={155+n*51} y="409" width="34" height="32" rx="5" className="floor-mat" />)}
          </g>)}
          <rect {...plan.audience} rx="5" className={`floor-market ${selected === "audience" ? "floor-selected" : ""}`} />
          <text x="790" y="667" textAnchor="middle" className="floor-title">AUDIENCE SEATING · 150 CHAIRS</text>
          {Array.from({length:plan.chairCount}, (_,i) => <rect key={i} data-chair="true" x={625+(i%15)*21+(i%15>=8?18:0)} y={689+Math.floor(i/15)*8} width="11" height="5" rx="1" className="floor-chair" />)}
          <text x="790" y="783" textAnchor="middle" className="floor-small">Facing top-centre screen ↑</text>
          <path d="M 1024 824 V 672" className="floor-aisle" markerEnd="url(#floor-arrow)" />
          <rect {...plan.marketplace} rx="6" className={`floor-market ${selected === "marketplace" ? "floor-selected" : ""}`} />
          <text x="831" y="181" textAnchor="middle" className="floor-title">35 TABLES · 2 m EACH · UNASSIGNED</text>
          <path d="M 615 258 H 1031 Q 1080 258 1080 301.5 Q 1080 345 1031 345 H 624 Q 580 345 580 388.5 Q 580 432 624 432 H 1031 Q 1080 432 1080 475.5 Q 1080 519 1031 519 H 624 Q 580 519 580 562.5 Q 580 606 624 606 H 1031" className="floor-aisle" markerEnd="url(#floor-arrow)" />
          {plan.tables.map(table => <g key={table.id} role="button" tabIndex={0} aria-label={`Table ${table.id}, 2 metres, unassigned`} onClick={() => setSelected(`table-${table.id}`)} onKeyDown={event => {if(event.key === "Enter" || event.key === " "){event.preventDefault();setSelected(`table-${table.id}`);}}} className="floor-table-control">
            <rect data-table="true" x={table.x} y={table.y} width="45" height="35" rx="3" className={`floor-table ${selectedTable === table.id ? "floor-selected" : ""}`} />
            <text x={table.x+22.5} y={table.y+23} textAnchor="middle" className="floor-table-number">{String(table.id).padStart(2,"0")}</text>
          </g>)}
          <text x="831" y="616" textAnchor="middle" className="floor-small">S-SHAPED AISLE · ALIGNED WITH COURTS 02–04</text>
          <text x="790" y="824" textAnchor="middle" className="floor-small">Audience arrival · clear entrance aisle →</text>
          <rect x={plan.entrance.x} y={plan.entrance.y} width={plan.entrance.width} height="18" className="floor-door-gap" />
          <path d="M 974 849 V 802 M 1074 849 V 802 M 974 802 Q 1021 802 1021 849 M 1074 802 Q 1027 802 1027 849" className="floor-door" />
          <text x="1024" y="886" textAnchor="middle" className="floor-title">MAIN ENTRANCE</text>
        </svg>
      </div>
      <aside className="mt-5 border-l-4 border-primary bg-secondary p-5" aria-live="polite">
        <h2 className="text-lg font-bold">{title}</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
      </aside>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">Proposed event layout, not a surveyed venue drawing. Dimensions, aisle widths, seating capacity, accessibility and emergency exits require venue approval before the plan is finalised.</p>
    </main>
  </div>;
}