import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils";
import TitleCounter from "../components/form/TitleCounter.jsx";
import TitleInput from "../components/form/TitleInput.jsx";
import Editor from "../components/form/Editor.jsx";
import FormActions from "../components/form/FormActions.jsx";

export default function Add() {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const limit = 50;
  const counterId = "title-remaining";

  function onSubmit(e) {
    e.preventDefault();
    const titleTrim = title.trim();
    const bodyTrim = (body || "").replace(/<br\s*\/?>/gi, "").trim();
    if (!titleTrim || !bodyTrim) return;
    addNote({ title: titleTrim, body: bodyTrim });
    navigate("/");
  }

  return (
    <section>
      <header className="page-head">
        <div className="page-head__inner">
          <div>
            <h1 className="page-head__title">Tambah catatan</h1>
          </div>
        </div>
      </header>

      <form className="form" onSubmit={onSubmit}>
        <div className="form__head">
          <TitleCounter id={counterId} length={title.length} limit={limit} />
          <TitleInput
            value={title}
            onChange={setTitle}
            limit={limit}
            describedBy={counterId}
          />
        </div>

        <Editor value={body} onInput={setBody} />

        <FormActions />
      </form>
    </section>
  );
}
