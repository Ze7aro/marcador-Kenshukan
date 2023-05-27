import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../home/Dashboard";
import MarcadorKata from "../home/kata/MarcadorKata";
import MarcadorKumite from "../home/kumite/MarcadorKumite";

const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Dashboard />} />
        <Route path="kata" element={<MarcadorKata />} />
        <Route path="kumite" element={<MarcadorKumite />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Routing;
