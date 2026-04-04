import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ClientsSection from '../components/sections/ClientsSection'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
