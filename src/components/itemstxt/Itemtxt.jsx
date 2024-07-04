import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./itemtxt.css";

const Itemtxt = () => {
  const [currentIndex, setCurrrentIndex] = useState(0);
  const dynamicText = [
    {
      title: "SOBRE MI",
      description:
        "Me describo como una persona proactiva, dinamica y enfocada a la hora de trabajar. Altamente sociable y con buena comunicacion. Entusiasta con cualquier tipo de aprendizaje. Con objetivos claros en mi camino como profesional  ",
    },
    {
      title: "FORMACION Y CERTIFICACIONES",
      description:
        "CODERHOUSE (desarrollo web, java script, react js). PLATZI (pensamiento logico: algoritmos y diagramas de flujo, lenguajes de programacion, manejo de datos,estructuras, funciones, computacion basica,)",
    },
    {
      title: "HABILIDADES",
      description:
        "Trabajo en equipo, optimizacion de codigo, SEO, maquetacion,consumo de API, AJAX, FETCH, diseños responsive, organizacion y planificacion",
    },
  ];

  const goToNext = () => {
    if (currentIndex < dynamicText.length - 1) {
      setCurrrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="txtDescription">
      <div>
        <h3>{dynamicText[currentIndex].title}</h3>
      </div>
      <div className="divChangeText">
        <IoIosArrowBack
          className="buttonsChangeTxt"
          onClick={goToPrevious}
          size={50}
        />
          <div className="divTxtContainer">
            <p className="txtContainer">{dynamicText[currentIndex].description}</p>
          </div>
        <IoIosArrowForward
          className="buttonsChangeTxt"
          onClick={goToNext}
          size={50}
        />
      </div>
    </div>
  );
};

export default Itemtxt;
