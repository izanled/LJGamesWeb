// LJ Games landing — Components
// Header, Hero, Marquee, Game showcases, About, Coming Next, Devlog, Footer
// Bilingual via the `lang` prop (KO | EN).

// ────────────────────────────────────────────────────────────────
// HEADER
// ────────────────────────────────────────────────────────────────
function Header({ lang, onLangChange, logoVariant }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navItems = lang === 'KO'
    ? [['games', '게임'], ['studio', '스튜디오'], ['devlog', '개발 일지']]
    : [['games', 'Games'], ['studio', 'Studio'], ['devlog', 'Devlog']];

  return (
    <header className="lj-header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 64,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      background: scrolled ? 'rgba(253,248,236,0.94)' : 'var(--bg)',
      backdropFilter: scrolled ? 'blur(6px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-ink)' : '1px solid transparent',
      transition: 'background 160ms, border-color 160ms',
    }}>
      <a href="#top" style={{ display: 'inline-flex', alignItems: 'center' }}>
        <Logo variant={logoVariant} size={36} />
      </a>
      <nav className="lj-nav" style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
        {navItems.map(([k, label]) => (
          <a key={k} href={'#' + k} style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--fg-muted)',
            padding: '8px 12px',
            borderBottom: '2px solid transparent',
            transition: 'color 120ms, border-color 120ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.borderBottomColor = 'var(--dc-red)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-muted)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
          >{label}</a>
        ))}
      </nav>
      <div className="lj-header-actions" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          onClick={() => onLangChange(lang === 'KO' ? 'EN' : 'KO')}
          className="btn sm ghost"
          style={{ borderColor: 'var(--border-ink)' }}
        >{lang === 'KO' ? 'EN' : 'KO'}</button>
        <a href="#games" className="btn primary sm">{lang === 'KO' ? '지금 플레이' : 'Play now'}</a>
      </div>
    </header>
  );
}
window.Header = Header;

// ────────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────────
function Hero({ lang }) {
  const wrapRef = React.useRef(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: x * 8, y: y * 8 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  const t = lang === 'KO' ? {
    kicker: '엘제이게임즈 · 인디 게임 스튜디오',
    headline: ['픽셀로 그린 세계,', '오래 머무는 즐거움.'],
    sub: '방치형 RPG부터 타워 디펜스, 그리고 곧 시작될 캐주얼 게임까지. 시간을 존중하는 한 땀 한 땀 다듬은 게임을 만듭니다.',
    primary: '게임 둘러보기',
    secondary: '스튜디오 이야기 →',
    chip1: '한양 온라인 · 오픈 베타',
    chip2: 'Gem TD · 서비스 중',
    chip3: '캐주얼 신작 · 2026 예정',
  } : {
    kicker: 'LJ GAMES · Indie game studio',
    headline: ['Pixel-crafted worlds,', 'made to be lived in.'],
    sub: 'From idle RPGs to tower defense, with a casual title up next. Hand-tuned games that respect the player\u2019s time — built one pixel at a time.',
    primary: 'See our games',
    secondary: 'About the studio →',
    chip1: 'Hanyang Online · Open beta',
    chip2: 'Gem TD · Live',
    chip3: 'Casual title · Coming 2026',
  };

  return (
    <section id="top" ref={wrapRef} className="section hanji-bg hero-section" style={{
      paddingTop: 64, paddingBottom: 80, position: 'relative', overflow: 'hidden',
    }}>
      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
        gap: 56,
        alignItems: 'center',
      }}>
        {/* LEFT */}
        <div>
          <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 20 }}>◆ {t.kicker}</div>
          <h1 className="hero-headline" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.04,
            letterSpacing: '-0.01em',
            margin: 0,
            color: 'var(--fg)',
            textWrap: 'balance',
            whiteSpace: 'nowrap',
          }}>
            {t.headline[0]}<br/>
            <span style={{ color: 'var(--dc-red-deep)' }}>{t.headline[1]}</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 18,
            lineHeight: 1.6,
            color: 'var(--fg-muted)',
            marginTop: 24,
            maxWidth: 540,
            textWrap: 'pretty',
          }}>{t.sub}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#games" className="btn primary lg">{t.primary} →</a>
            <a href="#studio" className="btn ghost lg" style={{ borderColor: 'var(--border-ink)' }}>{t.secondary}</a>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 32, flexWrap: 'wrap' }}>
            <span className="gem-chip" style={{ '--gem-color': 'var(--dc-red)' }}>{t.chip1}</span>
            <span className="gem-chip" style={{ '--gem-color': 'var(--gem-amethyst)' }}>{t.chip2}</span>
            <span className="gem-chip" style={{ '--gem-color': 'var(--gem-topaz)' }}>{t.chip3}</span>
          </div>
        </div>

        {/* RIGHT — stacked screenshot collage */}
        <div className="hero-art" style={{ position: 'relative', height: 540, perspective: 1200 }}>
          <HeroCollage tilt={tilt} lang={lang} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

function HeroCollage({ tilt, lang }) {
  // Three stacked frames showing both games — parallax via tilt
  const base = (depth) => ({
    transform: `rotateY(${tilt.x * depth}deg) rotateX(${-tilt.y * depth}deg) translateZ(0)`,
    transformStyle: 'preserve-3d',
    transition: 'transform 220ms cubic-bezier(.4,0,.2,1)',
  });
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Back frame — Hanyang scene wide */}
      <div className="float-2 hero-collage-back" style={{
        position: 'absolute', left: 0, top: 24, width: '78%', aspectRatio: '16/9',
        ...base(0.6),
      }}>
        <div className="shot-frame" style={{ width: '100%', height: '100%', borderColor: 'var(--border-ink)' }}>
          <img src="screenshots/hanyang-2.jpg" alt="Hanyang Online" />
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            display: 'flex', gap: 6, flexWrap: 'wrap',
          }}>
            <span className="tag solid-red">◆ HANYANG ONLINE</span>
            <span className="tag solid-ink">IDLE RPG</span>
          </div>
        </div>
      </div>

      {/* Middle frame — Gem TD cover */}
      <div className="float-1 hero-collage-middle" style={{
        position: 'absolute', right: 0, top: 180, width: '70%', aspectRatio: '16/9',
        ...base(0.9),
      }}>
        <div className="shot-frame" style={{ width: '100%', height: '100%' }}>
          <img src="screenshots/gemtd-cover.jpg" alt="Gem TD" />
          <div style={{ position: 'absolute', bottom: 10, left: 10, display: 'flex', gap: 6 }}>
            <span className="tag solid-ink" style={{ color: 'var(--gem-amethyst)', borderColor: 'var(--gem-amethyst)' }}>◆ GEM TD</span>
            <span className="tag solid-ink">TOWER DEFENSE</span>
          </div>
        </div>
      </div>

      {/* Front-right tiny phone frame — Gem TD vertical screen */}
      <div className="float-2 hero-collage-phone" style={{
        position: 'absolute', right: 24, top: -10,
        ...base(1.3),
      }}>
        <div className="phone-frame">
          <img src="screenshots/gemtd-skill.jpg" alt="Gem TD skill"/>
        </div>
      </div>

      {/* Hanyang detail — bottom left small */}
      <div className="float-1 hero-collage-detail" style={{
        position: 'absolute', left: -18, bottom: 0, width: 200, aspectRatio: '16/9',
        ...base(1.2),
      }}>
        <div className="shot-frame" style={{ width: '100%', height: '100%' }}>
          <img src="screenshots/hanyang-6.jpg" alt="Hanyang detail" />
        </div>
      </div>

      {/* Pixel sparkles */}
      <Sparkles />
    </div>
  );
}
window.HeroCollage = HeroCollage;

function Sparkles() {
  const positions = [
    { left: '32%', top: '4%', size: 6, color: 'var(--dc-yellow)' },
    { left: '6%',  top: '40%', size: 4, color: 'var(--gem-emerald)' },
    { left: '92%', top: '60%', size: 5, color: 'var(--gem-ruby)' },
    { left: '50%', top: '92%', size: 4, color: 'var(--gem-sapphire)' },
  ];
  return positions.map((p, i) => (
    <div key={i} className="blink" style={{
      position: 'absolute',
      left: p.left, top: p.top,
      width: p.size, height: p.size,
      background: p.color, border: '1px solid var(--border-ink)',
      animationDelay: (i * 0.3) + 's',
      pointerEvents: 'none',
    }}/>
  ));
}
window.Sparkles = Sparkles;

// ────────────────────────────────────────────────────────────────
// MARQUEE — running ticker with brand statements
// ────────────────────────────────────────────────────────────────
function Marquee({ lang }) {
  const items = lang === 'KO' ? [
    '◆ 인디 게임 스튜디오',
    '한 땀 한 땀 다듬은 픽셀 아트',
    '플레이어의 시간을 존중하는 게임',
    '한양 온라인 · 오픈 베타 진행 중',
    'Gem TD · 서비스 중',
    '캐주얼 신작 · 2026 예정',
    '정성껏 다듬은 게임',
  ] : [
    '◆ Indie game studio',
    'Hand-tuned pixel art',
    'Games that respect the player\u2019s time',
    'Hanyang Online · Open beta',
    'Gem TD · Live',
    'Casual title coming 2026',
    'Carefully crafted games',
  ];
  // duplicate for seamless loop
  const doubled = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span key={i}><span style={{ color: 'var(--gem-topaz)' }}>◇</span> {t}</span>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;

// ────────────────────────────────────────────────────────────────
// STATS — small horizontal stat strip
// ────────────────────────────────────────────────────────────────
function StatsStrip({ lang }) {
  const stats = lang === 'KO' ? [
    { num: '2', label: '출시작' },
    { num: '1', label: '개발 중' },
    { num: '2026', label: '설립' },
    { num: 'PIXEL', label: '스타일' },
  ] : [
    { num: '2', label: 'Shipped' },
    { num: '1', label: 'In dev' },
    { num: '2026', label: 'Founded' },
    { num: 'PIXEL', label: 'Style' },
  ];
  return (
    <section className="section" style={{ paddingTop: 56, paddingBottom: 56, borderBottom: '1px solid var(--border)' }}>
      <div className="container stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">◇ {s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.StatsStrip = StatsStrip;
