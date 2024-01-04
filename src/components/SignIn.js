import React from "react";
import { useEffect, useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [signedInUser, setSignedInUser] = useState("");
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
    fetch("http://localhost:3000/users/sign-up", options)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setUsername("");
          setPassword("");
          setSignedIn(true);
          setSignedInUser(res.user.user_name);
        } else {
          changeMessageColor("red");
          setMessage(res);
        }
      });
  };

  const handleSignout = () => {
    fetch("http://localhost:3000/users/sign-out", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setSignedIn(false);
          setSignedInUser("");
          changeMessageColor("green");
          setMessage("success");
        }
      });
  };
  const handleUserNameInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };
  return signedIn ? (
    <div className="signedInMenu">
      <div className="signedIn-username-label">User:</div>
      <div className="signedIn-username-value">{signedInUser}</div>
      <button onClick={handleSignout}>Sign-out</button>
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
        <button onClick={handleSignin}>SignIn</button>
      </div>
      <div>
        <div className="form-message" style={messageColor}>
          {message}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
