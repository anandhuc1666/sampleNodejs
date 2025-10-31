import axios from "axios";
import React from "react";
import { useState } from "react";

function Login() {
  const [int, setInt] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setInt({ ...int, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    try {
      const response = axios(`http://localhost:3000/user/register`, int);
      alert("user login successfully")
        .then(() => console.log(response.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(int);
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="enter your email"
          value={int.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter your password"
          value={int.password}
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>login</button>
      </form>
    </div>
  );
}

export default Login;
