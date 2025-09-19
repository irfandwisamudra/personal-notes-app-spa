import React from "react";
export default function TitleInput({
  value,
  onChange,
  limit = 50,
  describedBy = "title-remaining",
}) {
  return (
    <input
      id="title-input"
      className="input input--title"
      type="text"
      placeholder="Judul catatan (maks 50 karakter)"
      value={value}
      onChange={(e) => onChange(e.target.value.slice(0, limit))}
      aria-describedby={describedBy}
      required
    />
  );
}
