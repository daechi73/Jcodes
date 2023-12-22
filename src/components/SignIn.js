import React from "react";
import { useEffect, useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        }
        console.log(res);
      });
  };
  const handleUserNameInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="signIn">
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
  );
}

export default SignIn;
