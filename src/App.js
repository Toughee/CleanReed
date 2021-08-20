import "./App.css";
import React from "react";
import tempiconcleanreed from "./img/tempiconcleanreed.png";
import homePage from "./components/homePage";
import allPage from "./components/allPage";
import dtBPage from "./components/dtBPage.js";
import reactPage from "./components/reactPage";
import tILPage from "./components/tILPage";
import apPage from "./components/apPage";
import aboutPage from "./components/aboutPage";

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <img className="mainIcon" alt="appIcon" src={tempiconcleanreed} />
          <br />

          <BrowserRouter>
            <Link to="/homePage">
              <li>Home</li>
            </Link>

            <Link to="/allPage">
              <li>General</li>
            </Link>

            <Link to="/reactPage">
              <li>ReactJS</li>
            </Link>

            <Link to="/dtBPage">
              <li>Data Is Beautiful</li>
            </Link>
            <Link to="/tILPage">
              <li>Today I Learned</li>
            </Link>
            <Link to="/apPage">
              <li>AstroPhotography</li>
            </Link>
            <Link to="/aboutPage">
              <li>About</li>
            </Link>

            <Route path="/homePage" component={homePage} />
            <Route path="/allPage" component={allPage} />
            <Route path="/dtBPage" component={dtBPage} />
            <Route path="/reactPage" component={reactPage} />
            <Route path="/tILPage" component={tILPage} />
            <Route path="/apPage" component={apPage} />
            <Route path="/aboutPage" component={aboutPage} />
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
