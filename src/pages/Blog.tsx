const posts = [
  {slug:"tak-on-kubernetes",tag:"Operations",title:"How I run a TAK server on Kubernetes for under $100/mo",date:"Sep 1, 2026",read:"8 min",excerpt:"TAK Server 5.7 on DOKS with cert auth, WebTAK, and a full NATS bridge — the exact setup powering OneMind OS in production."},
  {slug:"12-agent-mesh",tag:"AI Agents",title:"Building a 12-agent mesh on NATS — what I learned",date:"Aug 28, 2026",read:"12 min",excerpt:"After running 12 Hermes profiles as autonomous agents on one NATS cluster, here's the architecture, the failures, and what actually works."},
  {slug:"sovereign-sensors",tag:"Homesteading",title:"Sovereign sensors: building a geo-aware farm",date:"Aug 22, 2026",read:"6 min",excerpt:"Environmental sensors, Tile38 geofencing, and Node-RED automations — how I turned 5 acres into a living data platform."},
  {slug:"cloudtak-deep-dive",tag:"TAK",title:"CloudTAK deep dive: browser-native SA without ATAK",date:"Aug 15, 2026",read:"10 min",excerpt:"The dfpc-coe CloudTAK fork running on DOKS — plugins, AI panel integration, and why MapLibre beats Mapbox for sovereign deployments."},
  {slug:"nats-truth",tag:"Infrastructure",title:"Why NATS is the only message bus that makes sense for edge ops",date:"Aug 8, 2026",read:"7 min",excerpt:"After running Kafka, MQTT, and Redis Streams for field operations, here's why NATS won and the others got cut."},
  {slug:"sovereign-finance",tag:"Finance",title:"The sovereign wealth stack: DeFi without the casino",date:"Aug 1, 2026",read:"9 min",excerpt:"Multi-sig, self-custody, and DeFi infrastructure that isn't gambling — building financial sovereignty for builders who operate."},
];

export default function Blog() {
  return (
    <>
      <section style={{paddingTop:"calc(68px + 5rem)",paddingBottom:"3rem",paddingLeft:"clamp(1.5rem,5vw,4rem)",paddingRight:"clamp(1.5rem,5vw,4rem)"}}>
        <div className="container">
          <div className="tag">Blog</div>
          <h1 style={{marginBottom:"1rem"}}>Field notes & <span className="accent">dispatches</span></h1>
          <p style={{maxWidth:"560px",fontSize:"1.05rem"}}>Operations, AI, homesteading, finance, security — everything I'm building, tested, and thinking about.</p>
        </div>
      </section>

      <div className="divider" />

      <section style={{paddingTop:"4rem"}}>
        <div className="container">
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            {posts.map(p => (
              <div key={p.slug} className="card" style={{cursor:"pointer",display:"grid",gridTemplateColumns:"1fr auto",gap:"2rem",alignItems:"start"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.75rem",flexWrap:"wrap"}}>
                    <span style={{fontSize:"0.72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--red-bright)",border:"1px solid var(--red)",padding:"3px 8px",borderRadius:"3px"}}>{p.tag}</span>
                    <span style={{fontSize:"0.78rem",color:"var(--dim)"}}>{p.date} · {p.read} read</span>
                  </div>
                  <h3 style={{fontSize:"1.15rem",marginBottom:"0.6rem",lineHeight:"1.35"}}>{p.title}</h3>
                  <p style={{fontSize:"0.9rem"}}>{p.excerpt}</p>
                </div>
                <span style={{color:"var(--red-bright)",fontSize:"1.5rem",marginTop:"0.5rem"}}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <a href="/" style={{color:"var(--dim)",textDecoration:"none",fontSize:"0.85rem"}}>← Home</a>
      </footer>
    </>
  );
}
