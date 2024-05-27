import React, { useEffect, useState } from "react";

const Form = ({ addList, edit, theme, updateList }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.editMode) {
      updateList(edit.oldList.id, text);
    } else {
      addList({
        id: crypto.randomUUID(),
        text: text,
      });
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.oldList.text);
  }, [edit]);

  return (
    <form className="my-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className={
          theme
            ? "form-control rounded-0 my-2"
            : "form-control rounded-0 my-2 bg-dark-subtle"
        }
        placeholder="Enter Task Here"
        required
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <button className="btn btn-info w-100 rounded-0">Submit</button>
    </form>
  );
};

export default Form;
