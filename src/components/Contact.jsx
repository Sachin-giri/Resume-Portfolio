const LINKS = [
  { label: 'Email', value: 'sachingirepanoor123@gmail.com', href: 'mailto:sachingirepanoor123@gmail.com' },
  { label: 'GitHub', value: 'add your username', href: '#' },
  { label: 'LinkedIn', value: 'add your profile URL', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">
          contact
        </p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink">
          Let's talk
        </h2>
        <p className="text-muted mt-4 max-w-lg">
          Open to full stack, front-end, or AI-integration roles. The
          fastest way to reach me is email.
        </p>

        <div className="mt-10 space-y-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring flex items-baseline gap-4 group w-fit"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-amber w-20">
                {link.label}
              </span>
              <span className="font-mono text-sm text-ink/85 group-hover:text-cyan transition-colors">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-muted/70">
        <span>© {new Date().getFullYear()} Sachin Girepanoor</span>
        <span>built with react + tailwind</span>
      </div>
    </footer>
  )
}
