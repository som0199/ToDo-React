import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ list, theme, deleteList, editList }) => {
  return (
    <ul className="list-group my-5 ">
      {list.length === 0 ? (
        <>
          <h1 className={theme ? "text-center" : "text-center text-light"}>
            No Data Found !!!
          </h1>
        </>
      ) : (
        <>
          {list.map((item) => (
            <ListItem
              key={item.id}
              list={item}
              theme={theme}
              deleteList={deleteList}
              editList={editList}
            />
          ))}
        </>
      )}
    </ul>
  );
};

export default ListGroup;
