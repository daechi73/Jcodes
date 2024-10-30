import React from "react";
import "./SignInPage.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignInPage(props) {
  const nagivate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState("");

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserNameInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmitBtn = () => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch("https://-blog-authentication.onrender.com/users/sign-in", options)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setUserName("");
          setPassword("");
          setMessages("");
          props.setSignedIn(true);
          props.setSignedInUser(res.user);
          nagivate("//");
        } else {
          setMessages(res);
        }
      });
  };

  return (
    <div className="container-signInPage">
      <div className="signInPage-title">Sign In</div>
      <div className="signInPage-form">
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
          placeholder="password"
          name="password"
          onChange={handlePasswordInputChange}
          value={password}
          required
        />
        <Link
          className="signInPage-sign-up-link sign-up-link clickable"
          to="//sign-up"
        >
          Sign up
        </Link>
        <button onClick={handleSubmitBtn}>Sign in</button>
        <div className="signInPage-message">{messages}</div>
      </div>
    </div>
  );
}

export default SignInPage;
