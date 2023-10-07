import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeBoard } from "./Home/HomeBoard";
import { Media } from "./Media/Media";
import { Projects } from "./Projects/Projects";

import "./App.css";

const App = () => (
    <Routes>
        <Route path="/" element={<HomeBoard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<HomeBoard />} />
    </Routes>
);

export default App;
