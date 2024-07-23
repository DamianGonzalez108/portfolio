import "./proyects.css";

const Proyects = () => {
  return (
    <div className="containerProyects">
      <div>
        <h3>PROYECTOS PRINCIPALES</h3>
      </div>
      <div className="divCards">
        <div className="divContainerCard">
          <a href="https://entrenga-final-gonzalez-react-js.vercel.app/" target="_blank" rel="noopener noreferrer"  className="card text-bg-dark divFirstCard">
            <img
              src="/ecomerceReactJs.png"
              className="card-img cardImg"
            />
            <div className="card-img-overlay textsCard">
              <p className="card-title titleCardDescription">Ecomerce React JS</p>
              <p className="card-text cardTxtDescription">
                Ecomerce de videojuegos dinamico, creado con React JS, consumo de API, librerias, manejo de datos, variables de estado, tecnicas de rendering, context, firebase.   
              </p>
              <p className="card-text timeCardText">
                <small>MAY | 2024
                </small>
              </p>
            </div>
          </a>
        </div>
        <div className="divContainerCard">
          <a href="https://damiangonzalez108.github.io/Proyecto-Final-HTML/index.html" target="_blank" rel="noopener noreferrer" className="card text-bg-dark divFirstCard">
            <img
              src="/proyectONG.png"
              className="card-img cardImg "
            />
            <div className="card-img-overlay textsCard">
              <p className="card-title titleCardDescription">ONG</p>
              <p className="card-text cardTxtDescription">
                Pagina web con puro desarrollo web, integracion de la herramienta SASS, diseño y maquetacion con bootstrap, orientada a la ayuda mundial 
              </p>
              <p className="card-text timeCardText">
                <small>JUL | 2023</small>
              </p>
            </div>
          </a>
        </div>
        <div className="divContainerCard">
          <a href="https://damiangonzalez108.github.io/burgersHM/" target="_blank" rel="noopener noreferrer" className="card text-bg-dark divFirstCard">
            <img
              src="/pryectHmburgers.png"
              className="card-img cardImg"
            />
            <div className="card-img-overlay textsCard">
              <p className="card-title titleCardDescription">HM</p>
              <p className="card-text cardTxtDescription">
                HM es un ecormerce de pedido rapido, creado con JAVA SCRIPT, base de datos, manejo de arrays, objetos, clases, con un diseño clasico y dinamico
              </p>
              <p className="card-text timeCardText">
                <small>SET | 2023</small>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
