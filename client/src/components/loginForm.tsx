import React from "react";
import "../styles/login.css";

const LoginForm: React.FC = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>

      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="login-links">
        <a href="#">Forgot password?</a>
        <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default LoginForm;