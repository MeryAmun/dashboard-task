import React, { useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Link } from 'react-router-dom'
//import Paper from '@mui/material/Paper';


const TaskAndProjectCard = ({title, tableLabel}) => {
  const COLUMNS = [
    {
      label: `${tableLabel}`,
      renderCell: (item) => "",
    },
    { label: "End Date", renderCell: (item) => item.username },
  ];
  return (
    <div className="todoList__container">
      <div className="todo__listHeader todo-preview  panel pane-custom menu">
        <header className="panel-heading d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center py-2">
            <h3 className="panel-title ms-3" style={{ fontSize:"15px"}}>{title}</h3>
          </div>
        </header>
      </div>
      <table class="table todo-preview table-striped m-b-none text-sm items">
        <thead style={{borderBottom:"0.5px solid #F0F0F0", padding:"10px 0"}}>
          <tr>
            <th></th>
            <th></th>
            <th style={{ fontSize:"13px",color:"gray"}}>{tableLabel}</th>
            <th style={{ fontSize:"13px",color:"gray"}}>End Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export default TaskAndProjectCard;
