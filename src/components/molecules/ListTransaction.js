import { useState } from "react";

import { ModalInvoice } from "components/atoms";

import Magnify from "assets/icons/magnify.svg";

export default function ListTransaction({ data }) {
  const [isShow, setIsShow] = useState(false);
  const [dataItem, setDataItem] = useState({
    id: "",
    qty: "",
    total: "",
    bookDate: "2020-12-12",
    user: {
      fullname: "",
      email: "",
      phone: "",
    },
    trip: {
      name: "",
      country: "",
      dateTrip: "2020-12-12",
      accomodation: "",
      duration: {
        day: "",
        night: "",
      },
      transportation: "",
    },
  });

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <section className="list-transaction">
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
            {data.map((item, index) => {
              return (
                <tr key={`list-transaction-${item.id}`}>
                  <td>{index + 1}</td>
                  <td>{item.user.fullname}</td>
                  <td>{item.trip.name}</td>
                  <td>{item.proofPayment}</td>
                  <td
                    className={`fw-bold
                      ${item.status === "Pending" && "text-primary"}
                      ${item.status === "Approve" && "text-success"}
                      ${item.status === "Cancel" && "text-danger"}`}
                  >
                    {item.status}
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
                          id: item.id,
                          qty: item.qty,
                          total: item.total,
                          bookDate: item.bookDate,
                          user: {
                            fullname: item.user.fullname,
                            email: item.user.email,
                            phone: item.user.phone,
                          },
                          trip: {
                            name: item.trip.name,
                            country: item.trip.country,
                            dateTrip: item.trip.dateTrip,
                            accomodation: item.trip.accomodation,
                            duration: {
                              day: item.trip.duration.day,
                              night: item.trip.duration.night,
                            },
                            transportation: item.trip.transportation,
                          },
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
      />
    </section>
  );
}
