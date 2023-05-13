import Register from "@/components/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Financig from "@/components/Financing";
import UserProfile from "@/components/UserProfile";
import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Navbar setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/financing" element={<Financig />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
