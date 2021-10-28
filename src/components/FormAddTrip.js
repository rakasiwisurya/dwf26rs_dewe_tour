export default function FormAddTrip() {
  return (
    <section className="add-trip">
      <div className="container">
        <h1 className="h3 fw-bold mb-5">Add Trip</h1>
        <div className="px-5">
          <form action="">
            <div className="mb-3">
              <label htmlFor="titleTrip" className="mb-2 fw-bold">
                Title Trip
              </label>
              <input type="text" className="w-100 form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="mb-2 fw-bold">
                Country
              </label>
              <select id="country" className="form-select">
                <option selected disabled>
                  Select Country
                </option>
                <option value="1">Australia</option>
                <option value="2">Indonesia</option>
                <option value="3">South Korea</option>
                <option value="4">Japan</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="accomodation" className="mb-2 fw-bold">
                Accomodation
              </label>
              <input
                type="text"
                id="accomodation"
                className="w-100 form-control mb-3"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="transportation" className="mb-2 fw-bold">
                Transportation
              </label>
              <input
                type="text"
                id="transportation"
                className="w-100 form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eat" className="mb-2 fw-bold">
                Eat
              </label>
              <input type="text" id="eat" className="w-100 form-control" />
            </div>

            <div className="mb-3">
              <label className="mb-2 fw-bold">Duration</label>
              <br />
              <input
                type="text"
                id="day"
                className="w-25 d-inline-block form-control me-2"
              />
              <span className="fw-bold me-2">Day</span>
              <input
                type="text"
                id="night"
                className="w-25 d-inline-block form-control  me-2"
              />
              <span className="fw-bold">Night</span>
            </div>

            <div className="mb-3">
              <label htmlFor="dateTrip" className="mb-2 fw-bold">
                Date Trip
              </label>
              <input type="date" id="dateTrip" className="w-100 form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="mb-2 fw-bold">
                Price
              </label>
              <input type="text" id="price" className="w-100 form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="quota" className="mb-2 fw-bold">
                Quota
              </label>
              <input type="text" id="quota" className="w-100 form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="mb-2 fw-bold">
                Description
              </label>
              <textarea
                type="text"
                id="description"
                className="w-100 form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="mb-2 fw-bold">
                Images
              </label>
              <input type="file" id="image" className="d-block" />
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button
                className="btn btn-primary text-white fw-bold"
                style={{ width: 250 }}
              >
                Add Trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
