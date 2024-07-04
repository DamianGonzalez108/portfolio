import Itemtxt from "./itemstxt/Itemtxt";

import "./container.css";

const Container = () => {
  return (
    <div className="containerMain">
      <div className="divMain">
        <div className="divImg">
          <img src="/imgPortfolio-12.png" className="imgMain" />
        </div>
        <div className="divTxt">
          <h3 className="tittleName">
            Damian Gonzalez
          </h3>
          <p className="pFrontEnd">Front-End Developer</p>
          <Itemtxt/>
        </div>
      </div>
    </div>
  );
};

export default Container;
