import { useState, useEffect, useContext } from "react";
import { Modal, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";

import { AuthContext } from "contexts/AuthContext";

import BrandIcon from "assets/images/dewe-tour-icon.png";
import Avatar from "assets/images/user.png";
import Profile from "assets/icons/profile.svg";
import Pay from "assets/icons/pay.svg";
import Journey from "assets/icons/journey.svg";
import Logout from "assets/icons/logout.svg";

export default function Header() {
  const history = useHistory();

  const users = JSON.parse(localStorage.getItem("deweTourUsers"));

  const { stateAuth, dispatch } = useContext(AuthContext);

  // Create DidMount with useEffect inside it can print "App Component Did Mount" & state value here
  useEffect(() => {
    dispatch({ type: "AUTH" });
  }, []);

  const [show, setShow] = useState({
    login: false,
    register: false,
  });

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const [inputRegister, setInputRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleClose = () => {
    setShow({ login: false, register: false });
  };

  const handleShowLogin = () => {
    setShow((prevState) => ({ ...prevState, login: true }));
  };

  const handleShowRegister = () => {
    setShow((prevState) => ({ ...prevState, register: true }));
  };

  const handleSwitch = () => {
    if (show.login) {
      setShow({ login: false, register: true });
    } else {
      setShow({ login: true, register: false });
    }
  };

  const handleLoginChange = (e) => {
    setInputLogin((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRegisterChange = (e) => {
    setInputRegister((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(inputRegister);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    users.push({
      id: Date.now(),
      fullname: inputRegister.fullname,
      email: inputRegister.email,
      password: inputRegister.password,
      phone: inputRegister.phone,
      address: inputRegister.address,
      role: "client",
    });

    localStorage.setItem("deweTourUsers", JSON.stringify(users));

    handleClose();

    alert("Register Successful");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    for (let user of users) {
      if (
        inputLogin.email === user.email &&
        inputLogin.password === user.password
      ) {
        dispatch({
          type: "LOGIN",
          payload: {
            ...user,
          },
        });

        handleClose();

        return alert("Login Successful");
      }
    }

    alert("Sorry, your email or your password is invalid");
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    history.push("/");
  };

  return (
    <header className="header position-relative">
      <nav className="navbar navbar-expand-lg navbar-light position-absolute w-100">
        <div className="container">
          <div
            className="navbar-brand"
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={BrandIcon} alt="Brand Icon" width="190" height="68" />
          </div>

          <div className="auth">
            {stateAuth.isLogin ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle as="a" id="dropdown-basic">
                    <img src={Avatar} alt="user" width="50" height="50" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {stateAuth.user.role === "admin" ? (
                      <>
                        <Dropdown.Item
                          onClick={() => {
                            history.push("/list-transaction");
                          }}
                        >
                          <img
                            src={Journey}
                            alt="user"
                            width="20"
                            height="20"
                          />
                          <span className="fw-bold ms-2">Trip</span>
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                        <Dropdown.Item
                          onClick={() => {
                            history.push("/profile");
                          }}
                        >
                          <img
                            src={Profile}
                            alt="user"
                            width="20"
                            height="20"
                          />
                          <span className="fw-bold ms-2">Profile</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            history.push("/payment");
                          }}
                        >
                          <img src={Pay} alt="pay" width="20" height="20" />
                          <span className="fw-bold ms-2">Pay</span>
                        </Dropdown.Item>
                      </>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>
                      <img src={Logout} alt="logout" width="20" height="20" />
                      <span className="fw-bold ms-2">Logout</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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

            <Modal show={show.login} onHide={handleClose} centered>
              <Modal.Body className="p-4" style={{ width: 416 }}>
                <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Login</h4>
                <form onSubmit={handleLogin}>
                  <label htmlFor="emailLogin" className="fw-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mb-4 form-control"
                    onChange={handleLoginChange}
                    value={inputLogin.email}
                  />
                  <label htmlFor="password" className="fw-bold mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mb-4 form-control"
                    onChange={handleLoginChange}
                    value={inputLogin.password}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 fw-bold mb-3"
                  >
                    Login
                  </button>
                  <div className="tag-line text-muted text-center">
                    Don't have an account?{" "}
                    <span
                      className="link text-primary text-decoration-underline"
                      onClick={handleSwitch}
                    >
                      Click here
                    </span>
                  </div>
                </form>
              </Modal.Body>
            </Modal>

            <Modal show={show.register} onHide={handleClose} centered>
              <Modal.Body className="p-4" style={{ width: 416 }}>
                <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Register</h4>
                <form onSubmit={handleRegister}>
                  <label htmlFor="fullname" className="fw-bold mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    className="mb-4 form-control"
                    onChange={handleRegisterChange}
                    value={inputRegister.fullname}
                  />
                  <label htmlFor="email" className="fw-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mb-4 form-control"
                    onChange={handleRegisterChange}
                    value={inputRegister.email}
                  />
                  <label htmlFor="password" className="fw-bold mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mb-4 form-control"
                    onChange={handleRegisterChange}
                    value={inputRegister.password}
                  />
                  <label htmlFor="phone" className="fw-bold mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="number"
                    className="mb-4 form-control"
                    onChange={handleRegisterChange}
                    value={inputRegister.phone}
                  />
                  <label htmlFor="address" className="fw-bold mb-2">
                    Address
                  </label>
                  <textarea
                    id="address"
                    type="number"
                    className="mb-4 form-control"
                    onChange={handleRegisterChange}
                    value={inputRegister.address}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 fw-bold mb-3"
                  >
                    Register
                  </button>
                  <div className="tag-line text-muted text-center">
                    Have an account?{" "}
                    <span
                      className="link text-primary text-decoration-underline"
                      onClick={handleSwitch}
                    >
                      Click here
                    </span>
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
