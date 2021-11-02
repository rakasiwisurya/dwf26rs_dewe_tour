import { useState } from "react";

export default function Avatar() {
  const [filename, setFilename] = useState("no-photo.jpg");

  const handleChange = (e) => {
    setFilename(e.target.files[0].name);
  };

  return (
    <div className="input-file-avatar">
      <div className="preview-image" style={{ width: 280, height: 345 }}>
        <img
          src={`/images/${filename}`}
          alt="User"
          width="280"
          height="345"
          className="rounded"
        />
      </div>
      <input
        type="file"
        hidden
        id="avatar"
        aria-label="file upload"
        name="avatar"
        onChange={handleChange}
        multiple
      />
      <label
        htmlFor="avatar"
        className="btn btn-primary mt-3 text-white fw-bold"
        style={{ width: 280 }}
      >
        Change Photo Profile
      </label>
    </div>
  );
}
