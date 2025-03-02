import React, { useEffect } from "react";
import '../styles/MainContent.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import ResumePDF from "../resources/Curriculum.pdf";
import profilePic from '../resources/fotoJose.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
const MainContent = () =>{
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);


  return(
    <section id="start" className="main-content" data-aos="fade-up">
       <div className="intro-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="intro-text">
          <h1>Hello, I'm Jose Rodriguez</h1>
          <h2 className="rainbow-text">Software Developer</h2>   
        </div>
      </div>
      <div className="intro-paragraphs">
            <p>Highly motivated and dedicated university graduate with experience in
            technical support.</p>
          <p>Committed to continuous learning and eager to apply the knowledge acquired to real-world 
            challenges.</p> 
          <p>Enthusiastic about staying up to date on global trends and emerging technologies</p>
          </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/jrodriguezcruz28/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
        <a href="https://github.com/jose2806"><FontAwesomeIcon icon={faGithub}/> Github</a>
        <a href="mailto:jose12.jr610@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> E-mail</a>
        <a href={ResumePDF} download="Curriculum.pdf"><FontAwesomeIcon icon={faFileAlt} /> Resume</a>
      </div>
    </section>
  )
};

export default MainContent;