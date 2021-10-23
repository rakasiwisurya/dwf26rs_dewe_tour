import React, { useState } from "react";

import { Modal, Image } from "react-bootstrap";

import BrandIcon from "assets/images/dewe-tour-icon.png";
import Avatar from "assets/images/user.png";

export default function Header() {
  const users = JSON.parse(localStorage.getItem("deweTourUsers"));

  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    showRegister: false,
    showLogin: false,
    isLogin: false,
  });

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      showLogin: false,
      showRegister: false,
    }));
  };

  const handleShowLogin = () => {
    setState((prevState) => ({ ...prevState, showLogin: true }));
  };

  const handleShowRegister = () => {
    setState((prevState) => ({ ...prevState, showRegister: true }));
  };

  const handleOnChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    users.push({
      id: Date.now(),
      fullname: state.fullname,
      email: state.email,
      password: state.password,
      phone: state.phone,
      address: state.address,
    });

    localStorage.setItem("deweTourUsers", JSON.stringify(users));

    alert("Register Successful");

    handleSwitch();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    for (let user of users) {
      if (state.email === user.email && state.password === user.password) {
        setState((prevState) => ({
          ...prevState,
          showLogin: false,
          isLogin: true,
        }));
        return alert("Login Successful");
      }
    }

    alert("Sorry, your email or your password is invalid");
  };

  const handleLogout = () => {
    setState((prevState) => ({ ...prevState, isLogin: false }));
  };

  const handleSwitch = () => {
    if (state.showLogin) {
      setState((prevState) => ({
        ...prevState,
        showLogin: false,
        showRegister: true,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        showLogin: true,
        showRegister: false,
      }));
    }
  };

  return (
    <header className="header position-relative">
      <nav className="navbar navbar-expand-lg navbar-light position-absolute w-100">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={BrandIcon} alt="Brand Icon" width="190" height="68" />
          </a>

          <div className="auth">
            {state.isLogin ? (
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
                  <button
                    type="button"
                    className="btn btn-primary text-white"
                    onClick={handleShowRegister}
                  >
                    Register
                  </button>
                </li>
              </ul>
            )}

            <Modal show={state.showLogin} onHide={handleClose} centered>
              <Modal.Body className="p-4">
                <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Login</h4>
                <form onSubmit={handleLogin}>
                  <label htmlFor="email" className="fw-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mb-4 form-control"
                    value={state.email}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="password" className="fw-bold mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mb-4 form-control"
                    value={state.password}
                    onChange={handleOnChange}
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
                    <a href="#" onClick={handleSwitch}>
                      Click here
                    </a>
                  </div>
                </form>
              </Modal.Body>
            </Modal>

            <Modal show={state.showRegister} onHide={handleClose} centered>
              <Modal.Body className="p-4">
                <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Register</h4>
                <form onSubmit={handleRegister}>
                  <label htmlFor="fullname" className="fw-bold mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    className="mb-4 form-control"
                    value={state.fullname}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="email" className="fw-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mb-4 form-control"
                    value={state.email}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="password" className="fw-bold mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mb-4 form-control"
                    value={state.password}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="phone" className="fw-bold mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="number"
                    className="mb-4 form-control"
                    value={state.phone}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="address" className="fw-bold mb-2">
                    Address
                  </label>
                  <textarea
                    id="address"
                    type="number"
                    className="mb-4 form-control"
                    value={state.address}
                    onChange={handleOnChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 fw-bold mb-3"
                  >
                    Register
                  </button>
                  <div
                    className="text-muted text-center"
                    style={{ fontSize: 14 }}
                  >
                    Have an account?{" "}
                    <a href="#" onClick={handleSwitch}>
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
