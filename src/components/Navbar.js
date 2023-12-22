import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import SignIn from "./SignIn";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <ul className="dropDownMenu">
        <div
          className="navbar-logo"
          onClick={handleClick}
          onMouseOver={handleClick}
          tabIndex={0}
        >
          J
        </div>

        <div className="container-svgs-list">
          <div className={click ? "container-svgs-active" : "container-svgs"}>
            <svg
              height="20px"
              width="20px"
              version="1.1"
              id="arrow_down2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              className={
                click ? "arrow_down_active1 arrow_down_active" : "arrow_down"
              }
              fill="white"
              onClick={handleClick}
            >
              <animate
                attributeType="XML"
                attributeName="fill"
                values="#45A29E;transparent"
                dur="0.9s"
                repeatCount="indefinite"
              />
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
            <svg
              height="20px"
              width="20px"
              version="1.1"
              id="arrow_down2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              className={
                click ? "arrow_down_active2 arrow_down_active" : "arrow_down"
              }
              fill="white"
              onClick={handleClick}
            >
              <animate
                attributeType="XML"
                attributeName="fill"
                values="#45A29E;transparent"
                begin="0.2s"
                dur="0.9s"
                repeatCount="indefinite"
              />
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
            <svg
              version="1.1"
              id="arrow_down3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              className={
                click ? "arrow_down_active3 arrow_down_active" : "arrow_down"
              }
              fill="white"
              onClick={handleClick}
            >
              <animate
                attributeType="XML"
                attributeName="fill"
                values="#45A29E;transparent"
                begin="0.3s"
                dur="0.9s"
                repeatCount="indefinite"
              />
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
            <svg
              version="1.1"
              id="arrow_down3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              className={
                click
                  ? "arrow_down_active4 arrow_down_active"
                  : "arrow_down_hidden"
              }
              fill="white"
              onClick={handleClick}
            >
              <animate
                attributeType="XML"
                attributeName="fill"
                values="#45A29E;transparent"
                begin="0.4s"
                dur="0.9s"
                repeatCount="indefinite"
              />
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
            <svg
              version="1.1"
              id="arrow_down3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              className={
                click
                  ? "arrow_down_active5 arrow_down_active"
                  : "arrow_down_hidden"
              }
              fill="white"
              onClick={handleClick}
            >
              <animate
                attributeType="XML"
                attributeName="fill"
                values="#45A29E;transparent"
                begin="0.5s"
                dur="0.9s"
                repeatCount="indefinite"
              />
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </div>

          <ul className={click ? "dropDownList-active" : "dropDownList"}>
            <li className="nav-li">
              <a
                onClick={handleClick}
                href="#"
                className={click ? "navLink" : "navLink-hidden"}
              >
                Home
              </a>
            </li>
            <li className="nav-li">
              <a
                onClick={handleClick}
                href="#about"
                className={click ? "navLink" : "navLink-hidden"}
              >
                About
              </a>
            </li>
            <li className="nav-li">
              <a
                onClick={handleClick}
                href="#projects"
                className={click ? "navLink" : "navLink-hidden"}
              >
                Projects
              </a>
            </li>
            <li className="nav-li">
              <a
                onClick={handleClick}
                href="#contact"
                className={click ? "navLink" : "navLink-hidden"}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </ul>
      <SignIn />
    </nav>
  );
};

export default Navbar;
