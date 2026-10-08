// LJ Games landing — Coming Next, About / Philosophy, Devlog, Footer

// ────────────────────────────────────────────────────────────────
// COMING NEXT — 개발 중인 신규 프로젝트 (발바닥 원정대, 웹 게임 플랫폼)
// ────────────────────────────────────────────────────────────────
function ComingNext({ lang }) {
  const t = lang === 'KO' ? {
    eyebrow: '◆ COMING NEXT',
    title: '다음 프로젝트',
    sub: '지금 만들고 있는 두 가지 이야기입니다.',
    cards: [
      {
        status: '개발 중',
        color: 'var(--gem-emerald)',
        name: '발바닥 원정대',
        sub: 'Paw Raiders',
        body: '직접 조작해서 보스를 쓰러뜨리는 보스 레이드 게임입니다. 자세한 소식은 개발이 진행되는 대로 이곳과 공식 디스코드에서 전해 드리겠습니다.',
        tags: ['보스 레이드', '직접 조작', '개발 중'],
      },
      {
        status: '기획 단계',
        color: 'var(--dc-blue)',
        name: '웹 게임 플랫폼',
        sub: 'Web Game Platform',
        body: '웹 기반 게임에 광고와 결제를 연결해서 제공하는 플랫폼을 개발할 계획입니다. 아직 개념을 정리하는 단계이며, 구체적인 내용은 확정되는 대로 공개하겠습니다.',
        tags: ['웹 게임', '광고 연동', '결제 연동', '개념 단계'],
      },
    ],
  } : {
    eyebrow: '◆ COMING NEXT',
    title: 'What’s next',
    sub: 'Two things we are working on right now.',
    cards: [
      {
        status: 'IN DEVELOPMENT',
        color: 'var(--gem-emerald)',
        name: 'Paw Raiders',
        sub: '발바닥 원정대',
        body: 'A boss raid game where you take control yourself and bring the bosses down. We will share details here and on our Discord as development moves forward.',
        tags: ['Boss raid', 'Hands-on control', 'In development'],
      },
      {
        status: 'CONCEPT STAGE',
        color: 'var(--dc-blue)',
        name: 'Web Game Platform',
        sub: '웹 게임 플랫폼',
        body: 'We plan to build a platform that serves web-based games with ads and payments built in. It is still at the concept stage, and we will share specifics once they are settled.',
        tags: ['Web games', 'Ads', 'Payments', 'Concept'],
      },
    ],
  };

  return (
    <section className="section hanji-bg" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="kicker" style={{ color: 'var(--gem-emerald)' }}>{t.eyebrow}</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 4.4vw, 56px)',
          lineHeight: 1.05,
          margin: '16px 0 12px',
          color: 'var(--fg)',
          letterSpacing: '-0.01em',
        }}>{t.title}</h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)', margin: '0 0 32px' }}>{t.sub}</p>

        <div className="coming-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 32,
        }}>
          {t.cards.map((c, i) => (
            <div key={i} className="pixel-card" style={{
              background: 'var(--hanji-100)',
              position: 'relative',
              overflow: 'hidden',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}/>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="blink" style={{ width: 8, height: 8, background: c.color, border: '1px solid var(--border-ink)' }}/>
                <span style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  color: 'var(--fg-muted)',
                }}>◇ {c.status}</span>
              </div>
              <div style={{ position: 'relative' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3vw, 38px)',
                  lineHeight: 1.1,
                  margin: 0,
                  color: 'var(--fg)',
                }}>{c.name}</h3>
                <div style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 12,
                  letterSpacing: '0.12em',
                  color: 'var(--fg-muted)',
                  marginTop: 6,
                }}>{c.sub}</div>
              </div>
              <p style={{ position: 'relative', fontFamily: 'var(--font-ui)', fontSize: 16, lineHeight: 1.65, color: 'var(--fg-muted)', margin: 0 }}>{c.body}</p>
              <div style={{ position: 'relative', display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 6 }}>
                {c.tags.map((tag, j) => (
                  <span key={j} className="tag">◇ {tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ComingNext = ComingNext;

// ────────────────────────────────────────────────────────────────
// ABOUT / PHILOSOPHY
// ────────────────────────────────────────────────────────────────
function AboutSection({ lang }) {
  const t = lang === 'KO' ? {
    eyebrow: '◆ STUDIO · 우리의 신념',
    quote: ['작게 만들어도', '제대로 만든 게임은', '분명히 다르다.'],
    body: '엘제이게임즈는 작지만 밀도 있게 움직이는 인디 스튜디오입니다. 회의보다 코드, 마케팅보다 만듦새. 화려한 연출보다 플레이어가 직접 만드는 즐거움을 앞세웁니다. 우리가 만든 게임을 우리가 가장 오래 플레이합니다.',
    pillars: [
      { title: '픽셀 한 점까지', body: '도트 한 점, 효과음 한 마디까지 직접 다듬습니다. 빠른 게 아니라 제대로.' },
      { title: '한 판만 더', body: '익숙한 장르 속에서 "한 판만 더"의 깊이를 찾습니다. 시스템이 곧 재미.' },
      { title: '플레이어의 시간', body: '플레이어의 시간을 존중합니다. 강제하지 않고, 돌아오고 싶은 게임을 만듭니다.' },
    ],
  } : {
    eyebrow: '◆ STUDIO · What we believe',
    quote: ['Small teams can still', 'make games that', 'feel properly made.'],
    body: 'LJ Games is a compact indie studio. Code over meetings, craft over marketing. Player-driven joy ahead of surface spectacle. The games we make are the games we play the longest.',
    pillars: [
      { title: 'Down to the pixel', body: 'Every dot, every sound effect — tuned by hand. Not fast. Properly.' },
      { title: 'Just one more run', body: 'We look for depth inside familiar genres. The system is the fun.' },
      { title: 'The player\u2019s time', body: 'We respect your time. Games that pull, not push.' },
    ],
  };

  return (
    <section id="studio" className="section" style={{ background: 'var(--hanji-900)', color: 'var(--hanji-50)', position: 'relative', overflow: 'hidden' }}>
      {/* Soft hanji texture in white */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('design-system/assets/hanji-texture.svg')",
        backgroundSize: 320,
        opacity: 0.04,
        pointerEvents: 'none',
      }}/>
      <div className="container" style={{ position: 'relative' }}>
        <div className="kicker" style={{ color: 'var(--gem-topaz)' }}>{t.eyebrow}</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 72px)',
          lineHeight: 1.05,
          color: 'var(--hanji-50)',
          margin: '24px 0 32px',
          letterSpacing: '-0.01em',
          textWrap: 'balance',
        }}>
          {t.quote[0]}<br/>
          <span style={{ color: 'var(--gem-topaz)' }}>{t.quote[1]}</span><br/>
          {t.quote[2]}
        </h2>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 18,
          lineHeight: 1.65,
          color: 'var(--hanji-300)',
          maxWidth: 700,
          margin: '0 0 56px',
        }}>{t.body}</p>

        {/* Pillars */}
        <div className="about-pillars" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {t.pillars.map((p, i) => (
            <div key={i} style={{
              padding: 28,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid #3a3220',
              borderTop: `4px solid ${['var(--dc-red)', 'var(--dc-yellow)', 'var(--dc-blue)'][i]}`,
            }}>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 11,
                letterSpacing: '0.16em',
                color: ['var(--dc-red)', 'var(--dc-yellow)', 'var(--dc-blue)'][i],
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>0{i+1}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                color: 'var(--hanji-50)',
                marginBottom: 10,
                lineHeight: 1.15,
              }}>{p.title}</div>
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'var(--hanji-300)',
              }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.AboutSection = AboutSection;

// ────────────────────────────────────────────────────────────────
// DEVLOG — recent posts
// ────────────────────────────────────────────────────────────────
function DevlogSection({ lang }) {
  const t = lang === 'KO' ? {
    eyebrow: '◆ DEVLOG · 개발 일지',
    title: '최근 소식',
    all: '전체 보기 →',
    posts: [
      { date: '2026 · 05 · 12', tag: '패치 1.4', tagColor: 'var(--dc-red)',     title: '한양 온라인 — 보스 레이드 재설계', body: '예고된 패턴, 까다로워진 로테이션, 그리고 레이드 전용 신규 장비. 이번 주 적용 예정.' },
      { date: '2026 · 04 · 28', tag: '개발 일지 011', tagColor: 'var(--dc-blue)', title: 'Gem TD 연구 트리, 312에서 88로', body: '노드를 줄였더니 메타가 더 깊어진 이유. 3주간의 회의, 화이트보드 한 장, 수백 개의 포스트잇.' },
      { date: '2026 · 10 · 09', tag: '공지', tagColor: 'var(--gem-emerald)',     title: '신규 프로젝트 소식 — 발바닥 원정대, 웹 게임 플랫폼', body: '발바닥 원정대를 개발 중이며, 광고와 결제를 연결한 웹 게임 플랫폼도 기획하고 있습니다.' },
    ],
  } : {
    eyebrow: '◆ DEVLOG · Recent posts',
    title: 'Recent updates',
    all: 'All posts →',
    posts: [
      { date: '2026 · 05 · 12', tag: 'PATCH 1.4', tagColor: 'var(--dc-red)',     title: 'Hanyang Online — boss raid rework', body: 'Telegraphed patterns, harder rotations, and a new raid-only gear set. Live this week.' },
      { date: '2026 · 04 · 28', tag: 'DEVLOG 011', tagColor: 'var(--dc-blue)',   title: 'Gem TD research tree, 312 → 88', body: 'Why fewer nodes made the meta deeper, not shallower. Three weeks of cuts, one whiteboard, hundreds of sticky notes.' },
      { date: '2026 · 10 · 09', tag: 'ANNOUNCE', tagColor: 'var(--gem-emerald)', title: 'New projects — Paw Raiders and a web game platform', body: 'Paw Raiders is in development, and we are also planning a web game platform with ads and payments built in.' },
    ],
  };

  return (
    <section id="devlog" className="section" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="devlog-header" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <div className="kicker" style={{ color: 'var(--accent)' }}>{t.eyebrow}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, margin: '12px 0 0', color: 'var(--fg)' }}>{t.title}</h2>
          </div>
          <a className="kicker" style={{ color: 'var(--link)', cursor: 'pointer' }}>{t.all}</a>
        </div>

        <div className="devlog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {t.posts.map((p, i) => (
            <a key={i} className="pixel-card" style={{
              padding: 24,
              display: 'flex', flexDirection: 'column', gap: 12,
              cursor: 'pointer',
              minHeight: 220,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="tag" style={{ background: p.tagColor, color: '#fff', borderColor: 'var(--border-ink)' }}>{p.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-subtle)' }}>{p.date}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'pretty' }}>{p.title}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-muted)', textWrap: 'pretty' }}>{p.body}</div>
              <div style={{ marginTop: 'auto', fontFamily: 'var(--font-pixel)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--link)', textTransform: 'uppercase' }}>{lang === 'KO' ? '계속 읽기 →' : 'Read on →'}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.DevlogSection = DevlogSection;

// ────────────────────────────────────────────────────────────────
// CONTACT BLOCK + FOOTER
// ────────────────────────────────────────────────────────────────
function FooterSection({ lang, logoVariant }) {
  const hanyangPlayUrl = 'https://play.google.com/store/apps/details?id=net.nekoland.game112222&hl=ko';
  const gemTdPlayUrl = 'https://play.google.com/store/apps/details?id=com.gemtowerdefense&hl=ko';
  const emailUrl = 'mailto:contact@lj-games.com';
  const discordUrl = 'https://discord.com/invite/7ua6Vccs';
  const t = lang === 'KO' ? {
    bigQ: '같이 만들어 볼까요?',
    bigSub: '협업, 퍼블리싱, 미디어 문의는 아래로. 보통 영업일 기준 2일 안에 답장 드려요.',
    discord: '디스코드',
    rss: 'RSS 구독',
    cols: [
      { h: '게임', items: [
        { label: '한양 온라인', href: hanyangPlayUrl, external: true },
        { label: 'Gem TD', href: gemTdPlayUrl, external: true },
      ] },
      { h: '스튜디오', items: [
        { label: '소개', href: '#studio' },
      ] },
      { h: '연락', items: [
        { label: 'E-mail', href: emailUrl },
        { label: '디스코드', href: discordUrl, external: true },
      ] },
    ],
    copy: '© 2026 엘제이게임즈. 모든 권리 보유.',
    sub: '정성껏 다듬은 픽셀 게임을 만듭니다.',
  } : {
    bigQ: 'Let\u2019s build something.',
    bigSub: 'Collaboration, publishing, press — drop us a line. Usual response time is 2 business days.',
    discord: 'Discord',
    rss: 'RSS feed',
    cols: [
      { h: 'Games', items: [
        { label: 'Hanyang Online', href: hanyangPlayUrl, external: true },
        { label: 'Gem TD', href: gemTdPlayUrl, external: true },
      ] },
      { h: 'Studio', items: [
        { label: 'About', href: '#studio' },
      ] },
      { h: 'Contact', items: [
        { label: 'E-mail', href: emailUrl },
        { label: 'Discord', href: discordUrl, external: true },
      ] },
    ],
    copy: '© 2026 LJ Games. All rights reserved.',
    sub: 'Carefully crafted pixel games.',
  };

  return (
    <>
      {/* Contact CTA */}
      <section className="section" style={{ background: 'var(--dc-red)', color: '#fff' }}>
        <div className="container contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: 48,
          alignItems: 'center',
        }}>
          <div>
            <div className="kicker" style={{ color: 'var(--dc-yellow)' }}>◆ {lang === 'KO' ? '연락처' : 'CONTACT'}</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.0,
              color: '#fff',
              margin: '16px 0 16px',
              letterSpacing: '-0.01em',
            }}>{t.bigQ}</h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, lineHeight: 1.6, color: '#ffe6e2', maxWidth: 540, margin: 0 }}>{t.bigSub}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a className="btn ink lg" style={{ width: '100%', justifyContent: 'space-between', cursor: 'pointer' }} href={emailUrl}>
              <span>▸ E-mail</span>
              <span style={{ color: 'var(--gem-topaz)' }}>→</span>
            </a>
            <a className="btn lg" style={{ background: '#5865F2', color: '#fff', boxShadow: 'inset 0 -3px 0 0 #3c47b8', width: '100%', justifyContent: 'space-between', cursor: 'pointer' }} href={discordUrl} target="_blank" rel="noreferrer">
              <span>▸ {t.discord}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer proper */}
      <footer style={{ background: 'var(--hanji-900)', color: 'var(--hanji-50)', borderTop: '1px solid var(--border-ink)' }}>
        <div className="dancheong-divider"/>
        <div className="container footer-grid" style={{ padding: '64px 48px 24px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <Logo variant={logoVariant} size={44} color="var(--hanji-50)" subtle="var(--hanji-300)" />
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--hanji-300)', lineHeight: 1.6, marginTop: 18, maxWidth: 280 }}>{t.sub}</p>
          </div>
          {t.cols.map(c => (
            <div key={c.h}>
              <h4 style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--gem-topaz)', textTransform: 'uppercase', margin: '4px 0 16px' }}>◇ {c.h}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(it => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      target={it.external ? '_blank' : undefined}
                      rel={it.external ? 'noreferrer' : undefined}
                      style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--hanji-200)', cursor: 'pointer' }}
                    >{it.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-meta" style={{ padding: '20px 48px', borderTop: '1px solid #2a2316', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--hanji-400)' }}>
          <span>{t.copy}</span>
          <span>v1.0 · {lang === 'KO' ? '엘제이게임즈 홈페이지' : 'ljgames.com'}</span>
        </div>
      </footer>

    </>
  );
}
window.FooterSection = FooterSection;
