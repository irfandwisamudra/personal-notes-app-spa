import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiSearch } from "react-icons/fi";
import StatusPage from "./StatusPage.jsx";

export default function NotFoundStatus() {
  return (
    <StatusPage
      code="404"
      title="Halaman tidak ditemukan"
      description="Maaf, halaman yang kamu cari tidak tersedia. Periksa kembali URL atau gunakan tombol di bawah untuk kembali ke beranda."
      actions={
        <>
          <Link to="/" className="btn btn--primary" title="Kembali ke beranda">
            <FiHome className="btn__icon" />
            <span>Kembali ke beranda</span>
          </Link>
        </>
      }
    />
  );
}
