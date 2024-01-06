import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const handleUsernameChange = (e) => setUserName(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmitBtn = () => {
    const options = {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
        name: name,
      }),
    };
    fetch("http://localhost:3000/users/sign-up", options)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          navigate("/Jcodes/");
        } else {
          setMessage(res.errors);
        }
      });
  };
  const renderMessages = message.map((e, i) => {
    return (
      <div className="signup-message" key={i}>
        {e.msg}
      </div>
    );
  });

  console.log(message);
  return (
    <div className="container-signup">
      <div className="signup-title">Sign Up</div>
      <div className="signup-form">
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="user name"
          onChange={handleUsernameChange}
          value={userName}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="password"
          name="passwowrd"
          id="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={password}
        />

        <button onClick={handleSubmitBtn}>Sign up</button>
        <div className="signup-messages">{renderMessages}</div>
      </div>
    </div>
  );
}

export default SignUp;
