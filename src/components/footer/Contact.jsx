import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Curriculum from "./Curriculum";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

import "./contact.css";

const Contact = () => {
  return (
    <footer>
      <div className="divTitleFooter">
        <h3>COMO CONTACTARME</h3>
      </div>
      <div className="divList">
        <ul className="list">
          <li className="itemList">
            <div className="divIcon">
              <button className="buttonIconContact">
                <a
                  href="https://github.com/DamianGonzalez108"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={45} color="#492E87" />
                </a>
              </button>
            </div>
            <div className="items">
              <a
                href="https://github.com/DamianGonzalez108"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/DamianGonzalez108
              </a>
            </div>
          </li>
          <li className="itemList">
            <CopyToClipboard text="damiangonzalez108@hotmail.com">
              <div className="divIcon">
                <button onClick={() => toast("Copiado al portapapeles", {position: "bottom-center",autoClose: 2000})} className="buttonIconContact">
                  <MdEmail size={45} color="#492E87" />
                </button>
              </div>
            </CopyToClipboard>
            <div className="itemsDouble">
              <p>damiangonzalez108@hotmail.com</p>
              <CopyToClipboard text="damiangonzalez108@hotmail.com">
                <button  onClick={() => toast("Copiado al portapapeles", {position: "bottom-center",autoClose: 2000})} className="buttonCopyEmail">
                  <FaCopy size={30} color="#211951" />
                </button>
              </CopyToClipboard>
            </div>
          </li>
          <li className="itemList">
            <div className="divIcon">
              <button className="buttonIconContact">
                <a
                  href="https://www.linkedin.com/in/damian-gonzalez-4ba082292/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={40} color="#492E87" />
                </a>
              </button>
            </div>
            <div className="items">
              <a
                href="https://www.linkedin.com/in/damian-gonzalez-4ba082292/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/damian-gonzalez-4ba082292/
              </a>
            </div>
          </li>
          <li className="itemList">
            <CopyToClipboard text="2355-556167">
              <div className="divIcon">
                <button  onClick={() => toast("Copiado al portapapeles", {position: "bottom-center",autoClose: 2000})} className="buttonIconContact">
                  <FaPhoneSquareAlt size={40} color="#492E87" />
                </button>
              </div>
            </CopyToClipboard>
            <div className="itemsDouble">
              <p>2355-556167</p>
              <CopyToClipboard text="2355-556167">
                <button  onClick={() => toast("Copiado al portapapeles", {position: "bottom-center",autoClose: 2000})} className="buttonCopyEmail">
                  <FaCopy size={30} color="#211951" />
                </button>
              </CopyToClipboard>
            </div>
          </li>
        </ul>
      </div>
      <Curriculum />
    </footer>
  );
};

export default Contact;
