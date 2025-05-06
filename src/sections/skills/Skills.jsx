import React from "react";
import styles from "./SkillsStyles.module.css";
import CheckMarkIcondark from "../../assets/checkmark-dark.svg";
import CheckMarkIconlight from "../../assets/checkmark-light.svg";

import { useTheme } from "../../common/ThemeContext";
import SkillCard from "../../common/SkillCard";

function Skills() {
  const theme = useTheme();
  const CheckMarkIcon =
    theme === "light" ? CheckMarkIconlight : CheckMarkIcondark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">SKILLS</h1>
      <div className={styles.skillList}>
        <SkillCard img={CheckMarkIcon} Skill="HTML" />
        <SkillCard img={CheckMarkIcon} Skill="CSS" />
        <SkillCard img={CheckMarkIcon} Skill="JAVASCRIPT" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillCard img={CheckMarkIcon} Skill="REACT JAVASCRIPT" />
        <SkillCard img={CheckMarkIcon} Skill="REACT NATIVE" />
        <SkillCard img={CheckMarkIcon} Skill="GIT" />
      </div>
    </section>
  );
}

export default Skills;
