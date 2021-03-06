import { useState } from "react";

import { ModalInvoice } from "components/atoms";

import Magnify from "assets/icons/magnify.svg";

export default function ListTransaction({ data }) {
  const [isShow, setIsShow] = useState(false);
  const [dataItem, setDataItem] = useState({
    id: "",
    qty: "",
    total: "",
    status: "",
    attachment: "",
    createdAt: "2020-12-12",
    user: {
      fullname: "",
      email: "",
      phone: "",
    },
    trip: {
      name: "",
      countryName: "",
      dateTrip: "2020-12-12",
      accomodation: "",
      day: "",
      night: "",
      transportation: "",
    },
  });

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <section className="list-transaction" style={{ minHeight: 450 }}>
      <div className="container">
        <h1 className="h4 fw-bold mb-4">Incoming Transaction</h1>
        <table className="table bg-white" style={{ fontSize: 12 }}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Trip</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={`list-transaction-${item.id}`}>
                  <td>{index + 1}</td>
                  <td>{item.user.fullname}</td>
                  <td>{item.trip.title}</td>
                  <td>
                    {item.attachment === null ? (
                      <div className="text-danger">NULL</div>
                    ) : (
                      item.attachment.split("/")[5]
                    )}
                  </td>
                  <td
                    className={`fw-bold
                      ${
                        (item.status === "Waiting Payment" ||
                          item.status === "Waiting Approve") &&
                        "text-primary"
                      }
                      ${item.status === "Approve" && "text-success"}
                      ${item.status === "Cancel" && "text-danger"}`}
                  >
                    {item.status === "Waiting Payment" ||
                    item.status === "Waiting Approve"
                      ? "Pending"
                      : item.status}
                  </td>
                  <td>
                    <img
                      src={Magnify}
                      alt="Magnify"
                      width="25"
                      height="25"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setDataItem({
                          ...item,
                        });
                        setIsShow(true);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ModalInvoice
        isShow={isShow}
        handleClose={handleClose}
        dataItem={dataItem}
        setDataItem={setDataItem}
      />
    </section>
  );
}
