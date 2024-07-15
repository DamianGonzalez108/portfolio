import { createContext } from "react";

const FunctionContext = createContext();

const ContextProvider = ({ children }) => {

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

  return <FunctionContext.Provider value={{funtionscrollSkills,funtionscrollProyects,funtionscrollContact }}>
    {children}
    </FunctionContext.Provider>;
};

export { ContextProvider, FunctionContext };
