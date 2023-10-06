import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import CreateProject from './CreateProject';
import { projects } from "../../data/tableData";

const ProjectsScreen = () => {
  const [active, setActive] = useState("All");




  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All" ? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Project Logs</button>
        <button className={active === "New" ? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Project</button>
      </div>
      {
        active === "All" ? (
          <TableCard columns={COLUMNS} data={projects} />
        ) : (<CreateProject />)
      }
    </div>
  )
}

export default ProjectsScreen;
const COLUMNS = [
  {
    label: "Project No",
    renderCell: (item) => ""
  },
  { label: "Project Name", renderCell: (item) => "" },
  { label: "Project Clients", renderCell: (item) => "" },
  { label: "Progress", renderCell: (item) => "" },
  { label: "Start Date", renderCell: (item) => "" },
  { label: "End Date", renderCell: (item) => "" },
  { label: "Billing Type", renderCell: (item) => "" },
  { label: "Description", renderCell: (item) => "" },

];