import React from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";
import { Home, Trivia } from "../screens";


const Router = (props) => {
    return (
        <RootRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/trivia" element={ <Trivia />} />
            </Routes>
        </RootRouter>
    );
};

export default Router;
