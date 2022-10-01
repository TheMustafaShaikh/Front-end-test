import React,{useState, useContext} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DateTimePicker from "../../components/DateTimePicker";
import {useNavigate} from "react-router-dom"
import {eventData} from "../../context";
import "./style.css";

const CreateEventPage = () => {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const globalData = useContext(eventData);
    const navigator = useNavigate();
    return (
        <div className="flex justify-around items-center h-screen flex-wrap">
            <div>
                <h1 className="heading">
                    Create Event
                </h1>
                <h1 className="thumbs-up">
                    👍🏻
                </h1>
            </div>
            <div>
                <Input type="text" label='Event Name' onChangeMethod={(e)=>globalData[1]({
                    ...globalData[0],
                    eventName:e.target.value
                })} />
                <Input type="text" label='Host Name' onChangeMethod={(e)=>globalData[1]({
                    ...globalData[0],
                    hostName:e.target.value
                })} />
                <Input type="text" label='Location' onChangeMethod={(e)=>globalData[1]({
                    ...globalData[0],
                    location:e.target.value
                })} />
                <Input type="text" label='Event Picture Url' onChangeMethod={(e)=>globalData[1]({
                    ...globalData[0],
                    picture:e.target.value
                })} />
                <DateTimePicker label='Start Time' onChange={setStartTime} value={startTime} />
                <DateTimePicker label='End Time' onChange={setEndTime} value={endTime} />
                <Button content='Next'onClickEvent={()=>{
                    globalData[1]({
                        ...globalData[0],
                        startTime,
                        endTime,
                    })
                    navigator("/event");
                }} />
            </div>
        </div>
    );
}

export default CreateEventPage;