// LJ Games landing — App root

function App() {
  const defaults = /*EDITMODE-BEGIN*/{
    "lang": "KO",
    "logoVariant": "mascot",
    "accent": "#c8443a",
    "theme": "light"
  }/*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(defaults);

  React.useEffect(() => {
    if (t.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [t.theme]);

  React.useEffect(() => {
    const accent = t.accent || '#c8443a';
    const deepMap = {
      '#c8443a': '#962e24',
      '#2e5a8c': '#1c3a5e',
      '#4a8e6e': '#2e5e48',
      '#9a5fc8': '#5d3382',
    };
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-deep', deepMap[accent.toLowerCase()] || accent);
  }, [t.accent]);

  const lang = t.lang === 'EN' ? 'EN' : 'KO';

  return (
    <div data-lj>
      <Header lang={lang} onLangChange={(v) => setTweak('lang', v)} logoVariant={t.logoVariant} />
      <Hero lang={lang} />
      <Marquee lang={lang} />
      <StatsStrip lang={lang} />
      <HanyangShowcase lang={lang} />
      <GemTDShowcase lang={lang} />
      <ComingNext lang={lang} />
      <AboutSection lang={lang} />
      <DevlogSection lang={lang} />
      <FooterSection lang={lang} logoVariant={t.logoVariant} />

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === 'KO' ? '언어 LANGUAGE' : 'LANGUAGE'} />
        <TweakRadio
          label={lang === 'KO' ? '표시' : 'Display'}
          value={t.lang}
          options={[
            { value: 'KO', label: '한국어' },
            { value: 'EN', label: 'English' },
          ]}
          onChange={(v) => setTweak('lang', v)}
        />

        <TweakSection label={lang === 'KO' ? '로고 LOGO' : 'LOGO'} />
        <TweakRadio
          label={lang === 'KO' ? '변형' : 'Variant'}
          value={t.logoVariant}
          options={[
            { value: 'gem', label: lang === 'KO' ? '보석' : 'Gem' },
            { value: 'mascot', label: lang === 'KO' ? '캐릭터' : 'Mascot' },
            { value: 'monogram', label: lang === 'KO' ? '타일' : 'Tile' },
          ]}
          onChange={(v) => setTweak('logoVariant', v)}
        />
        <LogoPreviewRow variant={t.logoVariant} onPick={(v) => setTweak('logoVariant', v)} />

        <TweakSection label={lang === 'KO' ? '강조 색상 ACCENT' : 'ACCENT COLOR'} />
        <TweakColor
          label={lang === 'KO' ? '단청 팔레트' : 'Dancheong'}
          value={t.accent}
          options={['#c8443a', '#2e5a8c', '#4a8e6e', '#9a5fc8']}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label={lang === 'KO' ? '테마 THEME' : 'THEME'} />
        <TweakRadio
          label={lang === 'KO' ? '배경' : 'Mode'}
          value={t.theme}
          options={[
            { value: 'light', label: lang === 'KO' ? '한지' : 'Hanji' },
            { value: 'dark',  label: lang === 'KO' ? '먹' : 'Ink' },
          ]}
          onChange={(v) => setTweak('theme', v)}
        />
      </TweaksPanel>
    </div>
  );
}

function LogoPreviewRow({ variant, onPick }) {
  const items = [
    { k: 'gem',      Mark: LogoGemMark, label: 'GEM' },
    { k: 'mascot',   Mark: LogoMascot,  label: 'MASCOT' },
    { k: 'monogram', Mark: LogoMonogram, label: 'TILE' },
  ];
  return (
    <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
      {items.map(({ k, Mark, label }) => (
        <div
          key={k}
          onClick={() => onPick(k)}
          style={{
            flex: 1,
            padding: '8px 4px',
            border: '1px solid ' + (variant === k ? 'rgba(41,38,27,0.5)' : 'rgba(41,38,27,0.15)'),
            background: variant === k ? 'rgba(41,38,27,0.08)' : 'rgba(255,255,255,0.5)',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
          }}
        >
          <Mark size={28}/>
          <span style={{ fontSize: 9, letterSpacing: '0.08em', color: 'rgba(41,38,27,0.6)', fontWeight: 600 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
