import { Dropdown } from "react-bootstrap";

import Avatar from "assets/images/user.png";

export default function DropdownNotif() {
  return (
    <Dropdown className="dropdown-notif mx-5 d-flex justify-content-center align-items-end">
      <Dropdown.Toggle as="a">
        <span>
          <i class="fas fa-bell fs-3 text-white"></i>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="d-flex py-2 border-bottom border-1">
          <img
            src={Avatar}
            alt="Avatar"
            width="50"
            height="50"
            className="rounded-circle border border-primary me-3"
          />
          <div className="d-flex flex-column">
            <div className="fw-bold">Rakasiwi Surya</div>
            <div className="text-muted">Lorem Ipsum Dolor Sit Amet</div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="d-flex py-2">
          <img
            src={Avatar}
            alt="Avatar"
            width="50"
            height="50"
            className="rounded-circle border border-primary"
          />
          <div className="d-flex flex-column">
            <div className="fw-bold">Rakasiwi Surya</div>
            <div className="text-muted">Lorem Ipsum Dolor Sit Amet</div>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
