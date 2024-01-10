import "./Home.css";

const Home = () => {
  const scrollDown = () => {
    document.body.scroll({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container-home" id="home">
        <span className="home-greetings home-content">Hi there,</span>
        <span className="home-introduction home-content">my name is J,</span>
        <div className="home-welcome home-content">
          and welcome to my website
        </div>
      </div>
      <div className="container-svgs-home">
        <svg
          height="20px"
          width="20px"
          version="1.1"
          id="arrow_down2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
          className="home-arrow"
          fill="white"
          onMouseOver={scrollDown}
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
          className="home-arrow"
          fill="white"
          onMouseOver={scrollDown}
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
          className="home-arrow"
          fill="white"
          onMouseOver={scrollDown}
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
    </>
  );
};

export default Home;