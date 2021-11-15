import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";

import { AuthContext } from "contexts/AuthContext";
import { NotifContext } from "contexts/NotifContext";

import { DropdownNotif, ModalLogin, ModalRegister } from "components/atoms";
import { DropdownAvatar } from "components/atoms";

import { io } from "socket.io-client";
import { NotificationManager } from "react-notifications";

import BrandIcon from "assets/images/dewe-tour-icon.png";

let socket;
export default function Header() {
  const history = useHistory();

  const { stateAuth, dispatch } = useContext(AuthContext);
  const { stateNotif, dispatchNotif } = useContext(NotifContext);

  const [show, setShow] = useState({
    login: false,
    register: false,
  });

  console.log(stateNotif);

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

  const loadNotifs = () => {
    socket.emit("load notif");
    socket.on("all notif", (data) => {
      dispatchNotif({
        type: "ADD_NOTIF",
        payload: data,
      });
    });
  };

  const newNotif = () => {
    socket.on("new notif", (data) => {
      NotificationManager.info(data, "New Transactions", () => {
        window.location.reload();
      });
    });
  };

  useEffect(() => {
    socket = io("http://localhost:4000");
    loadNotifs();
    newNotif();

    return () => {
      socket.disconnect();
    };
  }, []);

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
              <div className="d-flex align-items-center">
                {stateAuth?.user.role === "admin" && (
                  <DropdownNotif data={stateNotif} />
                )}

                <DropdownAvatar
                  avatar={stateAuth.user.avatar}
                  role={stateAuth.user.role}
                  dispatch={dispatch}
                />
              </div>
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
