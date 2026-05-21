import './App.css';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { Skills } from './components/sections/Skills';
import { ToolsUsed } from './components/sections/ToolsUsed';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { EducationAndVolunteer } from './components/sections/EducationAndVolunteer';
import { ContactFooter } from './components/sections/ContactFooter';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <ToolsUsed />
        <Experience />
        <Projects />
        <EducationAndVolunteer />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
