import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaChevronRight } from "react-icons/fa";
import '../styles/ProjectCard.css';



const ProjectCard = ({title,description,features,technologies,repoLink}) => {
  return(
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature,index) =>(
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p><strong>Technologies:</strong></p>
      <div className="tech-icons">
        {technologies.map((tech,index) => (
          <span key={index} className="tech-badge">
            {typeof tech.icon === "function" ? (
              <tech.icon/>
            ):(
              <FontAwesomeIcon icon={tech.icon}/> 
            )}   
            {tech.name}     
          </span>
        ))}
      </div>
      <a href={repoLink} className="project-button">
        <FontAwesomeIcon icon={faGithub}/>Go to project <FaChevronRight/>
      </a>
    </div>
  )
};

export default ProjectCard;