import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils";
import { FiTrash2, FiArchive, FiInbox } from "react-icons/fi";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <p className="muted">Catatan tidak ditemukan.</p>;
  }

  function handleDelete() {
    deleteNote(note.id);
    navigate(-1);
  }
  function handleArchive() {
    archiveNote(note.id);
    navigate("/archives");
  }
  function handleUnarchive() {
    unarchiveNote(note.id);
    navigate("/");
  }

  return (
    <article className="detail">
      <header className="detail__header page-head">
        <h2 className="detail__title">{note.title}</h2>
        <div className="detail__actions">
          {note.archived ? (
            <button
              className="btn btn--archive btn--sm"
              onClick={handleUnarchive}
            >
              <FiInbox className="btn__icon" />
              <span>Aktifkan</span>
            </button>
          ) : (
            <button
              className="btn btn--archive btn--sm"
              onClick={handleArchive}
            >
              <FiArchive className="btn__icon" />
              <span>Arsip</span>
            </button>
          )}
          <button className="btn btn--danger btn--sm" onClick={handleDelete}>
            <FiTrash2 className="btn__icon" />
            <span>Hapus</span>
          </button>
        </div>
      </header>
      <div className="detail__body">{parser(note.body)}</div>
    </article>
  );
}
