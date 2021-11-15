import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";

import Profile from "assets/icons/profile.svg";
import Pay from "assets/icons/pay.svg";
import Journey from "assets/icons/journey.svg";
import Logout from "assets/icons/logout.svg";

export default function DropdownAvatar({ avatar, role, dispatch }) {
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    history.push("/");
  };

  return (
    <Dropdown className="dropdown-avatar">
      <Dropdown.Toggle as="a">
        <img
          src={avatar}
          alt="Avatar"
          width="50"
          height="50"
          className="border border-3 border-primary rounded-circle"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {role === "admin" ? (
          <Dropdown.Item
            eventKey="1"
            onClick={() => {
              history.push("/list-transaction");
            }}
          >
            <img src={Journey} alt="user" width="20" height="20" />
            <span className="fw-bold ms-2">Trip</span>
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                history.push("/profile");
              }}
            >
              <img src={Profile} alt="user" width="20" height="20" />
              <span className="fw-bold ms-2">Profile</span>
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
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
  );
}
