import React, { Component } from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>SIMPLE SPA</h1>
          <ul className="header">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/stuff" element={<Stuff />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
