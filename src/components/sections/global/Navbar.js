import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Navbar.css";
import SignIn from "./SignIn";
import NavBarArrowSVG from "./NavBarArrowSVG";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { name } = useParams();
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
            <NavBarArrowSVG
              handleClick={handleClick}
              click={click}
              className="arrow_down_active1"
              altClassName="arrow_down"
              begin=""
            />
            <NavBarArrowSVG
              handleClick={handleClick}
              click={click}
              className="arrow_down_active2"
              altClassName="arrow_down"
              begin="0.2"
            />
            <NavBarArrowSVG
              handleClick={handleClick}
              click={click}
              className="arrow_down_active3"
              altClassName="arrow_down"
              begin="0.3"
            />
            <NavBarArrowSVG
              handleClick={handleClick}
              click={click}
              className="arrow_down_active4"
              altClassName="arrow_down_hidden"
              begin="0.4"
            />
            <NavBarArrowSVG
              handleClick={handleClick}
              click={click}
              className="arrow_down_active5"
              altClassName="arrow_down_hidden"
              begin="0.5"
            />
          </div>

          <ul className={click ? "dropDownList-active" : "dropDownList"}>
            <li className="nav-li">
              <a
                onClick={handleClick}
                href={name === undefined ? "#root" : "/#root"}
                className={click ? "navLink" : "navLink-hidden"}
              >
                Home
              </a>
            </li>
            {name === undefined ? (
              <>
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
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </ul>
      <SignIn
        signedInUser={props.signedInUser}
        setSignedInUser={props.setSignedInUser}
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
    </nav>
  );
};

export default Navbar;
