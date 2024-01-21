import "./Home.css";
import HomeArrowSVG from "./HomeArrowSVG";

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
        <HomeArrowSVG scrollDown={scrollDown} />
        <HomeArrowSVG scrollDown={scrollDown} begin="2s" />
        <HomeArrowSVG scrollDown={scrollDown} begin="3s" />
      </div>
    </>
  );
};

export default Home;
