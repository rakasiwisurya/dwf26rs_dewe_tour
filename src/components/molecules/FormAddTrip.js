import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Attach from "assets/icons/attach.svg";

import { API } from "config/api";

import { NotificationManager } from "react-notifications";

export default function FormAddTrip() {
  const history = useHistory();

  // state for fetching country
  const [countries, setCountries] = useState([]);

  // state for preview image
  const [preview, setPreview] = useState([]);

  // state input form
  const [inputTrip, setInputTrip] = useState({
    title: "",
    countryId: 0,
    accomodation: "",
    transportation: "",
    eat: "",
    day: 0,
    night: 0,
    dateTrip: "",
    price: 0,
    quota: 0,
    description: "",
    images: [],
  });

  // fetching countries from backend
  const getCountries = async () => {
    try {
      const response = await API.get("/countries");
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // didmount get countries
  useEffect(() => {
    getCountries();
  }, []);

  const handleOnChange = (e) => {
    // set input form state and selection if it's file input fileList type
    setInputTrip((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.type === "file" ? e.target.files : e.target.value,
    }));

    // if input file clicked
    if (e.target.type === "file") {
      const fileList = e.target.files;

      // create url and push to array to see on preview
      const arrayUrlImages = [];
      for (const file of fileList) {
        arrayUrlImages.push(URL.createObjectURL(file));
      }
      setPreview(arrayUrlImages);
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      // set config
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // create data with form data as object
      const formData = new FormData();
      for (const file of inputTrip.images) {
        formData.append("image", file);
      }
      formData.set("title", inputTrip.title);
      formData.set("countryId", inputTrip.countryId);
      formData.set("accomodation", inputTrip.accomodation);
      formData.set("transportation", inputTrip.transportation);
      formData.set("eat", inputTrip.eat);
      formData.set("day", inputTrip.day);
      formData.set("night", inputTrip.night);
      formData.set("dateTrip", inputTrip.dateTrip);
      formData.set("price", inputTrip.price);
      formData.set("quota", inputTrip.quota);
      formData.set("maxQuota", inputTrip.quota);
      formData.set("description", inputTrip.description);

      // insert data trip to database
      const response = await API.post("/trips", formData, config);

      // notif success and go to home page
      if (response?.status === 200) {
        NotificationManager.success(response.data.message, "Success");
        history.push("/");
      }
    } catch (error) {
      if (error) throw error;
    }
  };

  return (
    <section className="add-trip">
      <div className="container">
        <h1 className="h3 fw-bold mb-5">Add Trip</h1>
        <div className="px-5">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="mb-2 fw-bold">
                Title Trip
              </label>
              <input
                type="text"
                id="title"
                className="w-100 form-control"
                onChange={handleOnChange}
                value={inputTrip.title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="mb-2 fw-bold">
                Country
              </label>
              <select
                id="countryId"
                className="form-select"
                onChange={handleOnChange}
                value={inputTrip.countryId}
              >
                <option value="0" disabled>
                  -Select Country-
                </option>
                {countries.map((item, index) => (
                  <option key={`countries-${index}`} value={item.id}>
                    {item.name}
                  </option>
                ))}
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
                onChange={handleOnChange}
                value={inputTrip.accomodation}
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
                onChange={handleOnChange}
                value={inputTrip.transportation}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eat" className="mb-2 fw-bold">
                Eat
              </label>
              <input
                type="text"
                id="eat"
                className="w-100 form-control"
                onChange={handleOnChange}
                value={inputTrip.eat}
              />
            </div>

            <div className="mb-3">
              <label className="mb-2 fw-bold">Duration</label>
              <br />
              <input
                type="number"
                id="day"
                className="w-25 d-inline-block form-control me-2"
                onChange={handleOnChange}
                value={inputTrip.day}
                max="7"
                min="0"
              />
              <span className="fw-bold me-2">Day</span>
              <input
                type="number"
                id="night"
                className="w-25 d-inline-block form-control me-2"
                onChange={handleOnChange}
                value={inputTrip.night}
                max="7"
                min="0"
              />
              <span className="fw-bold">Night</span>
            </div>

            <div className="mb-3">
              <label htmlFor="dateTrip" className="mb-2 fw-bold">
                Date Trip
              </label>
              <input
                type="date"
                id="dateTrip"
                className="w-100 form-control"
                onChange={handleOnChange}
                value={inputTrip.dateTrip}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="mb-2 fw-bold">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="w-100 form-control"
                onChange={handleOnChange}
                value={inputTrip.price}
                min="0"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="quota" className="mb-2 fw-bold">
                Quota
              </label>
              <input
                type="number"
                id="quota"
                className="w-100 form-control"
                onChange={handleOnChange}
                value={inputTrip.quota}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="mb-2 fw-bold">
                Description
              </label>
              <textarea
                type="text"
                id="description"
                className="w-100 form-control"
                onChange={handleOnChange}
                value={inputTrip.description}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="mb-2 fw-bold">
                Images
              </label>
              <div className="input-file-trip-images">
                <input
                  type="file"
                  hidden
                  id="images"
                  aria-label="file upload"
                  onChange={handleOnChange}
                  multiple
                />
                <label
                  htmlFor="images"
                  className="input-trip btn mt-3 text-primary fw-bold d-flex justify-content-around align-items-center"
                >
                  Attach here
                  <img src={Attach} alt="attachment" />
                </label>
              </div>

              <div className="preview-images my-4">
                <div className="row gx-2">
                  {preview.map((item, index) => (
                    <div className="col-auto" key={`imagesTrip-${index}`}>
                      <img
                        src={item}
                        alt="preview"
                        width="190"
                        height="140"
                        className="img-thumbnail shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button
                className="btn btn-primary text-white fw-bold"
                style={{ width: 250 }}
                type="submit"
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
