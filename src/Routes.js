import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import { Company, HomePage, Location, Name } from "./pages";

export default function RoutesPOC() {
  return (
        <Routes>
          <Route path="/location" element={<Location />} />
          <Route path="/company" element={<Company />} />
          <Route path="/name" element={<Name />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
)};

