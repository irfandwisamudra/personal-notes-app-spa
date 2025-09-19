import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import {
  FiTrash2,
  FiArchive,
  FiInbox,
  FiEye,
  FiCalendar,
} from "react-icons/fi";
import { showFormattedDate } from "../utils";

export default function NoteCard({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <article className="card">
      <header className="card__header">
        <h3 className="card__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <div className="meta">
          <FiCalendar aria-hidden />{" "}
          <time>
            {showFormattedDate(createdAt)}
            {archived ? " · Arsip" : ""}
          </time>
        </div>
      </header>

      <div className="card__body">
        <div className="card__excerpt">{parser(body)}</div>
      </div>

      <footer className="card__actions">
        <Link
          to={`/notes/${id}`}
          className="btn btn--ghost btn--sm"
          aria-label="Lihat detail"
          title="Detail"
        >
          <FiEye className="btn__icon" />
        </Link>
        {archived ? (
          <button
            className="btn btn--archive btn--sm"
            onClick={() => onUnarchive(id)}
            title="Aktifkan"
          >
            <FiInbox className="btn__icon" />
          </button>
        ) : (
          <button
            className="btn btn--archive btn--sm"
            onClick={() => onArchive(id)}
            title="Arsipkan"
          >
            <FiArchive className="btn__icon" />
          </button>
        )}
        <button
          className="btn btn--danger btn--sm"
          onClick={() => onDelete(id)}
          title="Hapus"
        >
          <FiTrash2 className="btn__icon" />
        </button>
      </footer>
    </article>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};
