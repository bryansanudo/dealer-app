import { useEffect, useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

import { MdExitToApp, MdClose } from "react-icons/md";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/configFirebase";

const HeaderMobile = ({ activeLink }) => {
  const [showMenu, setShowMenu] = useState(false);

  const [labelEmail, setLabelEmail] = useState("");
  const [financion, setFinancion] = useState(false);
  const cerrarSesion = () => {
    signOut(auth)
      .then(() => {
        console.log("cerro sesion exitosamente");
        setFinancion(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFinancion(true);
        setLabelEmail(user.email);
      } else {
        setLabelEmail("");
      }
    });
  }, []);

  const mostarMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <label className="absolute right-6 top-6 md:hidden swap swap-rotate">
        <input type="checkbox" />
        <HiOutlineMenuAlt3
          className="text-5xl cursor-pointer swap-off"
          onClick={mostarMenu}
        />
        <MdClose
          className="text-5xl cursor-pointer swap-on"
          onClick={mostarMenu}
        />
      </label>
      <div
        onClick={mostarMenu}
        className={
          showMenu
            ? "z-40 flex flex-col p-3 fixed inset-0 right-1/2 bg-black/40 backdrop-blur-xl gap-8 "
            : "hidden"
        }
      >
        <ul className="flex flex-col gap-6   justify-center">
          <li className="flex justify-between items-center">
            <Link to="/">
              <h2>
                Dealer<span className="text-primary">app</span>
              </h2>
            </Link>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/contact">
              Contact
            </NavLink>
          </li>
          <li
            className={`hover:text-primary  duration-400 ${
              financion ? "" : "hidden"
            }`}
          >
            <NavLink className={activeLink} to="/financing">
              Financiación
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col  justify-center ">
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/login">
              Login
            </NavLink>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/register">
              Register
            </NavLink>
          </li>
          <li
            className={`hover:text-primary  duration-400 ${
              financion ? "" : "hidden"
            }`}
          >
            <NavLink>
              <div className="flex items-center gap-1">
                Hola, {labelEmail}
                <MdExitToApp className="text-3xl" />
              </div>
            </NavLink>
          </li>
          <li
            onClick={cerrarSesion}
            className={`hover:text-primary hover:scale-105 duration-400 ${
              financion ? "" : "hidden"
            } `}
          >
            <NavLink>
              <div className="flex items-center gap-1">
                Salir
                <MdExitToApp className="text-3xl" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMobile;
