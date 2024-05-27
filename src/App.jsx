import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  let name = "TODO APP";

  const [theme, setTheme] = useState("true");

  const [edit, setEdit] = useState({
    oldList: {},
    editMode: false,
  });

  const [list, setList] = useState([]);

  const changeTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
  const deleteList = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const addList = (newList) => {
    setList([newList, ...list]);
  };

  const editList = (newwList) => {
    setEdit({
      oldList: newwList,
      editMode: true,
    });
  };

  const clearAll = (list) => {
    setList([]);
  };

  const updateList = (oldId, newText) => {
    setList(
      list.map((item) =>
        item.id === oldId ? { id: oldId, text: newText } : item
      )
    );
    setEdit({
      oldList: {},
      editMode: false,
    });
  };

  return (
    <div className={theme ? "bg-light" : "bg-dark"}>
      <Navbar name={name} changeTheme={changeTheme} theme={theme} />
      <div className="container p-5">
        <div className="container p-5"></div>
        <Form
          theme={theme}
          addList={addList}
          edit={edit}
          updateList={updateList}
        />
        <button
          className="btn btn-primary rounded-0 float-end my-1"
          onClick={() => clearAll(list)}
        >
          Clear All
        </button>
        <ListGroup
          list={list}
          theme={theme}
          deleteList={deleteList}
          editList={editList}
        />
        <div className="container p-5"></div>
        <div className="container p-5"></div>
        <div className="container p-4"></div>
      </div>
    </div>
  );
};

export default App;
