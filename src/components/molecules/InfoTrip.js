import HotelIcon from "assets/icons/hotel.svg";
import PlaneIcon from "assets/icons/plane.svg";
import MealIcon from "assets/icons/meal.svg";
import TimeIcon from "assets/icons/time.svg";
import CalendarIcon from "assets/icons/calendar.svg";

import formatDate from "utils/formatDate";

export default function InfoTrip({ data }) {
  return (
    <section className="detail-info-trip mb-5">
      <div className="container">
        <h2 className="h5 fw-bold mb-4">Information Trip</h2>
        <div className="row">
          <div className="col">
            <h5 className="text-muted subtitle">Accommodation</h5>
            <div className="d-flex align-items-center">
              <img src={HotelIcon} alt="Hotel" width="24" height="24" />
              <span className="fw-bold ms-2">{data.accomodation}</span>
            </div>
          </div>
          <div className="col">
            <h5 className="text-muted subtitle">Transportation</h5>
            <div className="d-flex align-items-center">
              <img src={PlaneIcon} alt="Plane" width="24" height="24" />
              <span className="fw-bold ms-2">{data.transportation}</span>
            </div>
          </div>
          <div className="col-auto">
            <h5 className="text-muted subtitle">Eat</h5>
            <img src={MealIcon} alt="Eat" width="24" height="24" />
            <span className="fw-bold ms-2">{data.eat}</span>
          </div>
          <div className="col-auto">
            <h5 className="text-muted subtitle">Duration</h5>
            <img src={TimeIcon} alt="Time" width="24" height="24" />
            <span className="fw-bold ms-2">
              {data.day} Day {data.night} Night
            </span>
          </div>
          <div className="col">
            <h5 className="text-muted subtitle">Date Trip</h5>
            <img src={CalendarIcon} alt="Calendar" width="24" height="24" />
            <span className="fw-bold ms-2">{formatDate(data.dateTrip)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
