import "./App.css";
import Navbar from "./components/Navbar.js";
import Portfolio from "./components/pages/portfolio.js";
import Blog from "./components/pages/blog.js";
import About from "./components/sections/About.js";
import Home from "./components/sections/Home.js";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SeasonBackground from "./components/SeasonBackground/SeasonBackground";
import { useParams } from "react-router-dom";
import SignUp from "./components/pages/SignUp.js";
import { useState } from "react";
import SignInPage from "./components/pages/SignInPage.js";

function App() {
  const { name } = useParams();
  const [signedInUser, setSignedInUser] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <SeasonBackground />
      <Navbar
        signedInUser={signedInUser}
        setSignedInUser={setSignedInUser}
        signedIn={signedIn}
        setSignedIn={setSignedIn}
      />
      {name === "blog" ? (
        <Blog />
      ) : name == "sign-up" ? (
        <SignUp />
      ) : name == "sign-in" ? (
        <SignInPage
          setSignedInUser={setSignedInUser}
          setSignedIn={setSignedIn}
        />
      ) : (
        <Portfolio />
      )}
      <Footer />
    </>
  );
}

export default App;
