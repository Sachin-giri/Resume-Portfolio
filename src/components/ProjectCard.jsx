const KIND_LABEL = {
  game: 'game dev',
  ai: 'ai integration',
  web: 'full stack',
}

export default function ProjectCard({ project }) {
  const { title, tagline, description, stack, demoUrl, codeUrl, kind, highlight } =
    project

  return (
    <article
      className={`group relative rounded-sm border border-border bg-surface p-6 sm:p-7 flex flex-col h-full transition-colors hover:border-cyan/50 ${
        highlight ? 'sm:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-amber">
            {KIND_LABEL[kind] ?? 'project'}
          </span>
          <h3 className="font-mono text-xl font-semibold text-ink mt-1.5">
            {title}
          </h3>
          <p className="text-muted text-sm mt-0.5">{tagline}</p>
        </div>
      </div>

      <p className="text-ink/85 text-sm leading-relaxed mt-4 flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-1 rounded-sm bg-raised text-cyan border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-mono text-xs text-amber hover:underline"
          >
            Live demo →
          </a>
        ) : (
          <span className="font-mono text-xs text-muted/60">
            demo link — add in src/data/projects.js
          </span>
        )}
        {codeUrl ? (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-mono text-xs text-muted hover:text-cyan"
          >
            View code →
          </a>
        ) : (
          <span className="font-mono text-xs text-muted/60">
            repo link — add in src/data/projects.js
          </span>
        )}
      </div>
    </article>
  )
}
