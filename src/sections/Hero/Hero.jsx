import React, { useTransition } from "react";
import styles from "../Hero/HeroStyles.module.css";
import heroImg from "../../assets/Hero-img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "../../../src/App.css";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import LinkdienDark from "../../assets/linkedin-dark.svg";
import LinkidenLight from "../../assets/linkedin-light.svg";
import CV from "../../assets/Basila Parveen.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  const themeGit = theme === "light" ? githubLight : githubDark;
  const themeLinkiedin = theme === "light" ? LinkidenLight : LinkdienDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colormodeContainer}>
        <img
          src={heroImg}
          style={{ width: "250px", height: "300px", borderRadius: "5%" }}
          alt="profile picture"
          className={styles.hero}
        />
        <img
          src={themeIcon}
          alt="color mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Basila
          <br /> Parveen Vp
        </h1>
        <h2>React Native Devolper</h2>
        <span className={styles.socialLinks}>
          <a href="https://github.com/basila-parveen/" target="_blank">
            <img
              src={themeGit}
              alt="github  Icon"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/basila-parveen-vp-b9288025b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
          >
            <img
              src={themeLinkiedin}
              alt="linkedin  Icon"
              className={styles.socialIcon}
            />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for <br />
          evolping modern React <br />
          native apps for comercial
          <br /> business
        </p>
        <a href={CV} download className={styles.resumeLink}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
