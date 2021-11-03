import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";

import Avatar from "assets/images/user.png";
import Profile from "assets/icons/profile.svg";
import Pay from "assets/icons/pay.svg";
import Journey from "assets/icons/journey.svg";
import Logout from "assets/icons/logout.svg";

export default function DropdownAvatar({ stateAuthRole, dispatch }) {
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    history.push("/");
  };

  return (
    <Dropdown>
      <Dropdown.Toggle as="a" id="dropdown-basic">
        <img src={Avatar} alt="user" width="50" height="50" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {stateAuthRole === "admin" ? (
          <Dropdown.Item
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
              onClick={() => {
                history.push("/profile");
              }}
            >
              <img src={Profile} alt="user" width="20" height="20" />
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
  );
}
