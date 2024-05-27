import React from "react";

const ListItem = ({ list, deleteList, editList, theme }) => {
  return (
    <li
      className={
        theme
          ? "list-group-item my-2 text-capitalize rounded-0"
          : "list-group-item text-capitalize my-2 rounded-0 bg-dark text-light"
      }
    >
      {list.text}
      <span>
        <button
          className="btn btn-danger btn-sm rounded-0 float-end"
          onClick={() => deleteList(list.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning btn-sm rounded-0 float-end"
          onClick={() => editList(list)}
        >
          Edit
        </button>
      </span>
    </li>
  );
};

export default ListItem;
