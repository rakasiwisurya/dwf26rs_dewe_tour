import Magnify from "assets/icons/magnify.svg";

export default function ListTransaction() {
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
            <tr>
              <td>1</td>
              <td>Radif Ganteng</td>
              <td>6D/4N Fun Tassie Vaca ...</td>
              <td>bca.jpg</td>
              <td className="text-primary fw-bold">Pending</td>
              <td>
                <img src={Magnify} alt="Magnify" width="25" height="25" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Haris Rahman</td>
              <td>6D/4N Exciting Summer...</td>
              <td>bni.jpg</td>
              <td className="text-success fw-bold">Success</td>
              <td>
                <img src={Magnify} alt="Magnify" width="25" height="25" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Amin Subagiyo</td>
              <td>6D/4N Wonderful Autum ...</td>
              <td>permata.jpg</td>
              <td className="text-danger fw-bold">Cancel</td>
              <td>
                <img src={Magnify} alt="Magnify" width="25" height="25" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
