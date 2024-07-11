import "./navComplete.css"

const Navcomplete = () => {

    const funtionscrollSkills = () => {
        window.scrollTo({
          top: 620,
          behavior: "smooth",
        });
      };
    
      const funtionscrollProyects = () => {
        window.scrollTo({
          top: 1200,
          behavior: "smooth",
        });
      };
    
      const funtionscrollContact = () => {
        window.scrollTo({
          top: 2516,
          behavior: "smooth",
        });
      };


  return (
              <div className="divListNavBar">
        <ul className="listNavbar">
          <li className="itemNavbar">
            <button onClick={funtionscrollSkills} className="buttonsNavBar">Habilidades</button>
          </li>

          <li className="itemNavbar">
            <button onClick={funtionscrollProyects} className="buttonsNavBar">Proyectos</button>
          </li>
          <li className="itemNavbar">
            <button onClick={funtionscrollContact} className="buttonsNavBar">Contacto</button>
          </li>
        </ul>
      </div>
  )
}

export default Navcomplete