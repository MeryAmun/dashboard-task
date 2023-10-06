import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import NewContract from './NewContract';
import { accounts } from "../../data/tableData"


const ContractsScreen = () => {
  const [active, setActive] = useState("All");


  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All" ? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Contracts</button>
        <button className={active === "New" ? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Contract</button>
      </div>
      {
        active === "All" ? (
          <TableCard columns={COLUMNS} data={accounts} />
        ) : (<NewContract />)
      }
    </div>
  )
}

export default ContractsScreen;
const COLUMNS = [
  {
    label: "ID",
    renderCell: (item) => ""
  },
  {
    label: "Subject",
    renderCell: (item) => ""
  },
  { label: "Client", renderCell: (item) => "" },
  { label: "Start Date", renderCell: (item) => "" },
  { label: "End Date", renderCell: (item) => "" },
  { label: "Type", renderCell: (item) => "" },
  { label: "Description", renderCell: (item) => "" },

];