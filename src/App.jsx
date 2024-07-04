import Container from "/src/components/Container.jsx";
import Skills from "./components/skills/Skills";
import Navbar from "./components/navbar/Navbar";
import Proyects from "./components/Proyects";
import Contact from "./components/footer/Contact";

import './App.css'

function App() {


  return (
    <div>
      <div>
        <Navbar/>
      </div>
          <Container/>
          <Skills/>
          <Proyects/>
      <div>
        <Contact/>
      </div>
    </div>

  )
}

export default App
