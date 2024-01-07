import { AboutSection, Footer, HeroSection, MyTechSection, Nav, ProjectsSection } from "./components";


const App = () => {
  return (
    <div className="bg-bgg">
      <Nav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <MyTechSection/>
      <Footer/>
    </div>
  )
}

export default App
