import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import CreateGoal from './CreateGoal';
import { goals } from "../../data/tableData";

const GoalsScreen = () => {
  const [active, setActive] = useState("All");




  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All" ? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Goals</button>
        <button className={active === "New" ? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Goal</button>
      </div>
      {
        active === "All" ? (
          <TableCard columns={COLUMNS} data={goals} />
        ) : (<CreateGoal />)
      }
    </div>
  )
}

export default GoalsScreen;
const COLUMNS = [
  {
    label: "Subject ID",
    renderCell: (item) => ""
  },
  { label: "Goal Type", renderCell: (item) => "" },
  { label: "Target Achievement", renderCell: (item) => "" },
  { label: "Start Date", renderCell: (item) => "" },
  { label: "End Date", renderCell: (item) => "" },
  { label: "Description", renderCell: (item) => "" },

];