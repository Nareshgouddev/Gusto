import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate(); //

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-sub">Sign in to continue to your account.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="label-text">Email</span>
            <input type="email" name="email" placeholder="jane@example.com" />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>

          <button className="btn primary" type="submit">
            Sign in
          </button>

          <p className="auth-foot">
            Don't have an account? <a href="/user/register">Create one</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default UserLogin;
