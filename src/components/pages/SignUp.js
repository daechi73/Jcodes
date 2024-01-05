import React from "react";
import { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-signup">
      <div className="signup-title">Sign Up</div>
      <div className="signup-form">
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="user name"
        />
        <input type="text" name="name" id="name" placeholder="name" />
        <input
          type="password"
          name="passwowrd"
          id="password"
          placeholder="password"
        />
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default SignUp;
