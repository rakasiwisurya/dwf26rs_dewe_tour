import Magnify from "assets/icons/magnify.svg";

export default function ListTransaction({ data }) {
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
            {data.map((item, index) => (
              <tr key={`list-transaction-${index}`}>
                <td>{item.id}</td>
                <td>{item.user}</td>
                <td>{item.trip}</td>
                <td>{item.proofPayment}</td>
                <td
                  className={`fw-bold ${
                    item.status === "Pending" && "text-primary"
                  } ${item.status === "Approve" && "text-success"} ${
                    item.status === "Cancel" && "text-danger"
                  }`}
                >
                  {item.status}
                </td>
                <td>
                  <img src={Magnify} alt="Magnify" width="25" height="25" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
