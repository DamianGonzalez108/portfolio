import { useContext } from "react";
import { FunctionContext } from "../../context/FunctionContext";

import "./navComplete.css";

const Navcomplete = () => {

  const {funtionscrollSkills,funtionscrollProyects,funtionscrollContact} = useContext(FunctionContext)

  return (
    <div className="divListNavBar">
      <ul className="listNavbar">
        <li className="itemNavbar">
          <button onClick={funtionscrollSkills} className="buttonsNavBar">
            Habilidades
          </button>
        </li>

        <li className="itemNavbar">
          <button onClick={funtionscrollProyects} className="buttonsNavBar">
            Proyectos
          </button>
        </li>
        <li className="itemNavbar">
          <button onClick={funtionscrollContact} className="buttonsNavBar">
            Contacto
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navcomplete;
