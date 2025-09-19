import React from "react";
export default function TitleCounter({
  length = 0,
  limit = 50,
  id = "title-remaining",
}) {
  const remain = Math.max(0, limit - length);
  return (
    <div id={id} className="muted" aria-live="polite" aria-atomic="true">
      Sisa karakter judul: <span className="mono">{remain}</span>
    </div>
  );
}
