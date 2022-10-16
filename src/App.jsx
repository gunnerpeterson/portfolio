/** @format */

import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Writings from "./components/writings/Writings";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "./app.scss";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Writings />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
