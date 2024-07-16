import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

import "./skills.css";

const Skills = () => {
  return (
    <div className="divContainerSkills" >
      <div className="divTitleSkils">
        <h3 className="titleSkills">HABILIDADES TECNICAS</h3>
      </div>
      <div className="secondDivSkills">
              <div className="divSkills">
        <div className="divImgSkills">
          <FaLaptopCode size={130} color="#492E87" />
        </div>
        <div className="divSkillsList">
          <div className="divAllItems">
            <div className="divFirstItems">
              <FaHtml5 size={70} color="#DC5F00"  className="hoverSkills"/>
              <FaCss3 size={70} color="#3FA2F6"  className="hoverSkills"/>
              <IoLogoJavascript size={70} color="#FFDE4D"  className="hoverSkills"/>
            </div>
            <div className="divItems">
              <FaReact size={70} color="#3FA2F6"  className="hoverSkills"/>
              <FaGitAlt size={70} color="#DC5F00" className="hoverSkills"/>
            </div>
            <div className="divItems">
              <FaSass size={70} color="#FF76CE" className="hoverSkills"/>
              <FaBootstrap size={70} color="#6420AA" className="hoverSkills"/>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Skills;
