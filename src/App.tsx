import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";

const Home = () => <div>home</div>;

const About = () => <div>about</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="react logo" />
          <img src="/logo512.png" alt="react logo" />
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
