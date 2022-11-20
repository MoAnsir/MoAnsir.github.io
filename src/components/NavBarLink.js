import React, { useState } from "react";

const NavBarLink = ({ info, about, work, repo, email }) => {
  const handleClick = (elem) => {
    elem.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-center fadeDown1">
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-circle m-1">
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 left-[-130%]">
          <li>
            <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(info)}>
              Intro
            </button>
          </li>
          <li>
            <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(about)}>
              About
            </button>
          </li>

          <li>
            <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(work)}>
              Work
            </button>
          </li>
          <li>
            <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(repo)}>
              Repo
            </button>
          </li>
          <li>
            <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(email)}>
              Email Me
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(info)}>
          Intro
        </button>
        <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(about)}>
          About
        </button>

        <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(work)}>
          Work
        </button>
        <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(repo)}>
          Repo
        </button>
        <button tabIndex={0} className="btn btn-ghost" onClick={() => handleClick(email)}>
          Email Me
        </button>
      </div>
    </div>
  );
};

export default NavBarLink;
