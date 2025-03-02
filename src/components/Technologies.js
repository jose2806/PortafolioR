import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styles/Technologies.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faCss3Alt, faJs,faJava,faReact, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase,faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { BiLogoVisualStudio } from "react-icons/bi";


const Technologies = () =>{
   useEffect(() =>{
      Aos.init({duration:2000});
    },[]);

  return(
    <section id="technologies" className="technologies-section" data-aos="fade-up">
      <h2><FontAwesomeIcon icon={faMicrochip} /> Technologies</h2>
      <div className="tech-category">
        <h3>FrontEnd</h3>
        <div className="tech-icons">
          <div className="tech-item">
            <FontAwesomeIcon icon={faHtml5} title="HTML5" />
            <span>HTML5</span>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
            <span>CSS3</span>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faJs} title="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faReact} title="ReactJS" />
            <span>ReactJS</span>
          </div>
        </div>
      </div>
      <div className="tech-category">
        <h3>BackEnd</h3>
        <div className="tech-icons">
          <div className="tech-item">
            <FontAwesomeIcon icon={faJava} title="Java" /> 
            <span>Java</span>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faDatabase}  title="Firebase" />  
            <span>Firebase</span>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon icon={faDatabase} title="MySQL" /> 
            <span>MySQL</span>
          </div>
          <div className="tech-item">
          <FontAwesomeIcon icon={faDatabase}  title="JSON" /> 
            <span>JSON</span>
          </div>       
        </div>
      </div>
      <div className="tech-category">
        <h3>Tools</h3>
        <div className="tech-icons">
          <div className="tech-item">
            <FontAwesomeIcon icon={faGitAlt}  title="Git" /> 
            <span>Git</span>
          </div> 
          <div className="tech-item">
            <FontAwesomeIcon icon={faGithub}  title="GitHub" /> 
            <span>Github</span>
          </div> <div className="tech-item">
            <BiLogoVisualStudio title="Visual Studio"/> 
            <span>Visual Studio</span>
          </div> 
          
          
        </div>
      </div>
    </section>
  )
};

export default Technologies;