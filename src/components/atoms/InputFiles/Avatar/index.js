import { useState } from "react";
import { API } from "config/api";

export default function Avatar({ userId, avatar }) {
  const [preview, setPreview] = useState(avatar);

  const handleChange = async (e) => {
    try {
      const newImageUrl = URL.createObjectURL(e.target.files[0]);
      setPreview(newImageUrl);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("avatar", e.target.files[0], e.target.files[0].name);

      await API.put(`/users/${userId}`, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="input-file-avatar">
      <div className="preview-image" style={{ width: 280, height: 345 }}>
        <img
          src={preview}
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
