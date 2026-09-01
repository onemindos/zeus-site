export default function Courses() {
  return (
    <>
      <section style={{paddingTop:"calc(68px + 5rem)",paddingBottom:"4rem",paddingLeft:"clamp(1.5rem,5vw,4rem)",paddingRight:"clamp(1.5rem,5vw,4rem)",background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Courses</div>
          <h1>Learn by <span className="accent">building real systems</span></h1>
          <p style={{fontSize:"1.1rem",maxWidth:"580px",marginTop:"1rem"}}>
            Every course I teach is a system I run. No toy demos. No contrived examples. You ship the actual infrastructure.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* FLAGSHIP */}
      <section>
        <div className="container">
          <div className="tag">Flagship</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"}}>
            <div>
              <h2 style={{marginBottom:"1rem"}}>The Sovereign Stack</h2>
              <p style={{marginBottom:"1.5rem"}}>
                Build a fully operational OneMind fabric from scratch — NATS cluster, TAK server, AI agent mesh, geo stack, Cloudflare Zero Trust. 8 modules, real deployments, production configs.
              </p>
              <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"2rem"}}>
                <div style={{textAlign:"center",padding:"1rem 1.5rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"6px"}}>
                  <div style={{fontSize:"1.8rem",fontWeight:800,color:"var(--white)"}}>8</div>
                  <div style={{fontSize:"0.78rem",color:"var(--dim)"}}>Modules</div>
                </div>
                <div style={{textAlign:"center",padding:"1rem 1.5rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"6px"}}>
                  <div style={{fontSize:"1.8rem",fontWeight:800,color:"var(--white)"}}>40+</div>
                  <div style={{fontSize:"0.78rem",color:"var(--dim)"}}>Hours</div>
                </div>
                <div style={{textAlign:"center",padding:"1rem 1.5rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"6px"}}>
                  <div style={{fontSize:"1.8rem",fontWeight:800,color:"var(--white)"}}>Live</div>
                  <div style={{fontSize:"0.78rem",color:"var(--dim)"}}>Cohorts</div>
                </div>
              </div>
              <a href="https://community.onemindos.com" className="btn-primary" target="_blank" rel="noreferrer">Enroll Now →</a>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
              {["NATS substrate + agent mesh","TAK Server on Kubernetes","AI agent orchestration","ClickHouse time machine","Geo stack: Tile38, Valhalla, TimescaleDB","Cloudflare Zero Trust ingress","Live mission operations","Building in public workflow"].map((item,i) => (
                <div key={item} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"0.9rem 1rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"6px"}}>
                  <span style={{color:"var(--red-bright)",fontWeight:700,minWidth:"1.5rem",fontSize:"0.8rem"}}>{String(i+1).padStart(2,"0")}</span>
                  <span style={{fontSize:"0.9rem"}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* COMING SOON */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Coming Soon</div>
          <h2 style={{marginBottom:"2.5rem"}}>What's next</h2>
          <div className="card-grid">
            {[
              {title:"Guardian Protocol",tag:"Security",desc:"Physical + digital security for sovereign operators. Threat modeling, comms security, home hardening."},
              {title:"Sovereign Finance",tag:"Finance",desc:"Multi-sig wallets, DeFi infrastructure, and financial independence stacks for builders."},
              {title:"Homestead OS",tag:"Homesteading",desc:"Sensor networks, automated irrigation, geo-aware farming — the smart sovereign land stack."},
            ].map(c => (
              <div key={c.title} className="card">
                <div className="tag" style={{opacity:0.6}}>{c.tag}</div>
                <h3 style={{marginBottom:"0.6rem"}}>{c.title}</h3>
                <p style={{fontSize:"0.9rem",marginBottom:"1.5rem"}}>{c.desc}</p>
                <span style={{fontSize:"0.8rem",color:"var(--dim)",fontStyle:"italic"}}>Notify me when available →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <a href="/contact" className="btn-primary">Questions about courses →</a>
      </footer>
    </>
  );
}
