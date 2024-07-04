import Pdf from "/curriculum-vitae.pdf";

import "../footer/curriculum.css";

const Curriculum = () => {
  return (
    <div className="divContainerCv">
      <div className="divTitleCv">
        <h3>CURRICULUM VITAE</h3>
      </div>
      <div className="divQrCv">
        <div className="divImgCv">
          <img src="/qrCV.png" className="imgQr"/>
        </div>
        <div>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            <button className="buttongoPDF">Abrir PDF</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
