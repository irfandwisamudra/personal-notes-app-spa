import React from "react";
export default function Editor({
  value,
  onInput,
  placeholder = "Sebenarnya saya adalah ....",
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
    }
  }, [value]);
  return (
    <div
      ref={ref}
      className="editor"
      data-placeholder={placeholder}
      contentEditable
      onInput={(e) => onInput(e.currentTarget.innerHTML)}
      suppressContentEditableWarning
    />
  );
}
