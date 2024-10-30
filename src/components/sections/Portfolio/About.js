import "./About.css";
import { Link } from "react-router-dom";
import AboutLogoSVGList from "../Portfolio/AboutLogoSVGList";
const About = () => {
  return (
    <>
      <section className="container-about" id="about">
        <div className="about-title">About:</div>
        <div className="container-about-content">
          <div className="about-content">
            A passionate and creative web developer with a love for building
            innovative and user-friendly web applications. From an early age, I
            had a creative and curious mind and love for solving problems, and
            when I started learning about web development, my programming
            journey began.
          </div>
          <div className="about-content">
            Currently I’m focused on becoming a profound front-end developer
            using Javascript and its libraries such as React.js. Through coding,
            I'm able to create a unique design and interactive user interfaces
            to provide a satisfying user experience.
          </div>
          <div className="blogLink">
            <Link className="blogLink-link" to="//blog">
              To my blog...
            </Link>
          </div>
        </div>
        <AboutLogoSVGList />
      </section>
    </>
  );
};

export default About;
