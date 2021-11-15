import { Dropdown } from "react-bootstrap";

export default function DropdownNotif({ data }) {
  return (
    <Dropdown className="dropdown-notif mx-5 d-flex justify-content-center align-items-end">
      <Dropdown.Toggle as="a">
        <span>
          <i className="fas fa-bell fs-3 text-white"></i>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ maxHeight: 200, overflowY: "auto" }}>
        {data?.map((item, index) => (
          <Dropdown.Item
            key={`notif-${index}`}
            className={`d-flex py-2 border-bottom border-1`}
          >
            <img
              src={item.user.avatar}
              alt="Avatar"
              width="50"
              height="50"
              className="rounded-circle border border-primary me-3"
            />
            <div className="d-flex flex-column">
              <div className="fw-bold">{item.user.fullname}</div>
              <div className="text-muted">{item.message}</div>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
