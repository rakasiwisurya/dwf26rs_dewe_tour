import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

import { AuthContext } from "contexts/AuthContext";
import { ModalLogin, ModalRegister } from "components/atoms";

import BrandIcon from "assets/images/dewe-tour-icon.png";
import { DropdownAvatar } from "components/atoms";

export default function Header() {
  const history = useHistory();

  const { stateAuth, dispatch } = useContext(AuthContext);

  // Create DidMount with useEffect inside it can print "App Component Did Mount" & state value here
  useEffect(() => {
    dispatch({ type: "AUTH" });
  }, []);

  const [show, setShow] = useState({
    login: false,
    register: false,
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
              <DropdownAvatar
                stateAuthRole={stateAuth.user.role}
                dispatch={dispatch}
              />
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

            <ModalLogin
              show={show.login}
              handleClose={handleClose}
              handleSwitch={handleSwitch}
            />

            <ModalRegister
              show={show.register}
              handleClose={handleClose}
              handleSwitch={handleSwitch}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
