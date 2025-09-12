import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/bottom-nav.css";

const BottomNav = () => (
  <nav className="bottom-nav" role="navigation" aria-label="Bottom Navigation">
    <div className="bottom-nav__inner">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `bottom-nav__item${isActive ? " is-active" : ""}`
        }
        aria-label="Home"
      >
        <span className="bottom-nav__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
          >
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
          </svg>
        </span>
        <span className="bottom-nav__label">Home</span>
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) =>
          `bottom-nav__item${isActive ? " is-active" : ""}`
        }
        aria-label="Saved"
      >
        <span className="bottom-nav__icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
          </svg>
        </span>
        <span className="bottom-nav__label">Saved</span>
      </NavLink>
    </div>
  </nav>
);

export default BottomNav;
