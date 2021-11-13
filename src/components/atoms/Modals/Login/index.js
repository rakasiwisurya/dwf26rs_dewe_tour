import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";

import { API, setAuthToken } from "config/api";

import { AuthContext } from "contexts/AuthContext";

import { NotificationManager } from "react-notifications";

export default function Login({ show, handleClose, handleSwitch }) {
  const { dispatch } = useContext(AuthContext);

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setInputLogin((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Convert form data login to string here ...
      const body = JSON.stringify(inputLogin);

      // validate data user from database here ...
      const response = await API.post("/login", body, config);
      setAuthToken(response.data.data.token);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
        NotificationManager.success(response.data.message, "Success");
        handleClose();

        window.location.reload();
      }
    } catch (error) {
      if (error) throw error;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="p-4" style={{ width: 416 }}>
        <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Login</h4>
        <form action="" onSubmit={handleLogin}>
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
  );
}
