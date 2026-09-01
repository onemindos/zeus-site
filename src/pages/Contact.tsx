import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [type, setType] = useState("course");
  return (
    <>
      <section style={{paddingTop:"calc(68px + 5rem)",paddingBottom:"6rem",paddingLeft:"clamp(1.5rem,5vw,4rem)",paddingRight:"clamp(1.5rem,5vw,4rem)",minHeight:"90vh"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>
          <div>
            <div className="tag">Contact</div>
            <h1 style={{marginBottom:"1.5rem"}}>Let's <span className="accent">work together</span></h1>
            <p style={{fontSize:"1.05rem",marginBottom:"3rem"}}>
              Whether you're looking to enroll in a course, book a speaking engagement, or explore a consulting engagement — start here.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
              {[
                {icon:"📧", label:"Direct Email", val:"zeus@onemindos.com"},
                {icon:"🌐", label:"Community", val:"community.onemindos.com"},
                {icon:"💻", label:"GitHub", val:"github.com/onemindos"},
              ].map(c => (
                <div key={c.label} style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                  <div style={{width:44,height:44,borderRadius:"8px",background:"var(--black-3)",border:"1px solid var(--line)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"}}>{c.icon}</div>
                  <div>
                    <div style={{fontSize:"0.72rem",color:"var(--dim)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{c.label}</div>
                    <div style={{color:"var(--white)",fontSize:"0.92rem"}}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"8px",padding:"2.5rem"}}>
            {sent ? (
              <div style={{textAlign:"center",padding:"3rem 0"}}>
                <div style={{fontSize:"3rem",marginBottom:"1rem"}}>✅</div>
                <h3 style={{marginBottom:"0.5rem"}}>Got it — I'll be in touch</h3>
                <p>Usually within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
                <h3 style={{marginBottom:"0.25rem"}}>Send a message</h3>
                {/* Type selector */}
                <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap"}}>
                  {["course","speaking","consulting","other"].map(t=>(
                    <button key={t} type="button" onClick={()=>setType(t)}
                      style={{padding:"6px 14px",borderRadius:"4px",border:"1px solid",borderColor:type===t?"var(--red)":"var(--line)",background:type===t?"var(--red)":"transparent",color:"var(--white)",fontSize:"0.8rem",fontWeight:600,cursor:"pointer",textTransform:"capitalize"}}>
                      {t}
                    </button>
                  ))}
                </div>
                {[{id:"name",label:"Name",type:"text",placeholder:"Your name"},{id:"email",label:"Email",type:"email",placeholder:"you@example.com"}].map(f=>(
                  <div key={f.id} style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
                    <label style={{fontSize:"0.78rem",fontWeight:600,color:"var(--dim)",textTransform:"uppercase",letterSpacing:"0.08em"}}>{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      style={{background:"var(--black-2)",border:"1px solid var(--line)",borderRadius:"4px",padding:"10px 14px",color:"var(--white)",fontSize:"0.95rem",outline:"none"}} />
                  </div>
                ))}
                <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
                  <label style={{fontSize:"0.78rem",fontWeight:600,color:"var(--dim)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Message</label>
                  <textarea rows={4} placeholder={type==="speaking"?"Tell me about the event...":type==="consulting"?"Describe what you're building...":"What's on your mind?"} required
                    style={{background:"var(--black-2)",border:"1px solid var(--line)",borderRadius:"4px",padding:"10px 14px",color:"var(--white)",fontSize:"0.95rem",outline:"none",resize:"vertical"}} />
                </div>
                <button type="submit" className="btn-primary">Send →</button>
              </form>
            )}
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
