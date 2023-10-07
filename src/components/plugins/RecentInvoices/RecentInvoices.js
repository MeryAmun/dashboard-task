import React from "react";

//import Paper from '@mui/material/Paper';

const RecentInvoices = () => {

  return (
    <div className="todoList__container">
      <div className="todo__listHeader todo-preview  panel pane-custom menu">
        <header className="panel-heading d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center py-2">
            <h3 className="panel-title ms-3" style={{ fontSize:"15px"}}>Recently Paid Invoices</h3>
          </div>
        </header>
        <div className="" style={{borderBottom:"1px solid #F0F0F0", padding:"10px 0", height:"60px"}}></div>
      </div>
      <div className="w-100 px-3 py-4">
       <h3 className="" style={{fontSize:"13px",color:"#656565"}}>Total Receipts:</h3>
      </div>
    </div>
  );
};
export default RecentInvoices;
