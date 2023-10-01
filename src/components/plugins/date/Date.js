import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from 'react-icons/fa'


const DateComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const renderYearContent = (year) => {
        const tooltipText = `Tooltip for year: ${year}`;
        return <span title={tooltipText}  style={{fontSize:"12px"}}>{year}</span>;
      };
    return (
     <div className="w-50 d-flex justify-content-between align-items-center ps-2" style={{backgroundColor:'#FFFFFF',border:"2px solid #F0F0F0"}}>
         <DatePicker  
     selected={new Date()}
     renderYearContent={renderYearContent}
     showYearPicker
     dateFormat="yyyy"
       />
      <span style={{backgroundColor:"#EDF1F2", padding:"6px 12px"}}><FaCalendarAlt size={15} color="rgb(93, 156, 236)"/></span>
     </div>
    );
  };
  export default DateComponent