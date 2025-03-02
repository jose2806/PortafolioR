import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styles/Project.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { SiSpring,SiMysql, SiPostgresql  } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import { faCode } from '@fortawesome/free-solid-svg-icons';


const Project = () =>{
  useEffect(() =>{
    Aos.init({duration:2000});
  },[]);

  const projects =[
    {
      title: "Forum-Hub",
      description: "Forum Hub is a REST API developed in Spring Boot that allows managing discussion forums.",
      features: [
        "Topic CRUD (Create, Read, Update, Delete)",
        "Data persistence with Spring Data JPA and MySQL",
        "Authentication and password encryption with BCrypt"
      ],
      technologies: [
        { name: "Java",icon: faJava },
        { name: "Spring",icon: SiSpring },
        { name: "MySQL",icon: SiMysql }
      ],
      repoLink: "https://github.com/jose2806/ForoHub"
    },
    {
      title: "API-medvoll",
      description: "API medvoll is a REST API developed in Spring Boot that allows managing a medical center with patients, doctor and appointments.",
      features: [
        "Topic CRUD (Create, Read, Update, Delete)",
        "Data persistence with Spring Data JPA and MySQL",
        "Authentication and password encryption with BCrypt"
      ],
      technologies: [
        { name: "Java",icon: faJava },
        { name: "Spring",icon: SiSpring },
        { name: "MySQL",icon: SiMysql }
      ],
      repoLink: "https://github.com/jose2806/api-medvoll.git"
    },
    {
      title: "LiterAlura",
      description: "This project is an application based on Java and Spring Boot to manage books and authors. The application consumes data from the Gutendex API.",
      features: [
        "Management of books and authors (Search for books by title, list books, registered authors, filter authors alive in a given year, books by language.",
        "Data persistence with Spring Data JPA and MySQL",
      ],
      technologies: [
        { name: "Java",icon: faJava },
        { name: "Spring",icon: SiSpring },
        { name: "PostgreSql",icon: SiPostgresql }
      ],
      repoLink: "https://github.com/jose2806/LiterAlura.git"
    },{
      title: "Task_Tracker",
      description: "This is the backend for a task management application, it provides a secure REST API for managing tasks, including user authentication and authorization.",
      features: [
        "Task CRUD (Create, Read, Update, Delete)",
        "User CRUD (Create, Read, Update, Delete)",
        "Data persistence with Spring Data JPA and MySQL",
        "Authentication and password encryption with BCrypt",
        "Frontend made with React"
      ],
      technologies: [
        { name: "Java",icon: faJava },
        { name: "Spring",icon: SiSpring },
        { name: "MySQL",icon: SiMysql }
      ],
      repoLink: "https://github.com/jose2806/Task_Tracker.git"
    }
  ];

  return(
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2><FontAwesomeIcon icon={faCode} /> Projects</h2>
      <div className="projects-container">
        {projects.map((project,index) =>
          <ProjectCard key={index} {...project}/>
        )}
      </div>
    </section>
  )
};

export default Project;