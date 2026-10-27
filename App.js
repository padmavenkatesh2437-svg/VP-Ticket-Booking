import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./store";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Booking from "./Component/Booking";
import Auth from "./Component/Auth";
import MyBookings from "./Component/MyBookings";
import Faq from "./Component/Faq";
import Contactus from "./Component/Contactus";
import Footer from "./Component/Footer";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        {["flight", "cab", "bus", "train"].map((t) => (
          <Route key={t} path={"/" + t} element={<Booking key={t} type={t} />} />
        ))}
        <Route path="/bookings" element={user ? <MyBookings user={user} /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<Auth mode="signin" setUser={setUser} />} />
        <Route path="/signup" element={<Auth mode="signup" setUser={setUser} />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
