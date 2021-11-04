import { useState } from "react";
import { Modal } from "react-bootstrap";

import { API } from "config/api";

export default function Register({ show, handleClose, handleSwitch }) {
  const [inputRegister, setInputRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "male",
    phone: "",
    address: "",
  });

  const handleRegisterChange = (e) => {
    setInputRegister((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(inputRegister);

      // Insert data user to database here ...
      const response = await API.post("/register", body, config);

      if (response.data.status === "success") {
        setInputRegister({
          fullname: "",
          email: "",
          password: "",
          gender: "male",
          phone: "",
          address: "",
        });
        handleClose();
        return alert(response.data.message);
      }

      // if (response?.status === 400) {
      //   return alert(response.data.message);
      // }
    } catch (error) {
      if (error) throw error;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="p-4" style={{ width: 416 }}>
        <h4 className="text-center mt-2 mb-4 fw-bold fs-3">Register</h4>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="fullname" className="fw-bold mb-2">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              className="form-control"
              onChange={handleRegisterChange}
              value={inputRegister.fullname}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="fw-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              onChange={handleRegisterChange}
              value={inputRegister.email}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="fw-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              onChange={handleRegisterChange}
              value={inputRegister.password}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender"></label>
            <select
              id="gender"
              className="form-control"
              onChange={handleRegisterChange}
              value={inputRegister.gender}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="fw-bold mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              className="mb-4 form-control"
              onChange={handleRegisterChange}
              value={inputRegister.phone}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="fw-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              type="number"
              className="mb-4 form-control"
              onChange={handleRegisterChange}
              value={inputRegister.address}
              required
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary text-white w-100 fw-bold"
            >
              Register
            </button>
          </div>

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
  );
}
