import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function Example02() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("ارسال پست با موفقیت انجام شد");
        }
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="Title ..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="email"
            placeholder="Body ..."
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <button onClick={registerHandler}>Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Example02;
