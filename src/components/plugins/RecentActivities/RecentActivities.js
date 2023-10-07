import React from "react";

//import "./styles.css";



const ActivityAndAnnouncementCard = ({title}) => {

  return (
    <div className="RecentActivities__container ">
      <div className="todo__listHeader todo-preview  panel pane-custom menu">
        <header className="panel-heading d-flex justify-content-start align-items-center">
          <div className="d-flex justify-content-center align-items-center p-2">
            <h3 className="" style={{fontSize:"14px", color:"#656565", fontWeight:"500"}}>{title}</h3>
          </div>
        </header>
      </div>
      <div className="table todo-preview table-striped m-b-none text-sm w-100 border items py-3">
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
      <p className="text-left ps-2" style={{fontSize:"12px", color:"#656565"}}>Make financial report of all income</p>
     
      </div>
    </div>
  );
};
export default ActivityAndAnnouncementCard;
