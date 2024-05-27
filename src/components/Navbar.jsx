import React from "react";
import checklist from "../assets/checklist.gif";

const Navbar = ({ name, changeTheme, theme }) => {
  return (
    <nav
      className={
        theme
          ? "navbar bg-danger-subtle shadow px-md-5"
          : "navbar bg-dark-subtle px-md-5"
      }
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img src={checklist} alt="" width="50px" height="50px" /> &nbsp;{" "}
          {name}
        </a>
        <button
          className={
            theme
              ? "btn btn-dark rounded-0 text-light"
              : "btn btn-light rounded-0"
          }
          onClick={() => changeTheme()}
        >
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
