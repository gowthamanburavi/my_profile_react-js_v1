import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Contact } from './components/ContactMe/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Navigation/NavBar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Timeline } from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
