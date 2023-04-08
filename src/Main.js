import React from 'react';
import './Main.css'

/* Components */
import NavBar, {NavElement} from './components/navbar/NavBar';
import Details from './components/details/Details';
import {Route, Routes} from "react-router-dom";

/* Pages */
import Projects from "./pages/Projects";

function Main() {
  return (
    <div className="app">
        <div className="content">
            <header>
                <NavBar>
                    <NavElement title={"Projects"} link="/"/>
                </NavBar>
            </header>
            <main className={"main"}>
                <div id={"mobile"}>
                    <Details/>
                </div>
                <Routes>
                    <Route path="/" element={<Projects/>}/>
                </Routes>
            </main>
            <footer>
                <Details/>
            </footer>
        </div>
    </div>
  );
}

export default Main;
