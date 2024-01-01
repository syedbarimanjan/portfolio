import { AboutSection, Footer, HeroSection, MyTechSection, Nav, ProjectsSection } from "./components";


const App = () => {
  return (
    <div className="bg-bgg snap-y snap-proximity overflow-y-scroll h-screen">
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
