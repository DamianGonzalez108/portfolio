import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Curriculum from "./Curriculum";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";

import "./contact.css";

const Contact = () => {
  return (
    <div>
      <footer>
        <div className="divTitleFooter">
          <h3>COMO CONTACTARME</h3>
        </div>
        <div className="divList">
          <ul className="list">
            <li className="itemList">
              <div className="divIcon">
                <FaGithub size={50} color="#492E87" />
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
              <div className="divIcon">
                <MdEmail size={50} color="#492E87" />
              </div>
              <div className="itemsDouble">
                <p>damiangonzalez108@hotmail.com</p>
                <CopyToClipboard text="damiangonzalez108@hotmail.com">
                  <button className="buttonCopyEmail">
                     <FaCopy  size={30} color="#211951"/>
                  </button>
                </CopyToClipboard>
              </div>
            </li>
            <li className="itemList">
              <div className="divIcon">
                <FaLinkedin size={50} color="#492E87" />
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
              <div className="divIcon">
                <FaPhoneSquareAlt size={50} color="#492E87" />
              </div>

              <div className="itemsDouble">
                <p>2355-556167</p>
                <CopyToClipboard text="2355-556167">
                  <button className="buttonCopyEmail">
                     <FaCopy  size={30} color="#211951"/>
                  </button>
                </CopyToClipboard>
              </div>
            </li>
          </ul>
        </div>
        <Curriculum/>
      </footer>
    </div>
  );
};

export default Contact;
