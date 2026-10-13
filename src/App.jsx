import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import GameEmbed from './components/GameEmbed.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Contact, { Footer } from './components/Contact.jsx'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <GameEmbed />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
