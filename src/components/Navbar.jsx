import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "@/configFirebase";

import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setUser, user }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const redirect = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("cerro sesion exitosamente");
        setUser(false);

        redirect("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="fixed w-full h-16 bg-gray-900 text-white z-20  ">
        <div className="flex justify-between  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {/* <Link to="/admin">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    admin ? "hidden" : ""
                  }`}
                >
                  admin
                </li>
              </Link> */}

              <Link to="/">
                <li className="p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer">
                  Contacto
                </li>
              </Link>
              <Link to="/financing">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "" : "hidden"
                  }`}
                >
                  Financiación
                </li>
              </Link>
              <Link to="/login">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "hidden" : ""
                  }`}
                >
                  Login
                </li>
              </Link>
              <Link to="/register">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "hidden" : ""
                  }`}
                >
                  Register
                </li>
              </Link>
              <Link to="/user-profile">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "" : "hidden"
                  }`}
                >
                  Perfil
                </li>
              </Link>

              <li
                onClick={logout}
                className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                  user ? "" : "hidden"
                }`}
              >
                Salir
              </li>
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
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Inicio
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/contact">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Contacto
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/financing">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Financiación
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/login">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Login
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/register">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Register
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/user-profile">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Perfil
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
