import React from "react";
import { FaCalendar } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

const Card  = ({icon, heading, content}) => {
    return (
        <div className="flex justify-between items-center m-2">
            <div className="bg-white p-4 rounded-lg">
                {icon === 'calendar'? <FaCalendar style={{color:'#8456EC'}} />: <GoLocation style={{color:'#8456EC'}} />}
            </div>
            <div>
                <h4 className="text-[#240D57] text-[18px] font-bold">{heading}</h4>
                <p className="text-[#4F4F4F] text-[18px] ">{content}</p>
            </div>
            <div className="text-[#BDBDBD]">
                &gt;
            </div>
        </div>
    );
};

export default Card;