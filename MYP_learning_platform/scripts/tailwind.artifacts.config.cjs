// Neutral Tailwind config used only by scripts/build-artifacts.mjs — the
// site's own tailwind.config.ts customises the theme, which would change how
// an artifact's utility classes render. `content` is supplied via --content.
module.exports = {
  content: [],
  theme: { extend: {} },
  plugins: [],
}
