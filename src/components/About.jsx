const SKILLS = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST APIs',
  'Phaser 3',
  'OpenAI API',
  'Prompt Engineering',
  'Tailwind CSS',
  'Git',
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">
            about
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink">
            A bit about how I work
          </h2>
          <div className="text-ink/85 leading-relaxed mt-6 space-y-4 text-[15px]">
            <p>
              I'm a full stack developer with 4+ years at Tata Consultancy
              Services, where I've shipped 10+ web applications in React
              and Node.js, improving application performance by 30% along
              the way. I care about clean, reusable components and
              APIs that don't fall over under load.
            </p>
            <p>
              Alongside product work, I build browser games in Phaser 3
              and wire up AI features with the OpenAI API — two things
              that don't usually show up on the same resume, which is
              exactly why they're both here.
            </p>
            <p>
              Edit this paragraph with a specific story: a hard bug you
              fixed, a system you designed, or a decision you'd make
              differently next time. Specifics beat adjectives.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-amber mb-3">
            core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded-sm bg-surface border border-border text-ink/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
