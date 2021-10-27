import NotFoundIcon from "assets/icons/not-found.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <img src={NotFoundIcon} alt="Not Found" width="250" height="250" />
        <h1 className="fw-bold h2">Page Not Found</h1>
        <Link
          to="/"
          type="button"
          className="btn btn-primary text-white mt-2 shadow-none fw-bold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
