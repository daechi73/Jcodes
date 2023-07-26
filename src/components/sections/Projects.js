import "./Projects.css";

const Projects = () => {
  return (
    <section className="container-projects">
      <div className="projects-title">Projects:</div>
      <div className="projects">
        <article className="project-calculator project">
          <summary className="projectDesc">
            <div className="projectName">Calculator:</div>
            Simple calculator with basic calculation functions.
          </summary>
          <figure className="container-img-calculator">
            <img
              className="img-calculator img"
              src={require("../../assets/imgs/calculator.png")}
            />
          </figure>
        </article>
        <article className="project-reactWebsite project">
          <summary className="projectDesc">
            <div className="projectName">React Website:</div>
            Simple React Website that implements reusable components.
          </summary>
          <figure className="container-img-reactWebsite">
            <img
              className="img-reactWebsite img"
              src={require("../../assets/imgs/react-website.png")}
            />
          </figure>
        </article>
        <article className="project-battleShip project">
          <summary className="projectDesc">
            <div className="projectName">BattleShip:</div>
            An online board game. Position your ships and battle your enemy!
          </summary>
          <figure className="container-img-battleShip">
            <img
              className="img-battleShip img"
              src={require("../../assets/imgs/battleShip.png")}
            />
          </figure>
        </article>
        <article className="project-weatherApp project">
          <summary className="projectDesc">
            <div className="projectName">weather App:</div>
            Shows the weather of any city or country.
          </summary>
          <figure className="container-img-weatherApp">
            <img
              className="img-weatherApp img"
              src={require("../../assets/imgs/weatherApp.png")}
            />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default Projects;
