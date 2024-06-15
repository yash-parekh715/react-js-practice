import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import "../index.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="ml-[24rem] mb-[1.5rem]">
      <h2 className="ml-[12.75rem]">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="   username"
        className="mr-[0.25rem] rounded-sm"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="   password"
        className="mr-[0.5rem] rounded-sm"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
