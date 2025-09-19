import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import NoteList from "../components/NoteList.jsx";
import {
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils";

export default function Archive() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [notes, setNotes] = React.useState(getArchivedNotes());

  function onSearchChange(value) {
    setSearchParams(value ? { keyword: value } : {});
  }

  const visibleNotes = keyword
    ? notes.filter((n) => n.title.toLowerCase().includes(keyword.toLowerCase()))
    : notes;

  function onDelete(id) {
    deleteNote(id);
    setNotes(getArchivedNotes());
  }

  function onArchive(id) {
    archiveNote(id);
    setNotes(getArchivedNotes());
  }

  function onUnarchive(id) {
    unarchiveNote(id);
    setNotes(getArchivedNotes());
  }

  return (
    <section className="page">
      <div className="page-head">
        <h2 className="page-head__title">Arsip Catatan</h2>
        <div className="page-head__actions">
          <SearchBar keyword={keyword} keywordChange={onSearchChange} />
        </div>
      </div>
      <NoteList
        notes={visibleNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        emptyMessage="Tidak ada arsip catatan"
      />
    </section>
  );
}
