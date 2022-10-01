import React,{useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import CreateEvent from "./screens/CreateEvent";
import Event from "./screens/Event";
import {eventData} from "./context";
const Router = () => {
    const eventDetais = useState({
        eventName: '',
        hostName: '',
        startTime:'',
        endTime: '',
        location:'',
        picture:'',
    })
    return (
        <eventData.Provider value={eventDetais}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateEvent />} />
                    <Route path="/event" element={<Event />} />
                </Routes>
            </BrowserRouter>
        </eventData.Provider>
    )
}

export default Router;
