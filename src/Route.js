import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Task from "./Pages/Task";
import Login from "./Pages/Login";
import Administration from "./Pages/Administration";


const RouteApplication = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/task" element={<Task />} />
                    <Route exact path="/administration" element={<Administration />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RouteApplication;