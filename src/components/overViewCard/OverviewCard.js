import React from "react";
import "./status.css";
import { IoSettingsSharp } from "react-icons/io5";
import Badge from "../badge/Badge";


const OverViewCard = ({data}) => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center px-3 py-2 gap-20 ms-1" style={{width:"280px", height:"150px",backgroundColor:"white", borderRadius:"10px"}}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <Badge data={data}/>
       <span type="btn" style={{backgroundColor:"rgba(217, 218, 223, 0.6)", padding:"2px 5px", borderRadius:"5px"}}>
       <IoSettingsSharp size={20} color="black" className="dropdown-toggle"/>
       </span>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex flex-column justify-content-between align-items-center">
          <h3 className="fs-5 text-secondary">
           {data.title}
          </h3>
          <h3 className="fs-3 text-dark">
          {data.qty}
          </h3>
        </div>
        <data.iconTwo size={data.id === 11 ? 40 : 45} color={data.color2} className="dropdown-toggle" />
      </div>
    </div>
  );
};

export default OverViewCard;
