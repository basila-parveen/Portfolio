import React from "react";
import styles from "./Project.module.css";
import Dwello from "../../assets/Dwello.jpg";
import Exclusivejs from "../../assets/Exclusive.jpg";
import ProjectCard from "../../common/ProjectCard";
import Exclusivert from "../../assets/exclusiveone.jpg";

function Projects() {
  return (
    <section className={styles.continer}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={Dwello}
          link="https://github.com/basila-parveen/dwello_project.git "
          h3="Dwello"
          p="Find your Home"
        />
        <ProjectCard
          src={Exclusivejs}
          link="https://github.com/basila-parveen/Exclusive.git "
          h3="Exclusive-Javascript"
          p="Ecommerce App "
        />
        <ProjectCard
          src={Exclusivert}
          link="https://github.com/basila-parveen/Exclusive_rct.git "
          h3="Exclusive-React JS"
          p="Ecommerce App"
        />
      </div>
    </section>
  );
}

export default Projects;
