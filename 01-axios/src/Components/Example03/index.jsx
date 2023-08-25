import React, { useState } from "react";
import axiosInstance1 from "../../config/axiosInstance1";
import "./index.css";

function Example03() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    axiosInstance1
      .post("/users", {
        name,
        email,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("ثبت نام با موفقیت انجام شد");
        }
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="Name ..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email ..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button onClick={registerHandler}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Example03;
