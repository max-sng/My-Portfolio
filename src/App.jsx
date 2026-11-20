import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Frontline from './pages/Frontline.jsx'
import Forefront from './pages/Forefront.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Projects />
        <Frontline />
        <Forefront />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
