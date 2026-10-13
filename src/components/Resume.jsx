export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-28 px-6 border-y border-border bg-surface/40"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">
            resume
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink">
            Want the PDF version?
          </h2>
          <p className="text-muted mt-3 max-w-md">
            Drop your resume PDF in the{' '}
            <code className="font-mono text-cyan text-sm">public/</code>{' '}
            folder as{' '}
            <code className="font-mono text-cyan text-sm">
              resume.pdf
            </code>{' '}
            and this button will serve it directly.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="focus-ring shrink-0 bg-amber text-bg font-mono font-semibold text-sm px-6 py-3 rounded-sm hover:bg-amber/90 transition-colors text-center"
        >
          Download resume
        </a>
      </div>
    </section>
  )
}
