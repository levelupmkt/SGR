
/* ════════════════════════════════════════════════
   landing-bottom.jsx
   Maintenance + Reservations + Communication +
   Plans + Blog + FAQ + Contact + Footer
   Depends on window globals from landing-top/mid
   ════════════════════════════════════════════════ */

/* ══════════════════════════════
   MAINTENANCE SECTION
   ══════════════════════════════ */
const MaintenanceSection = () => (
  <FeatureModule
    id="mantenimiento"
    tag="Mantenimiento y solicitudes"
    title="Cada solicitud con responsable, seguimiento y cierre"
    desc="Evita que los mantenimientos queden olvidados. SGR permite recibir solicitudes, asignar trabajos a técnicos, monitorear actividades y generar reportes para tener una operación más ordenada."
    features={['Recepción de solicitudes desde la app de residentes','Asignación directa de tareas a técnicos disponibles','Seguimiento en tiempo real de trabajos activos','Reportes de actividad y tiempos de respuesta','Historial completo de solicitudes por unidad','Notificaciones al residente en cada etapa']}
    MockupComp={MaintenanceMockup}
    reversed={false}
  />
);

/* ══════════════════════════════
   RESERVATIONS SECTION
   ══════════════════════════════ */
const ReservationsSection = () => (
  <FeatureModule
    id="reservas"
    tag="Reservas de áreas comunes"
    title="Reserva espacios sin llamadas, papeles ni confusiones"
    desc="Los residentes pueden reservar instalaciones directamente desde su celular, mientras la administración mantiene control total sobre disponibilidad, uso y conflictos de horarios."
    features={['Reservas de instalaciones desde la app móvil','Calendario de disponibilidad en tiempo real','Control de capacidad y horarios por área','Confirmación automática al residente','Historial de reservas por área y usuario','Menos carga operativa para el equipo administrativo']}
    MockupComp={ReservationsMockup}
    reversed={true}
    dark={true}
  />
);

/* ══════════════════════════════
   COMMUNICATION SECTION
   ══════════════════════════════ */
const CommunicationSection = () => (
  <FeatureModule
    id="comunicacion"
    tag="Comunicación y notificaciones"
    title="Toda la información importante en un solo lugar"
    desc="SGR centraliza anuncios, notificaciones y consultas. Con integración de WhatsApp, los usuarios reciben avisos importantes directamente, sin perder mensajes entre chats dispersos."
    features={['Anuncios y circulares para todos los residentes','Notificaciones automáticas personalizables por evento','Gestión de consultas y respuestas centralizadas','Integración con WhatsApp para avisos directos','Comunicación segmentada por rol o comunidad','Registro histórico de todas las comunicaciones']}
    MockupComp={CommsMockup}
    reversed={false}
  />
);

/* ══════════════════════════════
   PLANS SECTION
   ══════════════════════════════ */
const PlanCard = ({ name, price, period, ideal, features, cta, highlighted, tag }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: highlighted ? 'linear-gradient(160deg,#005DEB 0%,#003F9E 100%)' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${highlighted ? 'rgba(41,217,223,0.4)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 16, padding: '36px 28px',
        display: 'flex', flexDirection: 'column',
        transform: highlighted ? 'scale(1.04)' : (hov ? 'translateY(-4px)' : 'none'),
        transition: 'all 280ms ease',
        boxShadow: highlighted ? '0 20px 60px rgba(0,93,235,0.45)' : (hov ? '0 12px 32px rgba(0,0,0,0.2)' : 'none'),
        position: 'relative',
      }}>
      {tag && (
        <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:'#29D9DF', color:'#002B6B', fontSize:10, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', borderRadius:100, padding:'4px 14px', whiteSpace:'nowrap' }}>
          {tag}
        </div>
      )}
      <div style={{ marginBottom:8 }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color: highlighted ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)', marginBottom:8 }}>{name}</div>
        <div style={{ display:'flex', alignItems:'flex-end', gap:4, marginBottom:4 }}>
          <span style={{ fontSize:48, fontWeight:900, color:'#fff', letterSpacing:'-0.04em', lineHeight:1 }}>${price}</span>
          <span style={{ fontSize:14, color: highlighted ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)', marginBottom:8 }}>/mes</span>
        </div>
        <p style={{ fontSize:12, color: highlighted ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.4)', lineHeight:1.5, marginBottom:24 }}>{ideal}</p>
      </div>
      <div style={{ width:'100%', height:1, background:'rgba(255,255,255,0.1)', marginBottom:24 }}></div>
      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10, flex:1, marginBottom:32 }}>
        {features.map(f => (
          <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
            <div style={{ width:18, height:18, background: highlighted ? 'rgba(41,217,223,0.25)' : 'rgba(255,255,255,0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
              <Ico n="check" sz={9} c={highlighted ? '#29D9DF' : 'rgba(255,255,255,0.6)'} sw={3} />
            </div>
            <span style={{ fontSize:13, color: highlighted ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.6)', lineHeight:1.5 }}>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contacto" style={{
        display:'block', textAlign:'center',
        background: highlighted ? '#29D9DF' : 'rgba(255,255,255,0.1)',
        color: highlighted ? '#002B6B' : '#fff',
        border: highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)',
        borderRadius:8, padding:'13px 0', fontFamily:'inherit', fontWeight:700, fontSize:14,
        textDecoration:'none', transition:'all 220ms ease',
        cursor:'pointer',
      }}>{cta}</a>
    </div>
  );
};

const PlansSection = () => {
  const { w } = useWindowSize();
  const isMobile = w < 900;

  const plans = [
    {
      name:'Comunidad Digital', price:'0', ideal:'Para comunidades que quieren iniciar su transformación digital.',
      features:['Administración de alícuotas y finanzas','Comunicación automatizada con residentes','Control básico de visitantes','Gestión de mantenimiento','Reservas de áreas comunes','Botón de pánico'],
      cta:'Empezar gratis',
    },
    {
      name:'Plan Familiar', price:'15', ideal:'Para familias que necesitan acceso organizado para varios miembros.',
      tag:'Más popular',
      features:['Todo lo del plan Comunidad Digital','Plan familiar sin costo adicional','Acceso para personal operativo','Soporte técnico incluido','Actualizaciones automáticas','Hasta 3 usuarios familiares'],
      cta:'Elegir Plan Familiar', highlighted:true,
    },
    {
      name:'Plan Familiar Plus', price:'25', ideal:'Para comunidades que requieren funciones avanzadas de control.',
      features:['Todo lo del Plan Familiar','Control de accesos avanzado','Código TAG vehicular','Reportes operativos avanzados','Hasta 5 usuarios familiares','Soporte prioritario'],
      cta:'Elegir Plan Plus',
    },
  ];

  return (
    <section id="planes" style={{ padding:'96px 0', background:'#001845', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-180, left:-180, width:560, height:560, background:'radial-gradient(circle, rgba(0,93,235,0.2) 0%, transparent 70%)', pointerEvents:'none' }}></div>
      <div style={{ position:'absolute', bottom:-120, right:-120, width:480, height:480, background:'radial-gradient(circle, rgba(41,217,223,0.1) 0%, transparent 70%)', pointerEvents:'none' }}></div>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', position:'relative' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <SectionTag light>Planes y precios</SectionTag>
          <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#fff', maxWidth:620, margin:'8px auto 18px' }}>
            Elige el plan ideal para modernizar tu comunidad
          </h2>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.5)', maxWidth:520, margin:'0 auto', lineHeight:1.65 }}>
            Desde funciones esenciales hasta control avanzado de accesos, SGR se adapta al nivel de gestión que necesita tu urbanización.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap:20, alignItems:'center' }}>
          {plans.map(p => <PlanCard key={p.name} {...p} />)}
        </div>
        <p style={{ textAlign:'center', fontSize:13, color:'rgba(255,255,255,0.3)', marginTop:36, lineHeight:1.6 }}>
          ¿No sabes qué plan elegir? Agenda un demo y te ayudamos a identificar el más conveniente para tu comunidad.
          <br/>Los valores y condiciones deben validarse con un asesor antes de la contratación.
        </p>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   BLOG SECTION
   ══════════════════════════════ */
const BlogCard = ({ category, title, excerpt, date, catColor }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background:'#fff', borderRadius:12, overflow:'hidden',
        boxShadow: hov ? '0 10px 32px rgba(0,43,107,0.12)' : '0 2px 8px rgba(0,43,107,0.06)',
        transform: hov ? 'translateY(-3px)' : 'none',
        transition:'all 250ms ease', display:'flex', flexDirection:'column',
        border:`1px solid ${hov ? '#E6E6E6' : '#F0F0F4'}`,
      }}>
      <div style={{ height:4, background:catColor }}></div>
      <div style={{ padding:'24px', flex:1, display:'flex', flexDirection:'column' }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
          <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:catColor, background:catColor+'14', borderRadius:100, padding:'3px 10px' }}>{category}</span>
          <span style={{ fontSize:11, color:'#A8A8B8' }}>{date}</span>
        </div>
        <h3 style={{ fontSize:17, fontWeight:700, color:'#1A1A2E', lineHeight:1.4, marginBottom:12, flex:1 }}>{title}</h3>
        <p style={{ fontSize:13, color:'#6B7A99', lineHeight:1.65, marginBottom:20 }}>{excerpt}</p>
        <a href="#blog" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:700, color:'#005DEB', textDecoration:'none' }}>
          Leer artículo <Ico n="arrow_r" sz={14} c="#005DEB" sw={2.5} />
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const { w } = useWindowSize();
  const cols = w < 640 ? 1 : w < 960 ? 2 : 3;
  const articles = [
    { category:'Seguridad residencial', catColor:'#EF4444', date:'12 May 2025',
      title:'¿Tu urbanización todavía registra visitas en papel?',
      excerpt:'Conoce por qué el control manual de visitas puede afectar la seguridad y cómo digitalizar este proceso mejora la trazabilidad de tu comunidad.' },
    { category:'Guías para administradores', catColor:'#005DEB', date:'5 May 2025',
      title:'5 señales de que tu urbanización necesita digitalizar su administración',
      excerpt:'Identifica los problemas más comunes en la gestión residencial y descubre cómo una plataforma digital puede transformar la operación diaria.' },
    { category:'Finanzas y alícuotas', catColor:'#F59E0B', date:'28 Abr 2025',
      title:'Cómo mejorar la transparencia financiera en una comunidad residencial',
      excerpt:'Buenas prácticas para organizar pagos, reducir morosidad y mantener cuentas claras en urbanizaciones y condominios.' },
    { category:'Novedades SGR', catColor:'#22C55E', date:'20 Abr 2025',
      title:'Nueva integración: notificaciones automáticas por WhatsApp',
      excerpt:'SGR ahora permite enviar avisos de alícuotas, confirmaciones de reservas y alertas directamente al WhatsApp de cada residente.' },
    { category:'Mantenimiento', catColor:'#8B5CF6', date:'14 Abr 2025',
      title:'Cómo organizar solicitudes de mantenimiento sin perder seguimiento',
      excerpt:'Consejos para gestionar técnicos, priorizar trabajos y documentar cada intervención con historial completo.' },
    { category:'Residentes y convivencia', catColor:'#29D9DF', date:'7 Abr 2025',
      title:'Reservas de áreas comunes: cómo evitar confusiones entre residentes',
      excerpt:'Un sistema digital de reservas elimina conflictos de horarios, reduce llamadas al administrador y mejora la experiencia comunitaria.' },
  ];

  return (
    <section id="blog" style={{ padding:'96px 0', background:'#F4F5F9' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:52, flexWrap:'wrap', gap:16 }}>
          <div>
            <SectionTag>Blog y novedades</SectionTag>
            <h2 style={{ fontSize:'clamp(24px, 3vw, 38px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', marginTop:8 }}>
              Ideas y guías para tu comunidad
            </h2>
          </div>
          <a href="#blog" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:14, fontWeight:700, color:'#005DEB', textDecoration:'none', whiteSpace:'nowrap' }}>
            Ver todas las novedades <Ico n="arrow_r" sz={14} c="#005DEB" sw={2.5} />
          </a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${cols},1fr)`, gap:20 }}>
          {articles.map(a => <BlogCard key={a.title} {...a} />)}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   FAQ SECTION
   ══════════════════════════════ */
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom:'1px solid #E6E6E6', overflow:'hidden' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, padding:'20px 0', background:'none', border:'none', cursor:'pointer', fontFamily:'inherit', textAlign:'left' }}>
        <span style={{ fontSize:16, fontWeight:600, color:'#1A1A2E', lineHeight:1.4 }}>{question}</span>
        <div style={{ width:28, height:28, background: open ? '#005DEB' : 'rgba(0,93,235,0.08)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'all 200ms ease' }}>
          <Ico n={open ? 'minus' : 'plus'} sz={14} c={open ? '#fff' : '#005DEB'} sw={2.5} />
        </div>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow:'hidden', transition:'max-height 350ms ease' }}>
        <p style={{ fontSize:15, color:'#6B7A99', lineHeight:1.7, paddingBottom:20 }}>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question:'¿Qué es SGR?', answer:'SGR es una plataforma para modernizar la administración de urbanizaciones y condominios, centralizando pagos, visitantes, mantenimiento, reservas, comunicación y seguridad en un solo sistema.' },
    { question:'¿SGR funciona para urbanizaciones y condominios?', answer:'Sí. La plataforma está pensada para propiedades residenciales, apartamentos, urbanizaciones y condominios de cualquier tamaño en Ecuador.' },
    { question:'¿Quiénes pueden usar SGR?', answer:'Administradores, residentes, propietarios, inquilinos, guardias, técnicos y comités o directivas. Cada usuario tiene acceso a las funciones correspondientes a su rol.' },
    { question:'¿Permite controlar visitas?', answer:'Sí. SGR permite gestionar pre-visitas registradas por residentes, visitantes presenciales y puntos de control para guardias, mejorando la trazabilidad de cada ingreso.' },
    { question:'¿Tiene botón de pánico?', answer:'Sí. La plataforma incluye función de botón de pánico y alertas de emergencia para residentes, con notificación al personal operativo correspondiente.' },
    { question:'¿Los residentes pueden reservar áreas comunes?', answer:'Sí. Los residentes pueden reservar instalaciones desde la app móvil, ver disponibilidad en tiempo real y recibir confirmación automática, reduciendo llamadas y procesos manuales.' },
    { question:'¿SGR ayuda con pagos y alícuotas?', answer:'Sí. Permite dar seguimiento a cuentas, pagos, alícuotas y valores pendientes. La administración puede ver el estado financiero de cada unidad y gestionar cobros con mayor claridad.' },
    { question:'¿Tiene notificaciones por WhatsApp?', answer:'Sí. SGR contempla integración con WhatsApp para notificaciones directas a residentes sobre pagos, reservas, mantenimiento y comunicaciones importantes, según configuración del plan.' },
    { question:'¿Puedo pedir una demostración?', answer:'Sí. Puedes agendar un demo gratuito para conocer cómo SGR se adapta a la operación real de tu comunidad. Un asesor te guiará por las funciones relevantes para tu caso.' },
  ];
  const { w } = useWindowSize();
  const isMobile = w < 900;

  return (
    <section style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 48 : 80, alignItems:'flex-start' }}>
          <div>
            <SectionTag>FAQ</SectionTag>
            <h2 style={{ fontSize:'clamp(26px, 3vw, 38px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', marginBottom:18, marginTop:8 }}>
              Preguntas frecuentes
            </h2>
            <p style={{ fontSize:16, color:'#6B7A99', lineHeight:1.7, marginBottom:32 }}>
              ¿Tienes más preguntas? Agenda un demo y un asesor te las responde en tiempo real.
            </p>
            <BtnPrimary href="#contacto">Agendar demo gratis</BtnPrimary>
          </div>
          <div>
            {faqs.map(f => <FAQItem key={f.question} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   CONTACT / DEMO SECTION
   ══════════════════════════════ */
const ContactSection = () => {
  const { w } = useWindowSize();
  const isMobile = w < 900;
  const [form, setForm] = React.useState({ nombre:'', cargo:'', comunidad:'', ciudad:'', unidades:'', telefono:'', email:'', necesidad:'', mensaje:'' });
  const [status, setStatus] = React.useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1600);
  };

  const inputStyle = {
    width:'100%', fontFamily:'inherit', fontSize:14, padding:'11px 14px',
    background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.15)',
    borderRadius:8, color:'#fff', outline:'none', transition:'border-color 200ms',
  };
  const labelStyle = { display:'block', fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.6)', marginBottom:6 };

  return (
    <section id="contacto" style={{ padding:'96px 0', background:'#001845', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-200, right:-200, width:600, height:600, background:'radial-gradient(circle, rgba(0,93,235,0.18) 0%, transparent 68%)', pointerEvents:'none' }}></div>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 56 : 80, alignItems:'flex-start' }}>
          {/* Left: info */}
          <div>
            <SectionTag light>Agenda un demo</SectionTag>
            <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.15, color:'#fff', marginBottom:18, marginTop:8 }}>
              Descubre cómo SGR puede transformar tu comunidad
            </h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,0.55)', lineHeight:1.72, marginBottom:40 }}>
              Cuéntanos cómo funciona hoy tu urbanización o condominio y te mostraremos cómo SGR puede ayudarte a organizar pagos, visitantes, solicitudes, reservas y comunicación.
            </p>
            {[
              { icon:'map_pin', text:'Urdesa, Circunvalación Sur 108 y Victor Emilio Estrada, Piso 1 Oficina 4, Guayaquil' },
              { icon:'phone',   text:'0979545516' },
              { icon:'mail',    text:'info@codigo.plus' },
              { icon:'globe',   text:'www.sgresidencia.com' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:16 }}>
                <div style={{ width:36, height:36, background:'rgba(0,93,235,0.2)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Ico n={icon} sz={16} c="#29D9DF" />
                </div>
                <span style={{ fontSize:14, color:'rgba(255,255,255,0.6)', lineHeight:1.6, paddingTop:8 }}>{text}</span>
              </div>
            ))}
            <div style={{ marginTop:32, paddingTop:32, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:12 }}>Desarrollado por</div>
              <div style={{ fontSize:16, fontWeight:700, color:'rgba(255,255,255,0.7)' }}>Código Plus</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:4 }}>Diseñado para la operación real de urbanizaciones y condominios en Ecuador</div>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:16, padding: isMobile ? '28px 20px' : '40px' }}>
            {status === 'success' ? (
              <div style={{ textAlign:'center', padding:'48px 24px' }}>
                <div style={{ width:64, height:64, background:'rgba(34,197,94,0.2)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
                  <Ico n="check" sz={28} c="#22C55E" sw={2.5} />
                </div>
                <h3 style={{ fontSize:22, fontWeight:800, color:'#fff', marginBottom:12 }}>¡Solicitud enviada!</h3>
                <p style={{ fontSize:15, color:'rgba(255,255,255,0.6)', lineHeight:1.65 }}>Recibimos tu solicitud. Un asesor de SGR se comunicará contigo para coordinar el demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize:20, fontWeight:700, color:'#fff', marginBottom:8 }}>Agenda un demo gratis</h3>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:28, lineHeight:1.6 }}>Completa el formulario y un asesor te contactará para coordinar el demo.</p>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:0 }}>
                  {[
                    { name:'nombre',    label:'Nombre completo *',          placeholder:'María Rodríguez',        full:true },
                    { name:'cargo',     label:'Cargo o rol *',              placeholder:'Administrador, Residente…' },
                    { name:'comunidad', label:'Urbanización o condominio *', placeholder:'Urb. Los Ceibos' },
                    { name:'ciudad',    label:'Ciudad',                      placeholder:'Guayaquil' },
                    { name:'telefono',  label:'Teléfono / WhatsApp *',       placeholder:'0999000000' },
                    { name:'email',     label:'Correo electrónico *',        placeholder:'maria@correo.com' },
                  ].map(({ name, label, placeholder, full }) => (
                    <div key={name} style={{ gridColumn: full ? '1/-1' : 'auto', marginBottom:16 }}>
                      <label style={labelStyle}>{label}</label>
                      <input name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
                        onFocus={e => e.target.style.borderColor = '#005DEB'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                        style={inputStyle} />
                    </div>
                  ))}
                  <div style={{ gridColumn:'1/-1', marginBottom:16 }}>
                    <label style={labelStyle}>Principal necesidad</label>
                    <select name="necesidad" value={form.necesidad} onChange={handleChange}
                      style={{ ...inputStyle, appearance:'none', WebkitAppearance:'none', cursor:'pointer' }}>
                      <option value="">Selecciona una opción</option>
                      {['Pagos y alícuotas','Control de visitantes','Mantenimiento','Reservas','Comunicación','Seguridad','Otro'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div style={{ gridColumn:'1/-1', marginBottom:24 }}>
                    <label style={labelStyle}>Mensaje (opcional)</label>
                    <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={3} placeholder="Cuéntanos brevemente qué problema quieres resolver."
                      onFocus={e => e.target.style.borderColor = '#005DEB'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                      style={{ ...inputStyle, resize:'vertical' }} />
                  </div>
                </div>
                <button type="submit" disabled={status==='loading'}
                  style={{
                    width:'100%', background: status==='loading' ? '#003F9E' : '#005DEB',
                    color:'#fff', border:'none', borderRadius:8, padding:'14px', fontFamily:'inherit', fontWeight:700, fontSize:15, cursor: status==='loading' ? 'wait' : 'pointer', transition:'all 220ms',
                    boxShadow:'0 4px 14px rgba(0,93,235,0.35)',
                  }}>
                  {status==='loading' ? 'Enviando solicitud...' : 'Agendar demo gratis'}
                </button>
                <p style={{ textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.3)', marginTop:14 }}>
                  ¿Prefieres WhatsApp?{' '}
                  <a href="https://wa.me/593979545516" style={{ color:'#25D366', textDecoration:'none', fontWeight:600 }}>Escríbenos aquí</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   FOOTER
   ══════════════════════════════ */
const FooterSection = () => {
  const { w } = useWindowSize();
  const isMobile = w < 768;

  const cols = [
    { title:'Producto',   links:['Funcionalidades','Administración','Finanzas','Seguridad','Mantenimiento','Reservas'] },
    { title:'Soluciones', links:['Para administradores','Para residentes','Para guardias','Para técnicos','Para comités'] },
    { title:'Recursos',   links:['Blog','Novedades','Preguntas frecuentes','Centro de ayuda'] },
    { title:'Empresa',    links:['Contacto','Agenda demo','Sobre Código Plus','Términos y condiciones','Política de privacidad'] },
  ];

  return (
    <footer style={{ background:'#0A0A14', padding:'64px 0 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        {/* Top CTA strip */}
        <div style={{ background:'linear-gradient(135deg,#005DEB,#003F9E)', borderRadius:16, padding: isMobile ? '28px 24px' : '36px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:20, marginBottom:64 }}>
          <div>
            <h3 style={{ fontSize: isMobile ? 20 : 26, fontWeight:800, color:'#fff', letterSpacing:'-0.02em', marginBottom:6 }}>¿Listo para dejar atrás el desorden administrativo?</h3>
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.65)' }}>Agenda un demo y descubre cómo SGR transforma tu comunidad.</p>
          </div>
          <BtnPrimary href="#contacto" size="lg" sx={{ background:'#29D9DF', color:'#002B6B', boxShadow:'0 4px 16px rgba(41,217,223,0.35)' }}>Agendar demo ahora</BtnPrimary>
        </div>

        {/* Nav grid */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : `2fr ${cols.map(() => '1fr').join(' ')}`, gap:'40px 32px', marginBottom:56 }}>
          {/* Brand column */}
          <div style={{ gridColumn: isMobile ? '1/-1' : 'auto' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:36, height:36, background:'linear-gradient(135deg,#005DEB,#29D9DF)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <img src="assets/ISOTIPO.svg" alt="SGR" style={{ width:20, height:20, filter:'brightness(10)' }} />
              </div>
              <div>
                <div style={{ fontSize:18, fontWeight:800, color:'#fff', letterSpacing:'-0.02em', lineHeight:1 }}>SGR</div>
                <div style={{ fontSize:8, color:'rgba(255,255,255,0.35)', letterSpacing:'0.07em', textTransform:'uppercase' }}>Gestión de Residencias</div>
              </div>
            </div>
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.38)', lineHeight:1.7, maxWidth:240, marginBottom:20 }}>
              Plataforma para modernizar la administración de urbanizaciones y condominios en Ecuador.
            </p>
            <div style={{ display:'flex', gap:10 }}>
              {['globe','phone','mail'].map(ic => (
                <a key={ic} href="#" style={{ width:32, height:32, background:'rgba(255,255,255,0.07)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none', transition:'background 200ms' }}>
                  <Ico n={ic} sz={14} c="rgba(255,255,255,0.5)" />
                </a>
              ))}
            </div>
          </div>
          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.09em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:14 }}>{col.title}</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8 }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontSize:13, color:'rgba(255,255,255,0.48)', textDecoration:'none', transition:'color 200ms' }}
                      onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.48)'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:24, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontSize:12, color:'rgba(255,255,255,0.28)' }}>© 2025 SGR · Desarrollado por Código Plus · Guayaquil, Ecuador</p>
          <div style={{ display:'flex', gap:20 }}>
            {['Términos y condiciones','Política de privacidad'].map(l => (
              <a key={l} href="#" style={{ fontSize:12, color:'rgba(255,255,255,0.28)', textDecoration:'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ── EXPORTS ── */
Object.assign(window, {
  MaintenanceSection, ReservationsSection, CommunicationSection,
  PlansSection, BlogSection, FAQSection, ContactSection, FooterSection,
});
