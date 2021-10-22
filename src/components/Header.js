import React, { useState } from "react";

import { Modal, Image } from "react-bootstrap";

import BrandIcon from "assets/images/dewe-tour-icon.png";
import Avatar from "assets/images/user.png";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleSwitchRegister = () => {
    setShowLogin(false);
  };

  const handleSignIn = () => {
    setShowLogin(false);
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
            {isLoggedIn ? (
              <>
                <Image
                  src={Avatar}
                  alt="user"
                  width="50"
                  height="50"
                  onClick={handleSignOut}
                />
              </>
            ) : (
              <ul className="navbar-nav row g-2">
                <li className="nav-item col">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={handleShowLogin}
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

            <Modal show={showLogin} onHide={handleClose} centered>
              <Modal.Body className="p-4">
                <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Login</h4>
                <label htmlFor="email" className="fw-bold mb-2">
                  Email
                </label>
                <input id="email" type="email" className="mb-4 form-control" />
                <label htmlFor="password" className="fw-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  className="mb-4 form-control"
                  type="password"
                />
                <button
                  type="submit"
                  className="btn btn-primary text-white w-100 fw-bold mb-3"
                  onClick={handleSignIn}
                >
                  Login
                </button>
                <div
                  className="text-muted text-center"
                  style={{ fontSize: 14 }}
                >
                  Don't have an account?{" "}
                  <a href="#" onClick={handleSwitchRegister}>
                    Click here
                  </a>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
    </header>
  );
}
