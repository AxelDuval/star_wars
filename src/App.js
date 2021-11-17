import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Categories from "./components/categories";
import Recherche from "./components/recherche";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="recherche" element={<Recherche />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App 





