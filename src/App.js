import * as React from "react";
import { Routes, Route} from "react-router-dom";
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
        <Route path="/star_wars/" element={<Categories />} />
        <Route path="/star_wars/recherche" element={<Recherche />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App 





