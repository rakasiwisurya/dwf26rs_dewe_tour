import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";

import { API } from "config/api";

import { AuthContext } from "contexts/AuthContext";

export default function Login({ show, handleClose, handleSwitch }) {
  // const users = JSON.parse(localStorage.getItem("deweTourUsers"));

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

      // Convert form data to string here ...
      const body = JSON.stringify(inputLogin);

      // Insert data user to database here ...
      const response = await API.post("/login", body, config);

      // console.log(response?.data.data);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
        alert(response.data.message);
        handleClose();
      }
    } catch (error) {
      if (error) throw error;
    }

    // for (let user of users) {
    //   if (
    //     inputLogin.email === user.email &&
    //     inputLogin.password === user.password
    //   ) {
    //     dispatch({
    //       type: "LOGIN",
    //       payload: {
    //         ...user,
    //       },
    //     });

    //     handleClose();

    //     return alert("Login Successful");
    //   }
    // }

    // alert("Sorry, your email or your password is invalid");
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
