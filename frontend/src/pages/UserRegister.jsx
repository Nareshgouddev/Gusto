import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        {
          fullName: `${firstName} ${lastName}`,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      Navigate("/");

      if (res.status === 201 || res.status === 200) {
        setMessage("✅ Account created successfully!");
        e.target.reset(); // clear form
      }
    } catch (error) {
      if (error.response) {
        // Backend responded with an error
        setMessage(
          `❌ ${error.response.data.message || "Registration failed"}`
        );
      } else if (error.request) {
        // No response from server
        setMessage("❌ Cannot connect to server. Is backend running?");
      } else {
        setMessage("❌ Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-sub">For customers — simple, quick signup.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label className="field">
              <span className="label-text">First name</span>
              <input type="text" name="firstName" placeholder="Jane" required />
            </label>

            <label className="field">
              <span className="label-text">Last name</span>
              <input type="text" name="lastName" placeholder="Doe" required />
            </label>
          </div>

          <label className="field">
            <span className="label-text">Email</span>
            <input
              type="email"
              name="email"
              placeholder="jane@example.com"
              required
            />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              required
              minLength={8}
            />
          </label>

          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </button>

          {message && (
            <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
          )}

          <p className="auth-foot">
            Already have an account? <a href="/user/login">Sign in</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default UserRegister;
