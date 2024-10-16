import "./Projects.css";

const Projects = () => {
  return (
    <section className="container-projects" id="projects">
      <div className="projects-title">Projects:</div>
      <div className="projects">
      <article className="project-faceSpace project">
          <summary className="projectSum">
            <div className="projectName">FaceSpace</div>
            <div className="projectDesc">
              Social media where people get together in simplicity.
            </div>
            <div className="project-links">
              <div className="project-links">
                <div className="project-github">
                  <a
                    href="https://github.com/daechi73/FaceSpace"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  </a>
                </div>
                <div className="project-live ">
                  <a
                    href="https://facespace.onrender.com/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 72 72"
                      id="emoji"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="color">
                        <circle cx="36" cy="36.0001" r="28" fill="#d22f27" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </summary>
          <figure className="container-img">
            <img
              className="img-potville project-img"
              src={require("../../../assets/imgs/FaceSpace2.png")}
            />
          </figure>
        </article>
        <article className="project-potville project">
          <summary className="projectSum">
            <div className="projectName">Potville</div>
            <div className="projectDesc">
              Shopping site built using Vite React.js
            </div>
            <div className="project-links">
              <div className="project-links">
                <div className="project-github">
                  <a
                    href="https://github.com/daechi73/Potville"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  </a>
                </div>
                <div className="project-live ">
                  <a
                    href="https://daechi73.github.io/Potville/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 72 72"
                      id="emoji"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="color">
                        <circle cx="36" cy="36.0001" r="28" fill="#d22f27" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </summary>
          <figure className="container-img">
            <img
              className="img-potville project-img"
              src={require("../../../assets/imgs/Potville.png")}
            />
          </figure>
        </article>
        <article className="project-battleShip project">
          <summary className="projectSum">
            <div className="projectName">BattleShip:</div>
            <div className="projectDesc">
              An online board game. Position your ships and battle your enemy!
            </div>
            <div className="project-links">
              <div className="project-links">
                <div className="project-github">
                  <a
                    href="https://github.com/daechi73/battleShip"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  </a>
                </div>
                <div className="project-live ">
                  <a
                    href="https://daechi73.github.io/battleShip/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 72 72"
                      id="emoji"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="color">
                        <circle cx="36" cy="36.0001" r="28" fill="#d22f27" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </summary>
          <figure className="container-img">
            <img
              className="img-battleShip project-img"
              src={require("../../../assets/imgs/battleShip.png")}
            />
          </figure>
        </article>
        <article className="project-weatherApp project">
          <summary className="projectSum">
            <div className="projectName">Weather App:</div>
            <div className="projectDesc">
              Shows the weather of any city or country.
            </div>
            <div className="project-links">
              <div className="project-links">
                <div className="project-github">
                  <a
                    href="https://github.com/daechi73/weatherAPI"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  </a>
                </div>
                <div className="project-live ">
                  <a
                    href="https://daechi73.github.io/weatherAPI/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 72 72"
                      id="emoji"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="color">
                        <circle cx="36" cy="36.0001" r="28" fill="#d22f27" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </summary>
          <figure className="container-img">
            <img
              className="img-weatherApp project-img"
              src={require("../../../assets/imgs/weatherApp.png")}
            />
          </figure>
        </article>
        <article className="project-toDoList project">
          <summary className="projectSum">
            <div className="projectName">To Do List:</div>
            <div className="projectDesc">
              Organize your daily tasks through ToDoList!
            </div>
            <div className="project-links">
              <div className="project-github">
                <a
                  href="https://www.github.com/daechi73/ToDolist"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </a>
              </div>
              <div className="project-live ">
                <a
                  href="https://daechi73.github.io/TodoList/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 72 72"
                    id="emoji"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="color">
                      <circle cx="36" cy="36.0001" r="28" fill="#d22f27" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </summary>
          <figure className="container-img">
            <img
              className="img-toDoList project-img"
              src={require("../../../assets/imgs/TodoList.png")}
            />
          </figure>
        </article>
      </div>
      <div className="container-repository-link">
        <a
          className="repository-link"
          href="https://github.com/daechi73?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
