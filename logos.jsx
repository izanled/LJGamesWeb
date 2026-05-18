// LJ Games — Logo variants
// Three pixel-art directions; switchable via Tweaks.

/* -------- Variant A: Gem mark — faceted hex gem with LJ inscribed -------- */
function LogoGemMark({ size = 40, gem = "ruby" }) {
  const palette = {
    ruby:    { top: "#ef6a6a", mid: "#d44360", deep: "#8a1f3a", deepest: "#4d0e22", shine: "#ffd4d8" },
    sapphire:{ top: "#5fa0e0", mid: "#3a6fd3", deep: "#1c3a8a", deepest: "#0c1d4d", shine: "#cfe2ff" },
    emerald: { top: "#69d8a3", mid: "#2fb37a", deep: "#1c6b4a", deepest: "#0d3d29", shine: "#c8f0db" },
    topaz:   { top: "#f5cb6a", mid: "#e2a83a", deep: "#9a6f1a", deepest: "#4d370c", shine: "#ffeac4" },
    amethyst:{ top: "#bb8fdb", mid: "#9a5fc8", deep: "#5d3382", deepest: "#2e1a4d", shine: "#e1cdf3" },
  };
  const p = palette[gem] || palette.ruby;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} shapeRendering="crispEdges" style={{ imageRendering: 'pixelated', display: 'block' }}>
      {/* ink outline */}
      <g fill="#15110a">
        {/* top points */}
        <rect x="20" y="8" width="24" height="2"/>
        <rect x="16" y="10" width="4" height="2"/>
        <rect x="44" y="10" width="4" height="2"/>
        <rect x="12" y="12" width="4" height="2"/>
        <rect x="48" y="12" width="4" height="2"/>
        <rect x="8"  y="14" width="4" height="2"/>
        <rect x="52" y="14" width="4" height="2"/>
        <rect x="6"  y="16" width="2" height="14"/>
        <rect x="56" y="16" width="2" height="14"/>
        {/* bottom point */}
        <rect x="8"  y="30" width="2" height="6"/>
        <rect x="54" y="30" width="2" height="6"/>
        <rect x="10" y="36" width="2" height="4"/>
        <rect x="52" y="36" width="2" height="4"/>
        <rect x="12" y="40" width="2" height="4"/>
        <rect x="50" y="40" width="2" height="4"/>
        <rect x="14" y="44" width="2" height="4"/>
        <rect x="48" y="44" width="2" height="4"/>
        <rect x="16" y="48" width="2" height="2"/>
        <rect x="46" y="48" width="2" height="2"/>
        <rect x="18" y="50" width="2" height="2"/>
        <rect x="44" y="50" width="2" height="2"/>
        <rect x="20" y="52" width="2" height="2"/>
        <rect x="42" y="52" width="2" height="2"/>
        <rect x="22" y="54" width="20" height="2"/>
      </g>
      {/* Gem faces — top half lighter */}
      <g fill={p.top}>
        <rect x="20" y="10" width="24" height="2"/>
        <rect x="16" y="12" width="32" height="2"/>
        <rect x="12" y="14" width="40" height="2"/>
        <rect x="8"  y="16" width="48" height="2"/>
      </g>
      <g fill={p.mid}>
        <rect x="8" y="18" width="48" height="4"/>
        <rect x="8" y="22" width="48" height="2"/>
      </g>
      <g fill={p.deep}>
        <rect x="8"  y="24" width="48" height="4"/>
        <rect x="8"  y="28" width="48" height="2"/>
      </g>
      <g fill={p.deepest}>
        <rect x="8"  y="30" width="48" height="2"/>
        <rect x="10" y="32" width="44" height="4"/>
        <rect x="12" y="36" width="40" height="4"/>
        <rect x="14" y="40" width="36" height="4"/>
        <rect x="16" y="44" width="32" height="4"/>
        <rect x="18" y="48" width="28" height="2"/>
        <rect x="20" y="50" width="24" height="2"/>
        <rect x="22" y="52" width="20" height="2"/>
      </g>
      {/* Facet dividers */}
      <g fill="#15110a" opacity="0.5">
        <rect x="20" y="12" width="2" height="2"/>
        <rect x="42" y="12" width="2" height="2"/>
        <rect x="16" y="14" width="2" height="2"/>
        <rect x="46" y="14" width="2" height="2"/>
        <rect x="32" y="10" width="0" height="0"/>
        {/* center spine */}
        <rect x="31" y="14" width="2" height="2" opacity="0.4"/>
      </g>
      {/* LJ letterforms — paper colored */}
      <g fill={p.shine}>
        {/* L */}
        <rect x="20" y="20" width="3" height="14"/>
        <rect x="20" y="32" width="9" height="3"/>
        {/* J */}
        <rect x="35" y="20" width="9" height="3"/>
        <rect x="39" y="20" width="3" height="14"/>
        <rect x="33" y="31" width="6" height="3"/>
        <rect x="33" y="28" width="3" height="3"/>
      </g>
      {/* Top shine sparkle */}
      <g fill={p.shine} opacity="0.85">
        <rect x="24" y="14" width="2" height="2"/>
        <rect x="22" y="16" width="6" height="1"/>
      </g>
    </svg>
  );
}
window.LogoGemMark = LogoGemMark;

/* -------- Variant B: Pixel mascot — small warrior with gat -------- */
function LogoMascot({ size = 40 }) {
  return (
    <img
      src="design-system/assets/icon.png"
      alt=""
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        display: 'block',
        objectFit: 'contain',
        imageRendering: 'pixelated',
      }}
    />
  );
}
window.LogoMascot = LogoMascot;

/* -------- Variant C: Pixel monogram — chunky "LJ" tile with dancheong corners -------- */
function LogoMonogram({ size = 40 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} shapeRendering="crispEdges" style={{ imageRendering: 'pixelated', display: 'block' }}>
      {/* tile background */}
      <rect x="2" y="2" width="60" height="60" fill="#15110a"/>
      {/* dancheong corner stripes */}
      <rect x="2"  y="2" width="14" height="3" fill="#c8443a"/>
      <rect x="50" y="2" width="12" height="3" fill="#2e5a8c"/>
      <rect x="2"  y="59" width="12" height="3" fill="#e2a83a"/>
      <rect x="48" y="59" width="14" height="3" fill="#4a8e6e"/>
      {/* outer ink frame */}
      <g fill="none" stroke="#f1e7d0" strokeWidth="1">
        <rect x="5" y="5" width="54" height="54" shapeRendering="crispEdges"/>
      </g>
      {/* LJ letters — chunky pixel */}
      {/* L */}
      <g fill="#f1e7d0">
        <rect x="14" y="16" width="6" height="26"/>
        <rect x="14" y="38" width="18" height="6"/>
      </g>
      {/* J */}
      <g fill="#e2a83a">
        <rect x="36" y="16" width="20" height="6"/>
        <rect x="46" y="16" width="6" height="22"/>
        <rect x="34" y="34" width="14" height="6"/>
        <rect x="32" y="30" width="6" height="6"/>
      </g>
      {/* shine pixels */}
      <rect x="15" y="17" width="2" height="6" fill="#fff" opacity="0.6"/>
      <rect x="37" y="17" width="6" height="2" fill="#fff" opacity="0.4"/>
    </svg>
  );
}
window.LogoMonogram = LogoMonogram;

/* -------- Wordmark text — pixel font typography only -------- */
function LogoWordmark({ size = 22, color = "var(--fg)", subtle = "var(--fg-muted)", stack = false }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: stack ? 'column' : 'row', alignItems: stack ? 'flex-start' : 'baseline', gap: stack ? 2 : 10, lineHeight: 1 }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: size,
        color,
        letterSpacing: '0.01em',
        lineHeight: 1,
        textTransform: 'uppercase',
      }}>LJ GAMES</span>
      <span style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: Math.max(10, size * 0.45),
        color: subtle,
        letterSpacing: '0.04em',
        lineHeight: 1,
      }}>엘제이게임즈</span>
    </div>
  );
}
window.LogoWordmark = LogoWordmark;

/* -------- Composed logo — mark + wordmark, switchable by variant -------- */
function Logo({ variant = 'gem', size = 36, showWordmark = true, color = 'var(--fg)', subtle = 'var(--fg-muted)' }) {
  const Mark = variant === 'mascot' ? LogoMascot
            : variant === 'monogram' ? LogoMonogram
            : LogoGemMark;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <Mark size={size} />
      {showWordmark && <LogoWordmark size={size * 0.5} color={color} subtle={subtle} />}
    </div>
  );
}
window.Logo = Logo;
