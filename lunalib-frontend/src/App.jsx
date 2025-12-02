// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MyLibrary from "./pages/MyLibrary";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Header />
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mylibrary" element={<MyLibrary />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
