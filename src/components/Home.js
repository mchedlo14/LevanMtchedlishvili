import React, { useContext, useEffect } from "react";
import "../assets/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactProjects from "./ReactProjects";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();

    console.log(theme);
  }, []);

  return (
    <div className={`home-component-${theme.theme}`}>
      <div data-aos="zoom-in" className="information-container">
        <p className="job">Front End Developer</p>
        <p className={`about-me-${theme.theme}`}>
          Hello, my name is Levan Mtchedlishvili
        </p>
        <p className="details-about-me">
          Hi there! I'm a passionate junior front-end React developer with a
          strong focus on creating beautiful, responsive user interfaces. With 6
          months of experience under my belt, I've gained expertise in building
          dynamic and interactive web applications using React, Redux, HTML,
          CSS, Bootstrap and JavaScript. I enjoy working collaboratively with
          cross-functional teams, communicating technical concepts to both
          technical and non-technical stakeholders, and delivering high-quality
          work in a fast-paced environment. I'm always eager to learn and stay
          up-to-date with the latest industry trends and best practices. Whether
          it's building new features, refactoring existing code, or
          troubleshooting bugs, I'm committed to writing clean, efficient, and
          maintainable code that aligns with business objectives and end-user
          needs. If you're looking for a dedicated and enthusiastic junior
          front-end React developer to join your team, feel free to reach out
          and connect!
        </p>
        <div className="buttons-container">
          <a
            href={require("../cv/levan_mtchedlishvili.pdf")}
            download="Levan Mtchedlishvili CV"
          >
            <button className="cv-btn">Download CV</button>
          </a>
          <a
            href="https://www.linkedin.com/in/levan-mtchedlishvili-32a331222/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="linkedIn-btn">Linkedin</button>
          </a>
        </div>
      </div>

      <div className="react-title">
        <h2 className={`react-${theme.theme}`}>React Js Projects</h2>
        <div className="yellow-underline"></div>
      </div>

      <ReactProjects />
    </div>
  );
};

export default Home;
