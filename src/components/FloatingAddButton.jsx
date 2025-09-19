import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

/**
 * FloatingAddButton
 * Tampil sebagai FAB di kanan bawah dan navigate ke /notes/new.
 * Sembunyikan di halaman Add (/notes/new) dan Detail (/notes/:id).
 */
export default function FloatingAddButton() {
  const { pathname } = useLocation();
  const hide =
    pathname.startsWith("/notes/new") || /^\/notes\/[^/]+$/.test(pathname);

  if (hide) return null;

  return (
    <Link to="/notes/new" aria-label="Tambah catatan" className="fab" title="Tambah Catatan">
      <FiPlus aria-hidden />
    </Link>
  );
}
