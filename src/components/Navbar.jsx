import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "/",
      name: "Inicio",
    },
    {
      id: 2,
      link: "/contact",
      name: "Contacto",
    },
    {
      id: 3,
      link: "/financing",
      name: "Financiación",
    },
    {
      id: 4,
      link: "/login",
      name: "Ingresar",
    },
    {
      id: 5,
      link: "/register",
      name: "Registrate",
    },
    {
      id: 6,
      link: "/user-profile",
      name: "user",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-16 bg-gray-900 text-white z-20  ">
        <div className="flex justify-between  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex ">
              {links.map(({ id, link, name }) => (
                <Link key={id} to={link}>
                  <li className="p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div className="text-white w-[20%] text-lg">
            <Link to="/">
              <h2>
                Dealer<span className="text-primary">App</span>
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown
            ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
            : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link, name }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
