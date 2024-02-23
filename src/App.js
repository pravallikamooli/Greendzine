import React, { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
import Planent from "./Assignment/assignment/planent.js";
import Navbar from "./Assignment/assignment/Navbar/navbar.js";
import Home from "./Assignment/assignment/home.js";
import PeopleComponent from "./Assignment/assignment/people.js";
function App() {
   

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/planet" element={<Planent/>} />
                    <Route path="/people" element={<PeopleComponent />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
