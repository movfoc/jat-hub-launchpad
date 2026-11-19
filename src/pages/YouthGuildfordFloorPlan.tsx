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
  const detail = selectedTable ? "4 × 6 ft table · Unassigned. Exhibitor allocations will be added later." : court?.detail ?? (selected === "marketplace" ? "35 tables, each 4 × 6 ft: six per row, with five in the final row. Rows 2–3 (07–12 and 13–18) and rows 4–5 (19–24 and 25–30) are back-to-back with no passage between them. Aisles run around the paired rows. All tables are unassigned." : selected === "audience" ? "150 chairs on the bottom-right, next to the main entrance, facing the top-centre wall-mounted screen. Two presentation tables sit in front of the screen." : "Four active courts on the left; 35 marketplace tables above the audience seating on the right. The screen is mounted on the top-centre wall, with two presentation tables in front. Main entrance: bottom-right corner.");

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
        <span className="inline-flex items-center gap-2"><Store className="h-5 w-5" />35 marketplace tables · 4 × 6 ft each + 2 presentation tables</span>
        <span className="inline-flex items-center gap-2"><Armchair className="h-5 w-5" />150 audience chairs</span>
        <span className="text-muted-foreground">Draft · Courts and tables proportionally scaled</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2" aria-label="Floor plan areas">
        {[{id:"overview", name:"All areas"}, ...plan.courts, {id:"marketplace",name:"Marketplace"}, {id:"audience",name:"Audience seating"}].map(area =>
          <Button key={area.id} size="sm" variant={selected === area.id ? "default" : "outline"} aria-pressed={selected === area.id} onClick={() => setSelected(area.id)}>{area.name}</Button>)}
      </div>
      <div className="mt-5 overflow-x-auto rounded-lg border border-border bg-muted/30">
        <svg viewBox="0 0 1140 1015" className="floor-drawing block w-full min-w-[720px]" role="img" aria-label="Draft hall floor plan: four active left-hand courts, 35 unassigned marketplace tables aligned with courts 02 to 04, 150 audience chairs on the bottom-right near the entrance, top-centre wall-mounted screen with two presentation tables">
          <defs><marker id="floor-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="floor-arrow" /></marker></defs>
          <rect x="40" y="38" width="1060" height="916" rx="3" className="floor-hall" />
          <text x="85" y="132" className="floor-section-label">ACTIVITY COURTS</text>
          <text x="750" y="132" className="floor-section-label">MARKETPLACE</text>
          <rect {...plan.screen} rx="2" className="floor-screen" />
          <text x="570" y="65" textAnchor="middle" className="floor-small">WALL-MOUNTED SCREEN</text>
          {plan.presentationTables.map((table, i) => <g key={i}>
            <rect data-presentation-table="true" x={table.x} y={table.y} width={plan.tableDimensions.width} height={plan.tableDimensions.height} rx="3" className="floor-table" />
          </g>)}
          <text x="570" y="132" textAnchor="middle" className="floor-small">2 PRESENTATION TABLES</text>
          <path d="M 530 152 V 912" className="floor-divider" />
          {plan.courts.map((area, index) => <g key={area.id}>
            <rect x="85" y={area.y} data-court="true" width={plan.courtDimensions.width} height={plan.courtDimensions.height} rx="5" className={`floor-court ${selected === area.id ? "floor-selected" : ""}`} />
            <rect x="85" y={area.y} width={plan.courtDimensions.width} height={plan.courtDimensions.height} className="floor-court-lines" />
            <path d={`M 224.75 ${area.y} V ${area.y+plan.courtDimensions.height} M 335.25 ${area.y} V ${area.y+plan.courtDimensions.height} M 85 ${area.y+plan.courtDimensions.height/2} H 475`} className="floor-court-lines" />
            <rect x="130" y={area.y+18} width="300" height="52" rx="4" className="floor-label-back" />
            <text x="280" y={area.y+38} textAnchor="middle" className="floor-title">{`0${4-index} · ${area.name.toUpperCase()}`}</text>
            <text x="280" y={area.y+58} textAnchor="middle" className="floor-small">13.4 m × 6.1 m court</text>
            {area.id === "basketball" && <g className="floor-equipment"><path d="M 245 248 H 315 M 280 248 V 270"/><ellipse cx="280" cy="272" rx="18" ry="5"/></g>}
            {(area.id === "pickleball" || area.id === "badminton") && <path d={`M 108 ${area.y+plan.courtDimensions.height/2} H 452`} className="floor-net" />}
            {area.id === "yoga" && [0,1,2,3,4].map(n => <rect key={n} x={155+n*51} y="449" width="34" height="32" rx="5" className="floor-mat" />)}
          </g>)}
          <rect {...plan.audience} rx="5" className={`floor-market ${selected === "audience" ? "floor-selected" : ""}`} />
          <text x="790" y="757" textAnchor="middle" className="floor-title">AUDIENCE SEATING · 150 CHAIRS</text>
          {Array.from({length:plan.chairCount}, (_,i) => <rect key={i} data-chair="true" x={625+(i%15)*21+(i%15>=8?18:0)} y={779+Math.floor(i/15)*8} width="11" height="5" rx="1" className="floor-chair" />)}
          <text x="790" y="899" textAnchor="middle" className="floor-small">Facing top-centre screen ↑</text>
          <path d="M 1024 928 V 762" className="floor-aisle" markerEnd="url(#floor-arrow)" />
          <rect {...plan.marketplace} rx="6" className={`floor-market ${selected === "marketplace" ? "floor-selected" : ""}`} />
          <text x="831" y="181" textAnchor="middle" className="floor-title">35 TABLES · 4 × 6 ft EACH · UNASSIGNED</text>
          <path d="M 615 275 H 1031 Q 1080 275 1080 355 Q 1080 435 1031 435 H 624 Q 580 435 580 515 Q 580 595 624 595 H 1031 Q 1080 595 1080 647.5 Q 1080 700 1031 700 H 624" className="floor-aisle" markerEnd="url(#floor-arrow)" />
          {plan.tables.map(table => <g key={table.id} role="button" tabIndex={0} aria-label={`Table ${table.id}, 4 by 6 feet, unassigned`} onClick={() => setSelected(`table-${table.id}`)} onKeyDown={event => {if(event.key === "Enter" || event.key === " "){event.preventDefault();setSelected(`table-${table.id}`);}}} className="floor-table-control">
            <rect data-table="true" data-row={table.row} x={table.x} y={table.y} width={plan.tableDimensions.width} height={plan.tableDimensions.height} className={`floor-table ${selectedTable === table.id ? "floor-selected" : ""}`} />
            <text x={table.x+plan.tableDimensions.width/2} y={table.y+23} textAnchor="middle" className="floor-table-number">{String(table.id).padStart(2,"0")}</text>
          </g>)}
          <text x="831" y="717" textAnchor="middle" className="floor-small">S-SHAPED AISLE · ALIGNED WITH COURTS 02–04</text>
          <text x="790" y="928" textAnchor="middle" className="floor-small">Audience arrival · clear entrance aisle →</text>
          <rect x={plan.entrance.x} y={plan.entrance.y} width={plan.entrance.width} height="18" className="floor-door-gap" />
          <path d="M 974 953 V 906 M 1074 953 V 906 M 974 906 Q 1021 906 1021 953 M 1074 906 Q 1027 906 1027 953" className="floor-door" />
          <text x="1024" y="990" textAnchor="middle" className="floor-title">MAIN ENTRANCE</text>
        </svg>
      </div>
      <aside className="mt-5 border-l-4 border-primary bg-secondary p-5" aria-live="polite">
        <h2 className="text-lg font-bold">{title}</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
      </aside>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">Proposed event layout, not a surveyed venue drawing. Courts use standard doubles dimensions (13.4 × 6.1 m); all tables use 4 × 6 ft footprints at the same scale. Hall boundaries, gaps, chair positions and facilities are indicative, not measured. Aisle widths, seating capacity, accessibility and emergency exits require venue approval before the plan is finalised.</p>
    </main>
  </div>;
}