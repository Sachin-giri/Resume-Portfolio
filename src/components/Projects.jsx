import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">
          selected work
        </p>
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink">
          Things I've built
        </h2>
        <p className="text-muted mt-4 max-w-xl">
          A mix of production web apps, a browser game built from scratch,
          and tools wired up to the OpenAI API. Replace the placeholder
          links with your live demos and repos.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
