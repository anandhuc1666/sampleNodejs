import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [int, setInt] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInt({ ...int, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:3000/user/login", int);
      alert("User login successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={int.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={int.password}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={int.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your number"
          name="number"
          value={int.number}
          onChange={handleChange}
        /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
