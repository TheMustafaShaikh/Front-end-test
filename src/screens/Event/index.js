import React,{useContext} from "react";
import Card from "../../components/Card";
import {eventData} from "../../context";
import "./style.css"

const EventPage  = () => {
    const globalData = useContext(eventData);
    const {
        eventName, 
        hostName,
        startTime, 
        endTime, 
        location, 
    } = globalData[0];
    console.log("Global", globalData);
    const date = new Date(endTime.getTime());
    const date2 = new Date(startTime.getTime());
    const month = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    console.log(date,date2)

    return (
        <div className="flex justify-around items-center h-screen flex-wrap">
            <div>
                <h1 className="heading-event text-left">{eventName}</h1>
                <p className="text-[#828282] text-[18px] text-left">Hosted by <span className="font-bold">{hostName}</span></p>
                <div>
                    <Card content={`to ${date}`} heading={`${startTime.getDate()} ${month[startTime.getMonth()+1]}`} icon="calendar"/>
                    <Card content={location} heading='Street name' icon="location" />
                </div>
            </div>
            <div>
                <img src="event.svg" alt="event"/>
            </div>
        </div>
    );
};
export default EventPage;