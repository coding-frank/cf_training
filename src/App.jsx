import React from "react";
import { Route, Routes } from "react-router-dom";

import Base from "./layout/Base";
import Hero from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";
import Albums from "./pages/Albums";

function App() {
    return (
        <div className="App">
            <Base>
                <Routes>
                    <Route exact path="/" element={<Hero />} />
                    <Route path="about" element={<About />} />
                    <Route path="albums" element={<Albums />} />
                    <Route path="photos">
                        <Route path=":albumId" element={<Photos />} />
                    </Route>
                </Routes>
            </Base>
        </div>
    );
}

export default App;
