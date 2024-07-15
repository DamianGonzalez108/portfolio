import { HiHome } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { FunctionContext } from "../../context/FunctionContext";

import "./navComprimed.css";

const NavComprimed = () => {

const {funtionscrollSkills,funtionscrollProyects,funtionscrollContact} = useContext(FunctionContext)
  return (
    <div className="divComprimed">
      <nav className="navbar ">
        <div className="container-fluid">
          <HiHome
            className="navBar-toggleyou"
            size={25}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          />
          <div
            className="offcanvas offcanvas-end divContainerToggle"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header divButtonClose">
              <h5
                className="offcanvas-title tittleToggle"
                id="offcanvasNavbarLabel"
              >
                Inicio
              </h5>
              <IoClose
                className="buttonClose"
                size={25}
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 listToggle">
                <li className="nav-item">
                  <button onClick={funtionscrollSkills} className="nav-link ancore">
                    Habilidades
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={funtionscrollProyects} className="nav-link ancore">
                    Proyectos
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={funtionscrollContact} className="nav-link ancore">
                    Contactos
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComprimed;
