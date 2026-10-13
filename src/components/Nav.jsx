const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="focus-ring font-mono font-semibold text-ink text-sm tracking-tight"
        >
          sachin<span className="text-amber">.</span>dev
        </a>
        <ul className="flex items-center gap-6 sm:gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring font-mono text-xs sm:text-sm text-muted hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
