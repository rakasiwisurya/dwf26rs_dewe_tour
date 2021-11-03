import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Register({ show, handleClose, handleSwitch }) {
  const users = JSON.parse(localStorage.getItem("deweTourUsers"));

  const [inputRegister, setInputRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

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
      role: "user",
    });

    localStorage.setItem("deweTourUsers", JSON.stringify(users));

    handleClose();

    alert("Register Successful");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
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
  );
}
