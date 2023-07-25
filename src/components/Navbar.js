import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
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
              className={click ? "arrow_down_active1" : "arrow_down"}
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
              className={click ? "arrow_down_active2" : "arrow_down"}
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
              className={click ? "arrow_down_active3" : "arrow_down"}
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
          </div>

          {/* <svg
            height="20px"
            width="20px"
            version="1.1"
            id="arrow_down"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.035 512.035"
            onClick={handleClick}
          >
            <g transform="translate(1 1)">
              <path
                style={{ fill: "" }}
                d="M340.351,169.701v214.187l-81.067,116.907c-2.56,2.56-5.973,2.56-7.68,0l-81.92-116.907V33.168
		l81.067,93.867c2.56,2.56,5.973,2.56,7.68,0l81.92-93.867v68.267V169.701z"
              />
              <animate
                attributeType="XML"
                attributeName="fill"
                values="#45A29E;transparent"
                dur="0.8s"
                repeatCount="indefinite"
              />
              <path
                d="M340.351,36.581v64.853v68.267v214.187l-81.067,116.907c-1.707,0.853-2.56,1.707-4.267,1.707
		c1.707,0,3.413-0.853,5.12-1.707l105.813-116.907V169.701v-68.267V7.568L340.351,36.581z"
              />

              <path
                d="M169.684,383.888V36.581l-25.6-29.013v376.32l105.813,116.907c1.707,0.853,3.413,1.707,5.12,1.707
		c-1.707,0-2.56-0.853-4.267-1.707L169.684,383.888z"
              />
              <path
                d="M255.017,511.035c-3.413,0-7.68-0.853-10.24-3.413l-0.853-0.853L138.111,389.861c-1.707-1.707-2.56-4.267-2.56-5.973V7.568
		c0-3.413,2.56-6.827,5.12-7.68c3.413-1.707,7.68-0.853,9.387,1.707l104.96,118.613L359.977,1.595
		c1.707-2.56,5.973-3.413,9.387-1.707c2.56,0.853,5.12,4.267,5.12,7.68v93.867c0,5.12-3.413,8.533-8.533,8.533
		c-5.12,0-8.533-3.413-8.533-8.533v-71.68l-90.453,102.4l-0.853,0.853c-5.973,5.12-14.507,5.12-20.48,0
		c-0.853,0-0.853-0.853-0.853-0.853l-92.16-102.4v350.72l102.4,113.493l102.4-113.493V169.701c0-5.12,3.413-8.533,8.533-8.533
		c5.12,0,8.533,3.413,8.533,8.533v214.187c0,1.707-0.853,4.267-2.56,5.973l-104.96,116.907l-0.853,0.853
		C262.697,510.181,258.431,511.035,255.017,511.035z"
              />

              <path
                d="M365.951,144.101c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533
		S360.831,144.101,365.951,144.101"
              />
            </g>
          </svg> */}
          <ul className={click ? "dropDownList-active" : "dropDownList"}>
            <li className="nav">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="">
              <a href="#about" className="navLink">
                About
              </a>
            </li>
            <li className="">
              <a href="#" className="navLink">
                Projects
              </a>
            </li>
            <li className="">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
