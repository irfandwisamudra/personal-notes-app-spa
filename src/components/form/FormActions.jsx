import React from "react";
import { FiSave } from "react-icons/fi";
export default function FormActions({ label = "Simpan" }) {
  return (
    <div className="form__actions">
      <button type="submit" className="btn btn--primary" title="Simpan">
        <FiSave className="btn__icon" />
        <span>{label}</span>
      </button>
    </div>
  );
}
