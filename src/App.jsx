import Container from "/src/components/Container.jsx";
import Skills from "./components/skills/Skills";
import Navbar from "./components/navbar/Navbar";
import Proyects from "./components/Proyects";
import Contact from "./components/footer/Contact";
import { ToastContainer} from 'react-toastify';
import { ContextProvider } from "./context/FunctionContext";

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {


  return (
    <div className="firstContainer">
      <ContextProvider>
      <div>
        <Navbar/>
      </div>
    </ContextProvider>
      <ToastContainer theme="dark" />
          <Container/>
          <Skills/>
          <Proyects/>
        <Contact/>
    </div>
  )
}

export default App
