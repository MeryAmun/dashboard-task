import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import NewTask from './NewTask';
import { tasksData } from "../../data/tableData"


const TasksScreen = () => {
  const [active, setActive] = useState("All");


  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All"? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Task Logs</button>
        <button className={active === "New"? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Task</button>
        </div>
     {
      active === "All" ? (
        <TableCard columns={COLUMNS} data={tasksData} />
      ) : (<NewTask/>)
     }
    </div>
  )
}

export default TasksScreen;
const COLUMNS = [
  {
    label: "ID",
    renderCell: (item) => ""
  },
  {
    label: "Task Name",
    renderCell: (item) => ""
  },
  { label: "Start Date", renderCell: (item) => "" },
  { label: "Due Date", renderCell: (item) => "" },
  { label: "Status", renderCell: (item) => "" },
  { label: "Assigned To", renderCell: (item) => "" },
  
];