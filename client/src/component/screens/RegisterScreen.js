import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, SetComfirmPassword] = useState("");

  return (
    <div className="register-screen">
      <form className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        <div className="form-group">
          <label htmlFor="name">Username: </label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            required
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">confirm password: </label>
          <input
            type="password"
            required
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => SetComfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          {" "}
          Register
        </button>

        <span className="Aleady have a account">
          {" "}
          Already have an account? <Link>Sign in </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
