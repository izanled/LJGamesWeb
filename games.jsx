// LJ Games landing — Game showcase sections, About, Coming Next, Devlog, Footer

// ────────────────────────────────────────────────────────────────
// GAME SHOWCASE — HANYANG ONLINE
// ────────────────────────────────────────────────────────────────
function HanyangShowcase({ lang }) {
  const t = lang === 'KO' ? {
    eyebrow: '◆ NOW PLAYING · 출시작',
    title: '한양 온라인',
    subtitle: '조선 무사 키우기',
    tagline: '조선의 수도 한양에서 단 한 명의 무사를 키워라. 수만 가지 조합으로 완성하는 나만의 한양 스타일.',
    genre: '방치형 RPG',
    status: '오픈 베타',
    cta1: '플레이 스토어',
    features: [
      ['수만 가지 조합', '검·활·부채·강화·재능까지, 캐릭터는 온전히 당신의 것.'],
      ['사냥 + 방치 성장', '잠시 떠나도 무사는 자란다. 돌아와서 한계를 돌파하라.'],
      ['손맛 보스 레이드', '예고된 패턴, 정직한 보상. 공략하는 맛이 살아있는 전투.'],
      ['조선 한양 세계관', '단청과 한지로 그린 픽셀 한양. 도성 한복판에서 펼쳐지는 이야기.'],
    ],
  } : {
    eyebrow: '◆ NOW PLAYING · Shipped',
    title: 'Hanyang Online',
    subtitle: 'Raise a Joseon warrior',
    tagline: 'Raise one warrior in the Joseon-era capital. Tens of thousands of combinations — the character is entirely yours.',
    genre: 'IDLE RPG',
    status: 'OPEN BETA',
    cta1: 'Play Store',
    features: [
      ['Tens of thousands of combos', 'Sword, bow, fan, enhancement, talents — your warrior, your way.'],
      ['Active hunt + idle growth', 'Step away and your warrior still grows. Come back to break the ceiling.'],
      ['Hand-felt boss raids', 'Telegraphed patterns, honest rewards. Combat that rewards sharp play.'],
      ['Joseon Hanyang setting', 'Pixel Hanyang painted in dancheong and hanji. A story unfolding in the heart of the old capital.'],
    ],
  };

  return (
    <section id="games" className="game-hero" style={{ background: '#1a1410', color: '#fdf8ec' }}>
      {/* Section eyebrow */}
      <div className="container" style={{ padding: '64px 48px 0' }}>
        <div className="kicker" style={{ color: 'var(--gem-topaz)' }}>{t.eyebrow}</div>
      </div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
        gap: 64,
        padding: '40px 48px 80px',
        alignItems: 'center',
      }}>
        {/* LEFT — copy */}
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="tag solid-green">● {t.status}</span>
            <span className="tag solid-ink" style={{ borderColor: '#5c4e30', color: 'var(--hanji-200)' }}>{t.genre}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 1.0,
            margin: '0 0 8px',
            color: '#fdf8ec',
            letterSpacing: '-0.01em',
          }}>{t.title}</h2>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 18,
            letterSpacing: '0.08em',
            color: 'var(--gem-topaz)',
            marginBottom: 24,
          }}>{t.subtitle}</div>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 17,
            lineHeight: 1.65,
            color: 'var(--hanji-200)',
            maxWidth: 520,
            margin: '0 0 32px',
            textWrap: 'pretty',
          }}>{t.tagline}</p>

          {/* Feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {t.features.map(([title, body], i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid #3a3220',
                padding: 16,
                borderLeft: `3px solid ${['#c8443a','#e2a83a','#2e5a8c','#4a8e6e'][i]}`,
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  color: '#fdf8ec',
                  marginBottom: 6,
                }}>{title}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, lineHeight: 1.5, color: 'var(--hanji-300)' }}>{body}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              className="btn primary lg"
              href="https://play.google.com/store/apps/details?id=net.nekoland.game112222&hl=ko"
              target="_blank"
              rel="noreferrer"
            >▸ {t.cta1}</a>
          </div>
        </div>

        {/* RIGHT — screenshot mosaic */}
        <HanyangMosaic />
      </div>

      {/* Dancheong divider at bottom */}
      <div className="dancheong-divider"/>
    </section>
  );
}
window.HanyangShowcase = HanyangShowcase;

function HanyangMosaic() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gridTemplateRows: 'repeat(3, 110px)',
      gap: 16,
      position: 'relative',
    }}>
      <div className="shot-frame" style={{ gridRow: '1 / span 2', position: 'relative' }}>
        <img src="screenshots/hanyang-2.jpg" alt="Hanyang character roster"/>
      </div>
      <div className="shot-frame" style={{ position: 'relative' }}>
        <img src="screenshots/hanyang-1.jpg" alt="Hanyang battle"/>
      </div>
      <div className="shot-frame" style={{ position: 'relative' }}>
        <img src="screenshots/hanyang-3.jpg" alt="Hanyang growth"/>
      </div>
      <div className="shot-frame" style={{ gridRow: '3', position: 'relative' }}>
        <img src="screenshots/hanyang-4.jpg" alt="Hanyang enhancement"/>
      </div>
      <div className="shot-frame" style={{ gridRow: '3', position: 'relative' }}>
        <img src="screenshots/hanyang-5.jpg" alt="Hanyang boss"/>
      </div>
    </div>
  );
}
window.HanyangMosaic = HanyangMosaic;

// ────────────────────────────────────────────────────────────────
// GAME SHOWCASE — GEM TD
// ────────────────────────────────────────────────────────────────
function GemTDShowcase({ lang }) {
  const t = lang === 'KO' ? {
    eyebrow: '◆ NOW PLAYING · 서비스 중',
    title: 'Gem TD',
    subtitle: '보석의 힘으로 침공을 막아라',
    tagline: '여섯 가지 보석을 연구하고 진화시켜 끝없는 적의 침공을 막아내는 타워 디펜스. 도감, 합성, 전설 보석까지 — 깊이를 좋아하는 플레이어를 위한 게임.',
    genre: '타워 디펜스',
    status: '서비스 중',
    features: [
      ['6종 보석 시스템', '루비·사파이어·에메랄드·토파즈·다이아·아메시스트.'],
      ['보석 진화 / 합성', '레시피로 만드는 전설 보석. 빌드의 정점까지.'],
      ['도감 210종', '몬스터·특성·스킬까지. 모으는 재미는 덤.'],
      ['빠른 전투 템포', '한 판은 짧게, 깊이는 깊게. 한 판만 더 하게 되는 그 느낌.'],
    ],
    cta1: '플레이 스토어',
    gemRow: '여섯 가지 보석',
  } : {
    eyebrow: '◆ NOW PLAYING · Live',
    title: 'Gem TD',
    subtitle: 'Stop the invasion with the power of gems',
    tagline: 'Research and evolve six gem families to hold back relentless invasions. Codex, fusion, legendary gems — a tower defense for players who like the depths.',
    genre: 'TOWER DEFENSE',
    status: 'LIVE',
    features: [
      ['Six gem families', 'Ruby, Sapphire, Emerald, Topaz, Diamond, Amethyst.'],
      ['Evolve & combine', 'Recipes for legendary gems. Build to the meta\u2019s peak.'],
      ['210 codex entries', 'Monsters, traits, skills — collection is half the fun.'],
      ['Fast-paced battles', 'Short runs, deep mastery. The one-more-run game.'],
    ],
    cta1: 'Play Store',
    gemRow: 'Six gem families',
  };

  const gems = [
    { name: 'RUBY',     color: 'var(--gem-ruby)' },
    { name: 'SAPPHIRE', color: 'var(--gem-sapphire)' },
    { name: 'EMERALD',  color: 'var(--gem-emerald)' },
    { name: 'TOPAZ',    color: 'var(--gem-topaz)' },
    { name: 'DIAMOND',  color: 'var(--gem-diamond)' },
    { name: 'AMETHYST', color: 'var(--gem-amethyst)' },
  ];

  return (
    <section className="game-hero scanlines" style={{
      background: 'linear-gradient(180deg, #15110a 0%, #1a1428 60%, #15110a 100%)',
      color: '#fdf8ec',
      borderTop: 'none',
    }}>
      <div className="container" style={{ padding: '64px 48px 0' }}>
        <div className="kicker" style={{ color: 'var(--gem-amethyst)' }}>{t.eyebrow}</div>
      </div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
        gap: 56,
        padding: '32px 48px 64px',
        alignItems: 'center',
      }}>
        {/* LEFT — Gem TD cover art */}
        <div style={{ position: 'relative' }}>
          <div className="shot-frame" style={{ borderColor: 'var(--gem-amethyst)' }}>
            <img src="screenshots/gemtd-cover.jpg" alt="Gem TD cover"/>
          </div>
          {/* Gem stat overlay */}
          <div style={{
            position: 'absolute', right: -20, bottom: -20,
            background: '#15110a',
            border: '1px solid var(--gem-amethyst)',
            padding: '14px 16px',
            boxShadow: '4px 4px 0 0 var(--gem-amethyst)',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--gem-topaz)', textTransform: 'uppercase' }}>◆ ENDLESS MODE</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: '#fff' }}>210<span style={{ color: 'var(--gem-amethyst)' }}>+</span></div>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--hanji-300)', letterSpacing: '0.08em' }}>{lang === 'KO' ? '도감 엔트리' : 'CODEX ENTRIES'}</div>
          </div>
        </div>

        {/* RIGHT — copy */}
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="tag" style={{ background: 'var(--gem-amethyst)', color: '#fff', borderColor: 'var(--gem-amethyst)' }}>● {t.status}</span>
            <span className="tag solid-ink" style={{ borderColor: '#3a3220', color: 'var(--hanji-200)' }}>{t.genre}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 1,
            margin: '0 0 8px',
            color: '#fdf8ec',
            letterSpacing: '-0.01em',
          }}>
            <span style={{ color: 'var(--gem-ruby)' }}>G</span>
            <span style={{ color: 'var(--gem-sapphire)' }}>e</span>
            <span style={{ color: 'var(--gem-emerald)' }}>m</span>
            {' '}
            <span style={{ color: 'var(--gem-topaz)' }}>T</span>
            <span style={{ color: 'var(--gem-amethyst)' }}>D</span>
          </h2>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 16,
            letterSpacing: '0.06em',
            color: 'var(--gem-diamond)',
            marginBottom: 20,
          }}>{t.subtitle}</div>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 16,
            lineHeight: 1.65,
            color: 'var(--hanji-200)',
            maxWidth: 520,
            margin: '0 0 28px',
          }}>{t.tagline}</p>

          {/* Six-gem row */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--hanji-400)', textTransform: 'uppercase', marginBottom: 10 }}>◇ {t.gemRow}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {gems.map(g => (
                <div key={g.name} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 10px',
                  border: `1px solid ${g.color}`,
                  background: 'rgba(255,255,255,0.03)',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  color: g.color,
                }}>
                  <span style={{ width: 8, height: 8, background: g.color, display: 'inline-block', border: '1px solid #15110a' }}/>
                  {g.name}
                </div>
              ))}
            </div>
          </div>

          {/* Features compact */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            {t.features.map(([title, body], i) => (
              <div key={i} style={{
                padding: 14,
                border: '1px solid #3a3220',
                background: 'rgba(154, 95, 200, 0.06)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#fff', marginBottom: 4 }}>{title}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, lineHeight: 1.5, color: 'var(--hanji-300)' }}>{body}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              className="btn lg"
              style={{ background: 'var(--gem-amethyst)', color: '#fff', boxShadow: 'inset 0 -3px 0 0 #5d3382' }}
              href="https://play.google.com/store/apps/details?id=com.gemtowerdefense&hl=ko"
              target="_blank"
              rel="noreferrer"
            >▸ {t.cta1}</a>
          </div>
        </div>
      </div>

      {/* Bottom screenshot strip */}
      <GemTDStrip lang={lang}/>
    </section>
  );
}
window.GemTDShowcase = GemTDShowcase;

function GemTDStrip({ lang }) {
  const shots = [
    { src: 'screenshots/gemtd-battle.jpg',    label: lang === 'KO' ? '빠른 전투' : 'FAST BATTLE' },
    { src: 'screenshots/gemtd-combine.jpg',   label: lang === 'KO' ? '보석 합성' : 'COMBINE' },
    { src: 'screenshots/gemtd-research.jpg',  label: lang === 'KO' ? '보석 연구' : 'RESEARCH' },
    { src: 'screenshots/gemtd-codex.jpg',     label: lang === 'KO' ? '도감 210' : 'CODEX 210' },
    { src: 'screenshots/gemtd-legendary.jpg', label: lang === 'KO' ? '전설 보석' : 'LEGENDARY' },
    { src: 'screenshots/gemtd-skill.jpg',     label: lang === 'KO' ? '스킬 빌드' : 'BUILD' },
  ];
  return (
    <div className="container" style={{ padding: '0 48px 64px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 12,
      }}>
        {shots.map((s, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <div className="shot-frame" style={{
              aspectRatio: '9/16',
              borderColor: '#3a3220',
              boxShadow: '3px 3px 0 0 var(--gem-amethyst)',
            }}>
              <img src={s.src} alt={s.label}/>
            </div>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 10,
              letterSpacing: '0.12em',
              color: 'var(--gem-topaz)',
              marginTop: 8,
              textTransform: 'uppercase',
            }}>◆ {s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.GemTDStrip = GemTDStrip;
