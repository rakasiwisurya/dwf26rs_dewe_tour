import { useState } from "react";

export default function Hero({
  trips,
  searchData,
  setSearchData,
  setIsSearching,
}) {
  // const [find, setFind] = useState("");

  // console.log(find);
  const handleSearch = (e) => {
    setSearchData(e.target.value);
    e.target.value !== "" ? setIsSearching(true) : setIsSearching(false);

    // const results = trips?.filter((item) =>
    //   item?.title.toLowerCase().includes(find.toLowerCase())
    // );

    // setSearchData(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = trips?.filter((item) =>
      item?.title.toLowerCase().includes(searchData.toLowerCase())
    );

    setSearchData(results);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="content text-white">
          <h1 className="title">
            Explore
            <span className="subtitle">your amazing city together</span>
          </h1>
          <div className="search-group">
            <label htmlFor="seacrh" className="label mb-2">
              Find great places to holiday
            </label>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}
                value={searchData}
                style={{ height: 50 }}
              />
              {/* <button className="btn btn-primary text-white" type="submit">
                Search
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
