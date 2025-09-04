import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/foodpartner/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        navigate("/create-food");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Partner sign in</h1>
        <p className="auth-sub">Access your partner dashboard.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="label-text">Email</span>
            <input type="email" name="email" placeholder="owner@example.com" />
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
            Need an account? <a href="/food-partner/register">Register</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default FoodPartnerLogin;
