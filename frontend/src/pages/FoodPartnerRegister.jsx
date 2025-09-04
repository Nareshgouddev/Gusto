import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const contactName = e.target.contactName.value;
    const address = e.target.address.value;
    const Phone = e.target.Phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/foodpartner/register",
        {
          fullName,
          contactName,
          address,
          Phone,
          email,
          password,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        navigate("/create-food");
      }
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Partner sign up</h1>
        <p className="auth-sub">For restaurants and delivery partners.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="label-text">Full name</span>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Jordan Smith"
              aria-label="Full name"
            />
          </label>

          <label className="field">
            <span className="label-text">Contact name</span>
            <input
              type="text"
              name="contactName"
              placeholder="Primary contact (if different)"
              aria-label="Contact name"
            />
          </label>

          <label className="field">
            <span className="label-text">Address</span>
            <textarea
              name="address"
              placeholder="Street, city, state, postcode"
              rows={3}
            />
          </label>

          <label className="field">
            <span className="label-text">Phone number</span>
            <input
              type="tel"
              name="phone"
              placeholder="+1 555-555-5555"
              aria-label="Phone number"
            />
          </label>

          <label className="field">
            <span className="label-text">Email</span>
            <input
              type="email"
              name="email"
              placeholder="owner@example.com"
              aria-label="Email address"
            />
          </label>

          <label className="field">
            <span className="label-text">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              aria-label="Password"
            />
          </label>

          <button className="btn primary" type="submit">
            Create partner account
          </button>

          <p className="auth-foot">
            Already registered? <a href="/food-partner/login">Sign in</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default FoodPartnerRegister;
