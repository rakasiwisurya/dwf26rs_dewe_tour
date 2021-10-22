import React, { useState } from "react";

import { Modal, Image } from "react-bootstrap";

import BrandIcon from "assets/images/dewe-tour-icon.png";
import Avatar from "assets/images/user.png";

export default function Header() {
  const dataUsers = JSON.parse(localStorage.getItem("deweTourUsers"));

  const [login, setLogin] = useState({ showLogin: false, isLogin: false });
  const [users, setUsers] = useState(dataUsers);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleClose = () => {
    setLogin((previousState) => {
      return { ...previousState, showLogin: false };
    });
  };

  const handleShowLogin = () => {
    setLogin((previousState) => {
      return { ...previousState, showLogin: true };
    });
  };

  const handleEmail = (event) => {
    setForm((previousState) => {
      return { ...previousState, email: event.target.value };
    });
  };

  const handlePassword = (event) => {
    setForm((previousState) => {
      return { ...previousState, password: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let user of users) {
      if (form.email === user.email && form.password === user.password) {
        setLogin((previousState) => {
          return { ...previousState, showLogin: false, isLogin: true };
        });
        return alert("Login Successful");
      }
    }

    alert("Sorry, please check your email and password is valid");
  };

  const handleSwitchRegister = () => {
    setLogin((previousState) => {
      return { ...previousState, showLogin: false };
    });
  };

  const handleLogout = () => {
    setLogin((previousState) => {
      return { ...previousState, isLogin: false };
    });
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={BrandIcon} alt="Brand Icon" width="190" height="68" />
          </a>

          <div className="auth">
            {login.isLogin ? (
              <>
                <Image
                  src={Avatar}
                  alt="user"
                  width="50"
                  height="50"
                  onClick={handleLogout}
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

            <Modal show={login.showLogin} onHide={handleClose} centered>
              <Modal.Body className="p-4">
                <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Login</h4>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="fw-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mb-4 form-control"
                    value={form.email}
                    onChange={handleEmail}
                  />
                  <label htmlFor="password" className="fw-bold mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mb-4 form-control"
                    value={form.password}
                    onChange={handlePassword}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 fw-bold mb-3"
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
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
    </header>
  );
}
