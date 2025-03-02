import React,{useEffect} from "react";
import '../styles/Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Experience = () =>{
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return(
    <section id="experience" className="experience-section" data-aos="fade-up">
      <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
      <div className="experience">
        <h3>IT Technical Consultant </h3>
        <p><strong>Aug 2015 - Jun 2022 / Kryonics Computer Tech</strong></p>
        <p>Responsabilities:</p>
        <ul>
          <li>Conducted comprehensive preventive and corrective maintenance of computer equipment.</li>
          <li>Provided customer service by delivering prompt and effective e-mail support, resolving network-related issues, 
          and addressing concerns related to operating systems and office packages.</li>
          <li>Efficiently managed the help desk, promptly responding to user inquiries, troubleshooting technical problems, and delivering 
          solutions to ensure smooth and uninterrupted operations.</li>
        </ul> 
      </div>
    </section>
  )
};

export default Experience;