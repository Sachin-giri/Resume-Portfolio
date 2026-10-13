export default function GameEmbed() {
  return (
    <section className="relative py-28 px-6 border-y border-border bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-amber mb-3">
          play it live
        </p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink">
          Mission Alpha
        </h2>
        <p className="text-muted mt-4 max-w-xl leading-relaxed">
          Instead of a screenshot, let recruiters play the actual game.
          Deploy your Phaser 3 build (e.g. to Vercel or GitHub Pages) and
          swap the src below for its URL — this is the single biggest
          differentiator in this portfolio.
        </p>

        <div className="mt-10 rounded-sm border border-border bg-bg aspect-video w-full flex items-center justify-center overflow-hidden">
          {/*
            Once your Phaser 3 build is deployed, replace this placeholder
            with:
            <iframe
              src="https://your-game-url.vercel.app"
              className="w-full h-full"
              title="Mission Alpha"
              loading="lazy"
            />
          */}
          <div className="text-center px-6">
            <p className="font-mono text-sm text-muted">
              [ game embed placeholder ]
            </p>
            <p className="font-mono text-xs text-muted/60 mt-2">
              deploy your build, then drop the URL into
              src/components/GameEmbed.jsx
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
