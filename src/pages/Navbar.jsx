import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsMusicPlayerFill } from "react-icons/bs";

const navLinks = [
  { title: "Contact Us", id: "/contact" },
  { title: "Sign Up", id: "/sign-up" },
];
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <div className="navbar bg-white border border-black rounded-md">
      <div className="flex-1">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="p-2 md:text-xl flex uppercase items-center gap-1 border border-btn rounded-md bg-white duration-500 hover:bg-btn"
        >
          <BsMusicPlayerFill className="md:text-3xl" />
          <h1>Play List</h1>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 md:gap-4">
          {navLinks.map((nav) => (
            <Link to={nav.id} key={nav.id}>
              <li
                className={`${
                  active === nav.title ? "bg-btn" : "bg-white"
                } duration-500 hover:bg-btn border border-black rounded-lg p-1 md:p-2`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
