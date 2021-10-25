export default function Hero() {
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
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
