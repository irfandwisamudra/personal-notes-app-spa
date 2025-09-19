import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import NoteList from "../components/NoteList.jsx";
import {
  getActiveNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [notes, setNotes] = React.useState(getActiveNotes());

  function onSearchChange(value) {
    setSearchParams(value ? { keyword: value } : {});
  }

  const visibleNotes = keyword
    ? notes.filter((n) => n.title.toLowerCase().includes(keyword.toLowerCase()))
    : notes;

  function onDelete(id) {
    deleteNote(id);
    setNotes(getActiveNotes());
  }

  function onArchive(id) {
    archiveNote(id);
    setNotes(getActiveNotes());
  }

  function onUnarchive(id) {
    unarchiveNote(id);
    setNotes(getActiveNotes());
  }

  return (
    <section className="page">
      <div className="page-head">
        <h2 className="page-head__title">Daftar Catatan</h2>
        <div className="page-head__actions">
          <SearchBar keyword={keyword} keywordChange={onSearchChange} />
        </div>
      </div>
      <NoteList
        notes={visibleNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        emptyMessage="Tidak ada catatan"
      />
    </section>
  );
}
