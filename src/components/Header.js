import React, { useState } from "react";

import BrandIcon from "assets/images/dewe-tour-icon.png";
import User from "assets/images/user.png";

export default function Header() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={BrandIcon} alt="Brand Icon" width="190" height="68" />
          </a>

          <div className="auth">
            {IsLoggedIn ? (
              <img
                src={User}
                alt="user"
                width="50"
                height="50"
                onClick={handleSignOut}
              />
            ) : (
              <ul className="navbar-nav row g-2">
                <li className="nav-item col">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={handleSignIn}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item col">
                  <button type="button" className="btn btn-primary text-white">
                    Register
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
