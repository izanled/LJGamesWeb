// LJ Games landing — Coming Next, About / Philosophy, Devlog, Footer

// ────────────────────────────────────────────────────────────────
// COMING NEXT — casual title teaser
// ────────────────────────────────────────────────────────────────
function ComingNext({ lang }) {
  const t = lang === 'KO' ? {
    eyebrow: '◆ COMING NEXT',
    title: '캐주얼 신작 · 작업 중',
    sub: '한 손으로 즐기는 짧고 깊은 픽셀 게임. 누구나 1분 안에 빠져들고, 한 달 후에도 돌아오게 만드는 그 느낌을 찾고 있어요.',
    placeholder: '비밀 작업실',
    tags: ['픽셀 아트', '한 손 조작', '짧고 깊게', '2026 출시'],
  } : {
    eyebrow: '◆ COMING NEXT',
    title: 'New casual title · in development',
    sub: 'A short-but-deep pixel game you can play one-handed. The kind that pulls you in within a minute — and pulls you back a month later.',
    placeholder: 'Secret workshop',
    tags: ['Pixel art', 'One-hand play', 'Short & deep', '2026 release'],
  };

  return (
    <section className="section hanji-bg" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container coming-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.9fr)',
        gap: 48,
        alignItems: 'center',
      }}>
        <div>
          <div className="kicker" style={{ color: 'var(--gem-emerald)' }}>{t.eyebrow}</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4.4vw, 56px)',
            lineHeight: 1.05,
            margin: '16px 0 16px',
            color: 'var(--fg)',
            letterSpacing: '-0.01em',
          }}>{t.title}</h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)', maxWidth: 500, margin: '0 0 24px' }}>{t.sub}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {t.tags.map((tag, i) => (
              <span key={i} className="tag">◇ {tag}</span>
            ))}
          </div>
        </div>

        {/* Placeholder mock — pixel "in-progress" frame */}
        <div className="pixel-card" style={{
          aspectRatio: '4 / 3',
          background: 'var(--hanji-100)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
        }}>
          {/* dotted bg */}
          <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }}/>
          {/* TBA label */}
          <div style={{
            position: 'relative',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 6vw, 88px)',
            color: 'var(--fg)',
            letterSpacing: '0.02em',
          }}>
            ? ? ?
          </div>
          <div style={{
            position: 'relative',
            fontFamily: 'var(--font-pixel)',
            fontSize: 12,
            letterSpacing: '0.16em',
            color: 'var(--fg-muted)',
            textTransform: 'uppercase',
          }}>◇ {t.placeholder}</div>
          {/* progress bar */}
          <div style={{
            position: 'absolute', bottom: 24, left: 32, right: 32,
            border: '1px solid var(--border-ink)',
            background: 'var(--bg)',
            padding: 3,
          }}>
            <div style={{
              height: 14,
              width: '38%',
              background: 'var(--gem-emerald)',
              boxShadow: 'inset 0 -3px 0 0 #1f7a52',
            }}/>
          </div>
          <div style={{
            position: 'absolute', bottom: 48, left: 32,
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: 'var(--fg-muted)',
          }}>{lang === 'KO' ? '진행도 38% · v0.3' : 'PROGRESS 38% · v0.3'}</div>
          {/* corner pixel sparkles */}
          <div className="blink" style={{ position: 'absolute', top: 16, right: 18, width: 6, height: 6, background: 'var(--gem-topaz)', border: '1px solid var(--border-ink)' }}/>
          <div className="blink" style={{ position: 'absolute', top: 24, left: 22, width: 4, height: 4, background: 'var(--dc-red)', border: '1px solid var(--border-ink)', animationDelay: '0.6s' }}/>
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
      { date: '2026 · 04 · 14', tag: '공지', tagColor: 'var(--gem-emerald)',     title: '캐주얼 신작 — 3분기 클로즈드 테스트', body: '다음 분기, 소규모 클로즈드 테스트를 진행합니다. 모든 피드백을 직접 읽기 위해 천천히 시작합니다.' },
    ],
  } : {
    eyebrow: '◆ DEVLOG · Recent posts',
    title: 'Recent updates',
    all: 'All posts →',
    posts: [
      { date: '2026 · 05 · 12', tag: 'PATCH 1.4', tagColor: 'var(--dc-red)',     title: 'Hanyang Online — boss raid rework', body: 'Telegraphed patterns, harder rotations, and a new raid-only gear set. Live this week.' },
      { date: '2026 · 04 · 28', tag: 'DEVLOG 011', tagColor: 'var(--dc-blue)',   title: 'Gem TD research tree, 312 → 88', body: 'Why fewer nodes made the meta deeper, not shallower. Three weeks of cuts, one whiteboard, hundreds of sticky notes.' },
      { date: '2026 · 04 · 14', tag: 'ANNOUNCE', tagColor: 'var(--gem-emerald)', title: 'Casual title — closed test in Q3', body: 'Next quarter, a small closed test. We\u2019re starting slowly so we can read every piece of feedback.' },
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
  const emailUrl = 'mailto:pungsog.games@gmail.com';
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
