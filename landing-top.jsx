
/* ════════════════════════════════════════════════
   landing-top.jsx
   Shared primitives + Header + Hero + Problem + Benefits
   Exports to window for use in other files
   ════════════════════════════════════════════════ */

/* ── Hook: window size ── */
const useWindowSize = () => {
  const [size, setSize] = React.useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });
  React.useEffect(() => {
    const h = () => setSize({ w: window.innerWidth });
    window.addEventListener('resize', h, { passive: true });
    return () => window.removeEventListener('resize', h);
  }, []);
  return size;
};

/* ── Icon component ── */
const Ico = ({ n, sz = 20, c = 'currentColor', sw = 1.8 }) => {
  const icons = {
    building:   <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></>,
    card:       <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>,
    shield:     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    tool:       <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z"/><path d="M5 20l2-2 2.5 2.5-2 2z"/><line x1="3" y1="21" x2="10.5" y2="13.5"/></>,
    calendar:   <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    bell:       <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></>,
    user:       <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    users:      <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    alert:      <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    check:      <polyline points="20 6 9 17 4 12"/>,
    x:          <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    arrow_r:    <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    menu:       <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    chart:      <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    whatsapp:   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>,
    lock:       <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
    mail:       <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    phone:      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011.18 2a2 2 0 012-.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.9z"/>,
    map_pin:    <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    globe:      <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>,
    chevron_d:  <polyline points="6 9 12 15 18 9"/>,
    chevron_u:  <polyline points="18 15 12 9 6 15"/>,
    plus:       <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    minus:      <line x1="5" y1="12" x2="19" y2="12"/>,
    car:        <><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5a2 2 0 01-2 2h-2"/><circle cx="7" cy="17" r="2"/><circle cx="15" cy="17" r="2"/></>,
    clipboard:  <><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></>,
    tag:        <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>,
    activity:   <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
    external:   <><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>,
    sun:        <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" width={sz} height={sz} fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
      {icons[n] || <circle cx="12" cy="12" r="8"/>}
    </svg>
  );
};

/* ── SectionTag ── */
const SectionTag = ({ children, light = false }) => (
  <span style={{
    display: 'inline-block', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.09em', textTransform: 'uppercase',
    color: light ? '#29D9DF' : '#005DEB',
    background: light ? 'rgba(41,217,223,0.15)' : 'rgba(0,93,235,0.09)',
    borderRadius: 100, padding: '5px 14px', marginBottom: 14,
  }}>{children}</span>
);

/* ── BtnPrimary ── */
const BtnPrimary = ({ children, href, onClick, size = 'md', sx = {} }) => {
  const [hov, setHov] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const pads = { sm: '9px 22px', md: '13px 30px', lg: '16px 40px' };
  const fss  = { sm: 13, md: 15, lg: 16 };
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: hov ? '#003F9E' : '#005DEB',
        color: '#fff', border: 'none', borderRadius: 8,
        fontFamily: 'inherit', fontWeight: 700, fontSize: fss[size],
        padding: pads[size], cursor: 'pointer', textDecoration: 'none',
        transition: 'all 220ms ease',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hov ? '0 10px 28px rgba(0,93,235,0.42)' : '0 4px 14px rgba(0,93,235,0.28)',
        whiteSpace: 'nowrap', ...sx,
      }}
    >{children}</Tag>
  );
};

/* ── BtnOutline ── */
const BtnOutline = ({ children, href, onClick, light = false }) => {
  const [hov, setHov] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: hov ? (light ? 'rgba(255,255,255,0.1)' : 'rgba(0,93,235,0.06)') : 'transparent',
        color: light ? '#fff' : '#005DEB',
        border: `2px solid ${light ? 'rgba(255,255,255,0.38)' : '#005DEB'}`,
        borderRadius: 8, fontFamily: 'inherit', fontWeight: 600, fontSize: 15,
        padding: '11px 26px', cursor: 'pointer', textDecoration: 'none',
        transition: 'all 220ms ease', whiteSpace: 'nowrap',
      }}
    >{children}</Tag>
  );
};

/* ── NavLink ── */
const NavLink = ({ href, children }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '8px 14px', fontSize: 14, fontWeight: 600,
        color: hov ? '#fff' : 'rgba(255,255,255,0.72)',
        textDecoration: 'none', borderRadius: 6,
        background: hov ? 'rgba(255,255,255,0.09)' : 'transparent',
        transition: 'all 200ms ease',
      }}
    >{children}</a>
  );
};

/* ══════════════════════════════
   HEADER
   ══════════════════════════════ */
const Header = () => {
  const [scrolled, setScrolled]   = React.useState(false);
  const [menuOpen, setMenuOpen]   = React.useState(false);
  const { w } = useWindowSize();
  const isMobile = w < 900;

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navItems = ['Producto','Soluciones','Planes','Blog','Contacto'];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled || menuOpen ? 'rgba(0,10,38,0.95)' : 'rgba(0,10,38,0.5)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 300ms ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 72, display: 'flex', alignItems: 'center', padding: '0 24px', gap: 40 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, overflow: 'hidden',
            background: 'linear-gradient(135deg,#005DEB,#29D9DF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src="assets/ISOTIPO.svg" alt="SGR" style={{ width: 22, height: 22, filter: 'brightness(10)' }} />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>SGR</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.07em', textTransform: 'uppercase', lineHeight: 1.4 }}>Gestión de Residencias</div>
          </div>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 2, flex: 1, justifyContent: 'center' }}>
            {navItems.map(l => <NavLink key={l} href={`#${l.toLowerCase()}`}>{l}</NavLink>)}
          </nav>
        )}

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0 }}>
          {!isMobile && (
            <a href="#" style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Iniciar sesión</a>
          )}
          {!isMobile && <BtnPrimary href="#contacto" size="sm">Agenda un demo</BtnPrimary>}
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 6, color: '#fff', display: 'flex' }}>
              <Ico n={menuOpen ? 'x' : 'menu'} sz={22} c="#fff" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{ background: 'rgba(0,10,38,0.98)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '12px 24px 24px' }}>
          {navItems.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '14px 0', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.82)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {l}
            </a>
          ))}
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <BtnPrimary href="#contacto" sx={{ justifyContent: 'center' }}>Agenda un demo gratis</BtnPrimary>
          </div>
        </div>
      )}
    </header>
  );
};

/* ══════════════════════════════
   HERO SECTION
   ══════════════════════════════ */
const HeroSection = () => {
  const { w } = useWindowSize();
  const isMobile = w < 900;

  return (
    <section style={{
      minHeight: '100vh', background: '#010E2A',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{ position:'absolute', top:-220, left:-180, width:640, height:640, background:'radial-gradient(circle, rgba(0,93,235,0.28) 0%, transparent 68%)', pointerEvents:'none' }}></div>
      <div style={{ position:'absolute', bottom:-120, right:-160, width:560, height:560, background:'radial-gradient(circle, rgba(41,217,223,0.14) 0%, transparent 70%)', pointerEvents:'none' }}></div>

      {/* Main content */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%', padding: isMobile ? '100px 20px 60px' : '0 24px',
        flex: 1, display: 'flex', alignItems: 'center',
        paddingTop: isMobile ? 100 : 80,
        paddingBottom: isMobile ? 60 : 40,
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 48 : 56,
      }}>
        {/* Left: copy */}
        <div style={{ flex: isMobile ? 'none' : '0 0 52%', maxWidth: isMobile ? '100%' : 560 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(41,217,223,0.12)', border:'1px solid rgba(41,217,223,0.28)', borderRadius:100, padding:'5px 14px', marginBottom:28 }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'#29D9DF' }}></div>
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.09em', textTransform:'uppercase', color:'#29D9DF' }}>Sistema de Gestión Residencial</span>
          </div>

          <h1 style={{
            fontSize: isMobile ? 34 : 'clamp(38px, 4.5vw, 56px)',
            fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.1,
            color: '#fff', marginBottom: 24,
          }}>
            La administración moderna que tu urbanización{' '}
            <span style={{ color: '#29D9DF' }}>ya debería tener</span>
          </h1>

          <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.72, color: 'rgba(255,255,255,0.63)', marginBottom: 40, maxWidth: 500 }}>
            Centraliza pagos, visitas, mantenimiento, reservas, comunicaciones y seguridad en una sola plataforma diseñada para comunidades residenciales en Ecuador.
          </p>

          <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:14 }}>
            <BtnPrimary href="#contacto" size="lg">Agenda un demo gratis</BtnPrimary>
            <BtnOutline href="#producto" light>Explorar funcionalidades</BtnOutline>
          </div>
          <p style={{ fontSize:12, color:'rgba(255,255,255,0.3)', marginBottom:40, letterSpacing:'0.01em' }}>Sin compromiso · Te mostramos cómo SGR se adapta a tu comunidad</p>

          {/* Trust stats */}
          <div style={{ display:'flex', gap:36, flexWrap:'wrap', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:28 }}>
            {[['200+','Comunidades'], ['5.000+','Residentes'], ['97%','Satisfacción']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontSize:22, fontWeight:800, color:'#fff', letterSpacing:'-0.02em' }}>{n}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.42)', fontWeight:500, marginTop:3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero visual */}
        {!isMobile && (
          <div style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
            <div style={{
              position:'absolute', inset:-24,
              background:'radial-gradient(circle at center, rgba(0,93,235,0.18) 0%, transparent 70%)',
              pointerEvents:'none',
            }}></div>
            <img src="assets/Hero Visual.png" alt="SGR Panel de Administración y App Móvil"
              style={{
                width:'100%', maxWidth:600,
                borderRadius:16,
                boxShadow:'0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
                position:'relative',
              }} />
          </div>
        )}
      </div>

      {/* Bottom fade to white */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:100, background:'linear-gradient(to bottom, transparent, #fff)', pointerEvents:'none' }}></div>
    </section>
  );
};

/* ══════════════════════════════
   PROBLEM SECTION
   ══════════════════════════════ */
const PainCard = ({ icon, title, desc }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background:'#fff', border:`1px solid ${hov ? '#005DEB' : '#E6E6E6'}`,
        borderRadius:12, padding:'28px 24px',
        transition:'all 250ms ease',
        boxShadow: hov ? '0 8px 32px rgba(0,93,235,0.1)' : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-2px)' : 'none',
      }}>
      <div style={{ width:44, height:44, background: hov ? 'rgba(239,68,68,0.12)' : '#FEF2F2', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16, transition:'all 250ms' }}>
        <Ico n={icon} sz={20} c="#EF4444" />
      </div>
      <h3 style={{ fontSize:16, fontWeight:700, color:'#1A1A2E', marginBottom:8 }}>{title}</h3>
      <p style={{ fontSize:14, color:'#6B7A99', lineHeight:1.65 }}>{desc}</p>
    </div>
  );
};

const ProblemSection = () => {
  const { w } = useWindowSize();
  const pains = [
    { icon:'card',      title:'Pagos sin trazabilidad',      desc:'Alícuotas y cobros difíciles de monitorear, sin historial claro ni seguimiento por unidad.' },
    { icon:'user',      title:'Visitantes sin control',       desc:'Registros manuales en cuadernos que se pierden, sin verificación ni trazabilidad de ingresos.' },
    { icon:'bell',      title:'Quejas sin seguimiento',       desc:'Reclamos que llegan por WhatsApp y se pierden sin responsable asignado ni cierre documentado.' },
    { icon:'calendar',  title:'Reservas desorganizadas',      desc:'Sin sistema claro para áreas comunes, surgen conflictos de disponibilidad y confusión.' },
    { icon:'tool',      title:'Mantenimientos olvidados',     desc:'Sin reportes ni historial, los trabajos se acumulan y la operación se vuelve reactiva.' },
    { icon:'alert',     title:'Administradores saturados',    desc:'Tareas repetitivas, llamadas constantes y procesos manuales que consumen tiempo valioso.' },
  ];
  const cols = w < 640 ? 1 : w < 960 ? 2 : 3;

  return (
    <section style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <SectionTag>El problema</SectionTag>
          <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', maxWidth:740, margin:'8px auto 18px' }}>
            Tu comunidad no debería depender de papeles, chats perdidos y procesos manuales
          </h2>
          <p style={{ fontSize:17, color:'#6B7A99', lineHeight:1.68, maxWidth:600, margin:'0 auto' }}>
            Cuando las visitas se anotan a mano, las quejas se pierden en WhatsApp y los pagos no tienen seguimiento, la administración se vuelve lenta, confusa y poco confiable.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${cols}, 1fr)`, gap:20 }}>
          {pains.map(p => <PainCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   BENEFITS SECTION
   ══════════════════════════════ */
const BenefitCard = ({ icon, title, desc }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'linear-gradient(135deg,#005DEB,#003F9E)' : '#fff',
        borderRadius:12, padding:'28px 24px',
        transition:'all 250ms ease',
        boxShadow: hov ? '0 14px 36px rgba(0,93,235,0.28)' : '0 2px 8px rgba(0,43,107,0.06)',
        transform: hov ? 'translateY(-3px)' : 'none',
        cursor:'default',
      }}>
      <div style={{ width:44, height:44, background: hov ? 'rgba(255,255,255,0.15)' : 'rgba(0,93,235,0.09)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16, transition:'all 250ms' }}>
        <Ico n={icon} sz={20} c={hov ? '#fff' : '#005DEB'} />
      </div>
      <h3 style={{ fontSize:16, fontWeight:700, color: hov ? '#fff' : '#1A1A2E', marginBottom:8, transition:'color 250ms' }}>{title}</h3>
      <p style={{ fontSize:14, color: hov ? 'rgba(255,255,255,0.76)' : '#6B7A99', lineHeight:1.65, transition:'color 250ms' }}>{desc}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const { w } = useWindowSize();
  const benefits = [
    { icon:'building',  title:'Orden administrativo',          desc:'Gestiona edificios, residencias, usuarios, solicitudes, proveedores y anuncios desde un solo panel.' },
    { icon:'card',      title:'Transparencia financiera',      desc:'Da seguimiento a pagos, alícuotas, cuentas pendientes y facturación con mayor claridad.' },
    { icon:'shield',    title:'Mayor control de seguridad',    desc:'Registra pre-visitas, visitantes, alertas y puntos de control para mejorar la trazabilidad.' },
    { icon:'user',      title:'Comodidad para residentes',     desc:'Reserva instalaciones, registra visitas, hace consultas y revisa información desde el celular.' },
    { icon:'tool',      title:'Mantenimiento con seguimiento', desc:'Asigna tareas, monitorea trabajos activos y genera reportes de actividad.' },
    { icon:'bell',      title:'Comunicación centralizada',     desc:'Envía anuncios y notificaciones importantes sin perder información en chats dispersos.' },
  ];
  const cols = w < 640 ? 1 : w < 960 ? 2 : 3;

  return (
    <section style={{ padding:'96px 0', background:'#F4F5F9' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <SectionTag>La solución</SectionTag>
          <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', maxWidth:680, margin:'8px auto 18px' }}>
            Organiza, automatiza y conecta a toda tu comunidad
          </h2>
          <p style={{ fontSize:17, color:'#6B7A99', lineHeight:1.68, maxWidth:560, margin:'0 auto' }}>
            SGR une a administradores, residentes, guardias y técnicos en una misma plataforma para que cada solicitud, visita, pago y mantenimiento tenga seguimiento claro.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${cols}, 1fr)`, gap:20, marginBottom:48 }}>
          {benefits.map(b => <BenefitCard key={b.title} {...b} />)}
        </div>
        <div style={{ textAlign:'center' }}>
          <BtnPrimary href="#producto">Ver cómo funciona SGR</BtnPrimary>
        </div>
      </div>
    </section>
  );
};

/* ── EXPORTS ── */
Object.assign(window, {
  useWindowSize, Ico, SectionTag, BtnPrimary, BtnOutline, NavLink,
  Header, HeroSection, ProblemSection, BenefitsSection,
});
