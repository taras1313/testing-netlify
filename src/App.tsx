import React from "react";
// import logo from "./logo.svg";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";

const Home = () => <div>home page</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">home</Link>
          <br />
          <Link to="/about">about</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
