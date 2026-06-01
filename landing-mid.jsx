
/* ════════════════════════════════════════════════
   landing-mid.jsx
   Modules + BeforeAfter + Roles + Security + Finance
   Depends on window globals from landing-top.jsx
   ════════════════════════════════════════════════ */

/* ── Mini module mockup panels ── */
const FinanceMockup = () => (
  <div style={{ background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,43,107,0.12)', border:'1px solid #E6E6E6', width:'100%' }}>
    <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#005DEB,#003F9E)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>Gestión de Cuentas</span>
      <span style={{ fontSize:10, background:'rgba(255,255,255,0.2)', color:'#fff', borderRadius:4, padding:'2px 8px' }}>USD 1,100 pendiente</span>
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'2fr 2fr 1.2fr', padding:'8px 14px', background:'#F9FAFF', borderBottom:'1px solid #E6E6E6' }}>
      {['Unidad','Concepto','Estado'].map(h => <span key={h} style={{ fontSize:9, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'#6B7A99' }}>{h}</span>)}
    </div>
    {[
      { u:'mz2760-01-07', c:'Alícuota mensual', s:'Pagado',    sc:'#DCFCE7', st:'#166534' },
      { u:'Mz2774-01-01', c:'Alícuota mensual', s:'Pendiente', sc:'#FEF9C3', st:'#854D0E' },
      { u:'Mz2797-1-14',  c:'Cuota extra',      s:'Vencido',   sc:'#FEE2E2', st:'#991B1B' },
      { u:'mz2760-01-02', c:'Alícuota mensual', s:'Pagado',    sc:'#DCFCE7', st:'#166534' },
      { u:'Mz2775-01-05', c:'Mantenimiento',    s:'Pendiente', sc:'#FEF9C3', st:'#854D0E' },
    ].map((r, i) => (
      <div key={i} style={{ display:'grid', gridTemplateColumns:'2fr 2fr 1.2fr', padding:'9px 14px', borderBottom:'1px solid #F4F4F6', background: i%2===0 ? '#fff' : '#FAFBFF', alignItems:'center' }}>
        <span style={{ fontSize:11, color:'#1A1A2E', fontWeight:500 }}>{r.u}</span>
        <span style={{ fontSize:11, color:'#6B7A99' }}>{r.c}</span>
        <span style={{ display:'inline-block', fontSize:9, fontWeight:700, borderRadius:4, padding:'2px 7px', background:r.sc, color:r.st }}>{r.s}</span>
      </div>
    ))}
    <div style={{ padding:'8px 14px', fontSize:10, color:'#6B7A99', borderTop:'1px solid #E6E6E6', background:'#F9FAFF' }}>Mostrando 5 de 17 registros</div>
  </div>
);

const SecurityMockup = () => (
  <div style={{ background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,43,107,0.12)', border:'1px solid #E6E6E6', width:'100%' }}>
    <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#002B6B,#003F9E)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>Control de Visitantes</span>
      <span style={{ fontSize:10, background:'rgba(41,217,223,0.25)', color:'#29D9DF', borderRadius:4, padding:'2px 8px', border:'1px solid rgba(41,217,223,0.3)' }}>3 ingresos hoy</span>
    </div>
    {[
      { name:'Pedro Ramírez', dest:'Casa 07', time:'14:32', type:'Visita común',  dot:'#22C55E' },
      { name:'Diana López',   dest:'Apt 01',  time:'13:15', type:'Pre-registrada', dot:'#29D9DF' },
      { name:'Carlos Vega',   dest:'Casa 14', time:'11:00', type:'Técnico',        dot:'#F59E0B' },
      { name:'Ana Morales',   dest:'Apt 03',  time:'09:45', type:'Residente',      dot:'#22C55E' },
    ].map((v, i) => (
      <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px', borderBottom:'1px solid #F4F4F6' }}>
        <div style={{ width:8, height:8, borderRadius:'50%', background:v.dot, flexShrink:0 }}></div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'#1A1A2E' }}>{v.name}</div>
          <div style={{ fontSize:11, color:'#6B7A99', marginTop:1 }}>{v.dest} · {v.type}</div>
        </div>
        <span style={{ fontSize:11, color:'#A8A8B8', fontWeight:500 }}>{v.time}</span>
      </div>
    ))}
  </div>
);

const MaintenanceMockup = () => (
  <div style={{ background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,43,107,0.12)', border:'1px solid #E6E6E6', width:'100%' }}>
    <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#005DEB,#003F9E)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>Solicitudes de Mantenimiento</span>
      <span style={{ fontSize:10, background:'rgba(255,255,255,0.2)', color:'#fff', borderRadius:4, padding:'2px 8px' }}>8 activas</span>
    </div>
    {[
      { code:'SOL-001', desc:'Fuga de agua zona A',     tech:'Luis R.',  s:'En progreso', sc:'#DBEAFE', st:'#1D4ED8' },
      { code:'SOL-002', desc:'Luminaria del parque',    tech:'Marco V.', s:'Pendiente',   sc:'#FEF9C3', st:'#854D0E' },
      { code:'SOL-003', desc:'Portón eléctrico',        tech:'Luis R.',  s:'Completado',  sc:'#DCFCE7', st:'#166534' },
      { code:'SOL-004', desc:'Pintura área de juegos',  tech:'Sin asig.', s:'Nuevo',      sc:'#F3F4F6', st:'#4A5568' },
    ].map((r, i) => (
      <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 16px', borderBottom:'1px solid #F4F4F6' }}>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:12, fontWeight:600, color:'#1A1A2E' }}>{r.desc}</div>
          <div style={{ fontSize:10, color:'#6B7A99', marginTop:1 }}>{r.code} · {r.tech}</div>
        </div>
        <span style={{ display:'inline-block', fontSize:9, fontWeight:700, borderRadius:4, padding:'2px 7px', background:r.sc, color:r.st, flexShrink:0 }}>{r.s}</span>
      </div>
    ))}
  </div>
);

const ReservationsMockup = () => (
  <div style={{ background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,43,107,0.12)', border:'1px solid #E6E6E6', width:'100%' }}>
    <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#005DEB,#003F9E)' }}>
      <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>Reservas de Instalaciones</span>
    </div>
    <div style={{ padding:'14px 16px' }}>
      <div style={{ fontSize:10, fontWeight:700, color:'#6B7A99', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Mayo 2025</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:3, marginBottom:12 }}>
        {['L','M','X','J','V','S','D'].map(d => <div key={d} style={{ fontSize:8, fontWeight:700, color:'#A8A8B8', textAlign:'center', paddingBottom:4 }}>{d}</div>)}
        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          const busy = [3,8,10,15,17,22,24].includes(day);
          const today = day === 14;
          return (
            <div key={i} style={{ fontSize:9, fontWeight: today||busy ? 700 : 400, color: today ? '#fff' : busy ? '#005DEB' : '#1A1A2E', textAlign:'center', padding:'4px 0', borderRadius:4, background: today ? '#005DEB' : busy ? 'rgba(0,93,235,0.1)' : 'transparent' }}>{day}</div>
          );
        })}
      </div>
      {[
        { area:'Salón Social',      date:'Hoy, 18:00',     res:'García — 3h', c:'#005DEB' },
        { area:'Piscina',           date:'Mañana, 10:00',  res:'López — 2h',  c:'#22C55E' },
        { area:'Cancha de tenis',   date:'22 May, 16:00',  res:'Mendoza — 1h',c:'#F59E0B' },
      ].map((r, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'7px 0', borderTop:'1px solid #F4F4F6' }}>
          <div style={{ width:3, height:28, background:r.c, borderRadius:2, flexShrink:0 }}></div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, fontWeight:600, color:'#1A1A2E' }}>{r.area}</div>
            <div style={{ fontSize:10, color:'#6B7A99' }}>{r.date} · {r.res}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CommsMockup = () => (
  <div style={{ background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,43,107,0.12)', border:'1px solid #E6E6E6', width:'100%' }}>
    <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#005DEB,#003F9E)', display:'flex', alignItems:'center', gap:8 }}>
      <Ico n="whatsapp" sz={14} c="#25D366" sw={2} />
      <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>Comunicaciones y Notificaciones</span>
    </div>
    {[
      { type:'Anuncio',       msg:'Mantenimiento de piscina programado para el sábado 18.',         time:'10:30', new:true,  c:'#005DEB' },
      { type:'Alícuota',      msg:'Recordatorio: pago de alícuota de mayo vence el 31/05.',         time:'09:00', new:true,  c:'#F59E0B' },
      { type:'WhatsApp',      msg:'Tu reserva del Salón Social fue confirmada para el viernes.',    time:'Ayer',  new:false, c:'#25D366' },
      { type:'Solicitud',     msg:'Tu solicitud de mantenimiento SOL-003 fue completada.',          time:'Lun',   new:false, c:'#22C55E' },
      { type:'Comité',        msg:'Reunión de directiva convocada para el 25 de mayo a las 19h.',  time:'Dom',   new:false, c:'#8B5CF6' },
    ].map((n, i) => (
      <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, padding:'10px 14px', borderBottom:'1px solid #F4F4F6', background: n.new ? '#FAFBFF' : '#fff' }}>
        <div style={{ width:6, height:6, borderRadius:'50%', background:n.new ? '#005DEB' : 'transparent', marginTop:5, flexShrink:0 }}></div>
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', gap:6, alignItems:'center', marginBottom:2 }}>
            <span style={{ fontSize:9, fontWeight:700, borderRadius:3, padding:'1px 6px', background:n.c+'18', color:n.c }}>{n.type}</span>
          </div>
          <div style={{ fontSize:11, color:'#1A1A2E', lineHeight:1.4 }}>{n.msg}</div>
        </div>
        <span style={{ fontSize:10, color:'#A8A8B8', flexShrink:0, marginTop:2 }}>{n.time}</span>
      </div>
    ))}
  </div>
);

const AdminMockup = () => (
  <div style={{ background:'#fff', borderRadius:12, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,43,107,0.12)', border:'1px solid #E6E6E6', width:'100%' }}>
    <div style={{ padding:'12px 16px', background:'linear-gradient(135deg,#005DEB,#003F9E)' }}>
      <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>Panel de Residencias</span>
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, padding:'12px' }}>
      {[['12','Edificios','#005DEB'],['148','Unidades','#22C55E'],['6','Técnicos','#F59E0B'],['3','Comités','#8B5CF6']].map(([v,l,c]) => (
        <div key={l} style={{ background:'#F4F5F9', borderRadius:8, padding:'12px', borderLeft:`3px solid ${c}` }}>
          <div style={{ fontSize:20, fontWeight:800, color:c }}>{v}</div>
          <div style={{ fontSize:10, color:'#6B7A99', marginTop:2 }}>{l}</div>
        </div>
      ))}
    </div>
    {[
      { code:'Mz2760-01-07', owner:'Juan Mendoza', type:'Casa', s:'Activo', sc:'#DCFCE7', st:'#166534' },
      { code:'Mz2774-01-01', owner:'Ana García',   type:'Apt.', s:'Activo', sc:'#DCFCE7', st:'#166534' },
      { code:'Mz2797-1-14',  owner:'Luis Torres',  type:'Casa', s:'Inactivo',sc:'#F3F4F6',st:'#4A5568' },
    ].map((r, i) => (
      <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 14px', borderTop:'1px solid #F4F4F6' }}>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:12, fontWeight:600, color:'#1A1A2E' }}>{r.code}</div>
          <div style={{ fontSize:10, color:'#6B7A99' }}>{r.owner} · {r.type}</div>
        </div>
        <span style={{ fontSize:9, fontWeight:700, borderRadius:4, padding:'2px 7px', background:r.sc, color:r.st }}>{r.s}</span>
      </div>
    ))}
  </div>
);

const MOCKUPS = {
  admin: <AdminMockup />, finanzas: <FinanceMockup />, seguridad: <SecurityMockup />,
  mantenimiento: <MaintenanceMockup />, residentes: <ReservationsMockup />,
  whatsapp: <CommsMockup />, reportes: <FinanceMockup />,
};

/* ══════════════════════════════
   MODULES SECTION
   ══════════════════════════════ */
const ModuleTabBtn = ({ label, icon, active, onClick }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display:'flex', alignItems:'center', gap:7, padding:'9px 16px',
        background: active ? '#005DEB' : (hov ? '#F4F5F9' : '#fff'),
        color: active ? '#fff' : (hov ? '#1A1A2E' : '#6B7A99'),
        border:`1px solid ${active ? '#005DEB' : '#E6E6E6'}`,
        borderRadius:8, fontFamily:'inherit', fontWeight:600, fontSize:13,
        cursor:'pointer', transition:'all 200ms ease', whiteSpace:'nowrap',
      }}>
      <Ico n={icon} sz={15} c={active ? '#fff' : (hov ? '#005DEB' : '#A8A8B8')} />
      {label}
    </button>
  );
};

const ModulesSection = () => {
  const [active, setActive] = React.useState(0);
  const { w } = useWindowSize();
  const isMobile = w < 900;

  const modules = [
    { id:'admin',         label:'Administración', icon:'building',
      title:'Administra edificios, residencias y usuarios desde un solo lugar',
      desc:'Controla la información de propiedades, unidades, residentes, inquilinos, parqueaderos, proveedores y personal operativo sin depender de hojas sueltas o archivos dispersos.',
      features:['Gestión de residencias y unidades','Administración de usuarios por rol','Control de edificios y propiedades','Gestión de proveedores y técnicos','Organización de juntas, comités y anuncios'], cta:'Organizar mi comunidad' },
    { id:'finanzas',      label:'Finanzas',        icon:'card',
      title:'Más claridad para pagos, cobros y cuentas pendientes',
      desc:'SGR facilita el seguimiento financiero de la comunidad, manteniendo mayor transparencia sobre alícuotas, pagos, facturación y valores pendientes.',
      features:['Gestión de cuentas y pagos','Seguimiento de alícuotas','Control de cuentas pendientes','Historial financiero por unidad o residente','Apoyo a procesos de cobro y facturación'], cta:'Controlar pagos' },
    { id:'seguridad',     label:'Seguridad',       icon:'shield',
      title:'Controla quién entra, cuándo entra y por qué entra',
      desc:'El módulo de seguridad permite gestionar pre-visitas, visitantes, puntos de control, estacionamientos nocturnos y alertas para mayor trazabilidad operativa.',
      features:['Registro de pre-visitas','Control de visitantes','Puntos de control para guardias','Monitoreo de estacionamientos nocturnos','Activación de alertas de pánico'], cta:'Mejorar control de visitas' },
    { id:'mantenimiento', label:'Mantenimiento',   icon:'tool',
      title:'Cada solicitud con responsable, seguimiento y cierre',
      desc:'Evita que los mantenimientos queden olvidados. SGR permite recibir solicitudes, asignar trabajos, monitorear actividades y generar reportes para una operación más ordenada.',
      features:['Recepción de solicitudes de servicio','Asignación de tareas a técnicos','Seguimiento de trabajos activos','Reportes de actividad','Historial de solicitudes'], cta:'Ordenar mantenimientos' },
    { id:'residentes',    label:'Reservas',        icon:'calendar',
      title:'Reserva áreas comunes sin llamadas, papeles ni confusiones',
      desc:'Los residentes pueden solicitar o reservar instalaciones de forma más simple, mientras la administración mantiene control sobre disponibilidad y uso de espacios comunes.',
      features:['Reservas desde la app','Mayor comodidad para residentes','Control de disponibilidad','Historial de reservas','Menos carga operativa para administración'], cta:'Facilitar reservas' },
    { id:'whatsapp',      label:'Comunicación',    icon:'whatsapp',
      title:'Comunicación importante sin perderse en chats interminables',
      desc:'SGR centraliza anuncios, notificaciones y consultas. Además, permite integrar notificaciones directas por WhatsApp para mantener informados a los usuarios.',
      features:['Anuncios para residentes','Notificaciones automáticas personalizables','Gestión de consultas','Integración con WhatsApp para avisos directos','Comunicación segmentada por rol o comunidad'], cta:'Conectar mi comunidad' },
    { id:'reportes',      label:'Reportes',        icon:'chart',
      title:'Decisiones más rápidas con información visible',
      desc:'Los paneles de control muestran indicadores clave de solicitudes, quejas, tareas, residencias, edificios y usuarios para una gestión más clara y proactiva.',
      features:['Panel de inicio por rol','Indicadores de solicitudes y tareas','Vista de residencias y edificios','Reportes operativos','Información adaptada a cada usuario'], cta:'Ver paneles de SGR' },
  ];

  const mod = modules[active];

  return (
    <section id="producto" style={{ padding:'96px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <SectionTag>Funcionalidades</SectionTag>
          <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', maxWidth:680, margin:'8px auto 0' }}>
            Todo lo que tu urbanización necesita para operar mejor
          </h2>
        </div>
        {/* Tab bar */}
        <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:36, justifyContent:'center' }}>
          {modules.map((m, i) => <ModuleTabBtn key={m.id} label={m.label} icon={m.icon} active={active===i} onClick={() => setActive(i)} />)}
        </div>
        {/* Content */}
        <div style={{ background:'#F4F5F9', borderRadius:16, padding: isMobile ? '28px 20px' : '48px', border:'1px solid #E6E6E6', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 56 }}>
          <div>
            <h3 style={{ fontSize:'clamp(20px, 2.5vw, 28px)', fontWeight:800, color:'#1A1A2E', marginBottom:16, lineHeight:1.2, letterSpacing:'-0.02em' }}>{mod.title}</h3>
            <p style={{ fontSize:15, color:'#6B7A99', lineHeight:1.72, marginBottom:28 }}>{mod.desc}</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10, marginBottom:32 }}>
              {mod.features.map(f => (
                <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                  <div style={{ width:20, height:20, background:'#005DEB', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                    <Ico n="check" sz={10} c="#fff" sw={3} />
                  </div>
                  <span style={{ fontSize:14, color:'#1A1A2E', lineHeight:1.55 }}>{f}</span>
                </li>
              ))}
            </ul>
            <BtnPrimary href="#contacto">{mod.cta}</BtnPrimary>
          </div>
          <div style={{ display:'flex', alignItems:'flex-start' }}>
            {MOCKUPS[mod.id] || <FinanceMockup />}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   BEFORE / AFTER SECTION
   ══════════════════════════════ */
const BeforeAfterSection = () => {
  const { w } = useWindowSize();
  const isMobile = w < 768;
  const befores = ['Visitas registradas en cuadernos','Pagos sin trazabilidad ni historial','Quejas perdidas en WhatsApp','Mantenimientos sin responsable','Reservas coordinadas por teléfono','Comunicación fragmentada en chats'];
  const afters  = ['Pre-visitas digitales y trazables','Seguimiento financiero por unidad','Gestión centralizada de solicitudes','Tareas asignadas con seguimiento','Reservas desde la app en segundos','Notificaciones directas y automáticas'];

  return (
    <section style={{ padding:'96px 0', background:'#002B6B', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-200, right:-200, width:500, height:500, background:'radial-gradient(circle, rgba(41,217,223,0.08) 0%, transparent 70%)', pointerEvents:'none' }}></div>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <SectionTag light>Transformación</SectionTag>
          <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#fff', maxWidth:640, margin:'8px auto 16px' }}>
            Antes vs. después de usar SGR
          </h2>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.55)', maxWidth:520, margin:'0 auto', lineHeight:1.65 }}>
            La diferencia entre una comunidad con procesos manuales y una digitalizada con SGR es visible desde el primer día.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr', gap: isMobile ? 24 : 0, alignItems:'stretch' }}>
          {/* Antes */}
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:16, padding:'32px 28px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <div style={{ width:32, height:32, background:'rgba(239,68,68,0.2)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Ico n="x" sz={16} c="#EF4444" sw={2.5} />
              </div>
              <h3 style={{ fontSize:18, fontWeight:700, color:'rgba(255,255,255,0.5)' }}>Antes</h3>
            </div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
              {befores.map(b => (
                <li key={b} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                  <div style={{ width:18, height:18, background:'rgba(239,68,68,0.15)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                    <Ico n="x" sz={9} c="#EF4444" sw={3} />
                  </div>
                  <span style={{ fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Divider */}
          {!isMobile && (
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 32px', gap:8 }}>
              <div style={{ width:1, flex:1, background:'rgba(255,255,255,0.12)' }}></div>
              <div style={{ width:48, height:48, background:'linear-gradient(135deg,#005DEB,#29D9DF)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Ico n="arrow_r" sz={20} c="#fff" sw={2.5} />
              </div>
              <div style={{ width:1, flex:1, background:'rgba(255,255,255,0.12)' }}></div>
            </div>
          )}
          {/* Después */}
          <div style={{ background:'rgba(0,93,235,0.12)', border:'1px solid rgba(0,93,235,0.3)', borderRadius:16, padding:'32px 28px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <div style={{ width:32, height:32, background:'rgba(41,217,223,0.2)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Ico n="check" sz={16} c="#29D9DF" sw={2.5} />
              </div>
              <h3 style={{ fontSize:18, fontWeight:700, color:'#29D9DF' }}>Con SGR</h3>
            </div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
              {afters.map(a => (
                <li key={a} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                  <div style={{ width:18, height:18, background:'rgba(41,217,223,0.2)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                    <Ico n="check" sz={9} c="#29D9DF" sw={3} />
                  </div>
                  <span style={{ fontSize:14, color:'rgba(255,255,255,0.82)', lineHeight:1.5 }}>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ textAlign:'center', marginTop:48 }}>
          <BtnPrimary href="#contacto" size="lg">Agenda un demo gratis</BtnPrimary>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   ROLES SECTION
   ══════════════════════════════ */
const RolesSection = () => {
  const [active, setActive] = React.useState(0);
  const { w } = useWindowSize();
  const isMobile = w < 768;

  const roles = [
    { id:'admin',    label:'Administrador',  icon:'building',
      promise:'Menos carga operativa, más control sobre la gestión diaria.',
      features:['Panel de indicadores en tiempo real','Gestión de residencias, edificios y unidades','Control de proveedores y técnicos','Organización de juntas y comités','Gestión de quejas y anuncios'],
      cta:'Quiero administrar mejor' },
    { id:'residente',label:'Residente',       icon:'user',
      promise:'Más comodidad para vivir y participar en tu comunidad.',
      features:['Reserva de instalaciones desde la app','Registro de pre-visitas para invitados','Pago de alícuotas y seguimiento','Botón de pánico para emergencias','Consultas y comunicación directa'],
      cta:'Quiero una comunidad más cómoda' },
    { id:'guardia',  label:'Guardia',         icon:'shield',
      promise:'Control más claro de ingresos y alertas.',
      features:['Registro digital de visitantes','Verificación de pre-visitas','Puntos de control operativos','Control de estacionamientos nocturnos','Activación de alertas de emergencia'],
      cta:'Quiero mejorar la seguridad' },
    { id:'tecnico',  label:'Técnico',         icon:'tool',
      promise:'Tareas más ordenadas y reportes claros.',
      features:['Recepción de trabajos asignados','Seguimiento de trabajos activos','Generación de reportes de cierre','Historial de mantenimientos realizados','Comunicación con administración'],
      cta:'Quiero ordenar mantenimientos' },
    { id:'comite',   label:'Comité',          icon:'users',
      promise:'Más información para tomar mejores decisiones.',
      features:['Acceso a reportes y estadísticas','Seguimiento de quejas y solicitudes','Gestión de reuniones y actas','Visibilidad sobre operación comunitaria','Participación en decisiones informadas'],
      cta:'Quiero más transparencia' },
  ];

  const role = roles[active];

  return (
    <section id="soluciones" style={{ padding:'96px 0', background:'#F4F5F9' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <SectionTag>Soluciones por rol</SectionTag>
          <h2 style={{ fontSize:'clamp(26px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', maxWidth:640, margin:'8px auto 0' }}>
            Cada persona conectada con lo que necesita
          </h2>
        </div>
        {/* Tabs */}
        <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:36, justifyContent:'center' }}>
          {roles.map((r, i) => (
            <ModuleTabBtn key={r.id} label={r.label} icon={r.icon} active={active===i} onClick={() => setActive(i)} />
          ))}
        </div>
        {/* Role content */}
        <div style={{ background:'#fff', borderRadius:16, padding: isMobile ? '28px 20px' : '48px', boxShadow:'0 2px 16px rgba(0,43,107,0.06)', border:'1px solid #E6E6E6', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 56 }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(0,93,235,0.08)', borderRadius:8, padding:'8px 14px', marginBottom:20 }}>
              <Ico n={role.icon} sz={18} c="#005DEB" />
              <span style={{ fontSize:14, fontWeight:700, color:'#005DEB' }}>{role.label}</span>
            </div>
            <p style={{ fontSize:18, fontWeight:700, color:'#1A1A2E', lineHeight:1.4, marginBottom:24 }}>{role.promise}</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10, marginBottom:32 }}>
              {role.features.map(f => (
                <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                  <div style={{ width:20, height:20, background:'rgba(0,93,235,0.1)', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                    <Ico n="check" sz={11} c="#005DEB" sw={2.5} />
                  </div>
                  <span style={{ fontSize:14, color:'#1A1A2E', lineHeight:1.55 }}>{f}</span>
                </li>
              ))}
            </ul>
            <BtnPrimary href="#contacto">{role.cta}</BtnPrimary>
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
            {MOCKUPS[role.id] || <AdminMockup />}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   FEATURE MODULE (reusable)
   ══════════════════════════════ */
const FeatureModule = ({ id, tag, title, desc, features, MockupComp, reversed=false, dark=false }) => {
  const { w } = useWindowSize();
  const isMobile = w < 900;
  return (
    <section id={id} style={{ padding:'96px 0', background: dark ? '#F4F5F9' : '#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'flex', gap:64, alignItems:'center', flexDirection: isMobile ? 'column' : (reversed ? 'row-reverse' : 'row') }}>
          <div style={{ flex:1 }}>
            <SectionTag>{tag}</SectionTag>
            <h2 style={{ fontSize:'clamp(24px, 3vw, 38px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.2, color:'#1A1A2E', marginBottom:18, marginTop:8 }}>{title}</h2>
            <p style={{ fontSize:16, color:'#6B7A99', lineHeight:1.72, marginBottom:32 }}>{desc}</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10, marginBottom:40 }}>
              {features.map(f => (
                <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                  <div style={{ width:22, height:22, background:'rgba(0,93,235,0.1)', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <Ico n="check" sz={12} c="#005DEB" sw={2.5} />
                  </div>
                  <span style={{ fontSize:15, color:'#1A1A2E', lineHeight:1.6 }}>{f}</span>
                </li>
              ))}
            </ul>
            <BtnPrimary href="#contacto">Solicitar demo</BtnPrimary>
          </div>
          <div style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'flex-start' }}>
            <MockupComp />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════
   SECURITY SECTION
   ══════════════════════════════ */
const SecuritySection = () => (
  <FeatureModule
    id="seguridad"
    tag="Seguridad y accesos"
    title="¿Sabes realmente quién entra a tu urbanización?"
    desc="Con SGR, el control de visitas deja de depender de cuadernos, llamadas y mensajes perdidos. Tu comunidad obtiene más trazabilidad y mejor respuesta operativa en cada ingreso."
    features={['Registro digital de visitantes con datos completos','Pre-visitas registradas por residentes desde la app','Puntos de control con acceso para guardias','Monitoreo de estacionamientos nocturnos','Alertas de pánico para residentes y personal','Código TAG vehicular en planes avanzados']}
    MockupComp={SecurityMockup}
    reversed={false}
  />
);

/* ══════════════════════════════
   FINANCE SECTION
   ══════════════════════════════ */
const FinanceSection = () => (
  <FeatureModule
    id="finanzas"
    tag="Pagos y alícuotas"
    title="Más claridad financiera para tu comunidad"
    desc="SGR facilita el seguimiento de pagos, alícuotas y cuentas pendientes con mayor transparencia para administradores y residentes. Menos tiempo persiguiendo cobros, más tiempo gestionando."
    features={['Gestión centralizada de alícuotas y pagos','Historial financiero completo por unidad','Control de cuentas pendientes y vencidas','Apoyo a procesos de cobro y facturación','Estados de cuenta claros y exportables','Notificaciones automáticas de vencimientos']}
    MockupComp={FinanceMockup}
    reversed={true}
    dark={true}
  />
);

/* ── EXPORTS ── */
Object.assign(window, {
  ModulesSection, BeforeAfterSection, RolesSection, SecuritySection, FinanceSection,
  MaintenanceMockup, ReservationsMockup, CommsMockup, FeatureModule,
});
