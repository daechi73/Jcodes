import React from "react";
import "./SignInPage.css";
import { useState } from "react";

function SignInPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordInputChange = (e) => {
    setPassword(e);
  };
  const handleUserNameInputChange = (e) => {
    setUserName(e);
  };

  const handleSubmitBtn = () => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch("http://localhost:3000/users/sign-in", options)
      .then((res) => {
        res.json();
      })
      .then((res) => {});
  };

  return (
    <div className="container-signInPage">
      <div className="signInPage-title">Sign Up</div>
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
        <button onClick={handleSubmitBtn}>Sign up</button>
        {/* <div className="signInPage-messages">{renderMessages}</div> */}
      </div>
    </div>
  );
}

export default SignInPage;
