import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [messageColor, setMessageColor] = useState({ color: "red" });

  const changeMessageColor = (msgColor) => {
    setMessageColor({ color: msgColor });
  };
  const handleSignin = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
      mode: "cors",
    };
    fetch(
      "https://jcodes-blog-authentication.onrender.com/users/sign-in",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setUsername("");
          setPassword("");
          props.setSignedIn(true);
          props.setSignedInUser(res.user);
        } else {
          changeMessageColor("red");
          setMessage(res);
        }
      });
  };

  const handleSignout = () => {
    fetch(
      "https://jcode-blogs-authentication-proud-sunset-470.fly.dev/users/sign-out",
      {
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          props.setSignedIn(false);
          props.setSignedInUser("");
          changeMessageColor("green");
          setMessage("Log out success");
        }
      });
  };
  const handleUserNameInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };
  return props.signedIn ? (
    <div className="signedInMenu">
      <div className="signedIn-username-label">User:</div>
      <div className="signedIn-username-value">
        {props.signedInUser.user_name}
      </div>
      <button className="signOutBtn clickable" onClick={handleSignout}>
        Sign-out
      </button>
    </div>
  ) : (
    <div className="signIn">
      <div className="form">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleUserNameInputChange}
          value={username}
          required
        />
        <input
          type="password"
          placeholder="passwowrd"
          name="password"
          onChange={handlePasswordInputChange}
          value={password}
          required
        />
        <button className="signInBtn clickable" onClick={handleSignin}>
          SignIn
        </button>
      </div>
      <div>
        <div className="container-signUp-message">
          <div className="sign-up clickable">
            <Link className="sign-up-link" to="/Jcodes/sign-up">
              Sign up
            </Link>
          </div>
          <div className="form-message" style={messageColor}>
            {message}
          </div>
        </div>
      </div>
      <div className="smallMenu">
        <button className="signInBtn clickable">
          <Link to="/Jcodes/sign-in">Sign in</Link>
        </button>
        <button className="sign-up-btn clickable">
          <Link className="sign-up-link" to="/Jcodes/sign-up">
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
