import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import NewClient from './NewClient';
import { clientsData } from "../../data/tableData"


const ClientsScreen = () => {
  const [active, setActive] = useState("All");


  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All" ? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Client Logs</button>
        <button className={active === "New" ? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Client</button>
      </div>
      {
        active === "All" ? (
          <TableCard columns={COLUMNS} data={clientsData} />
        ) : (<NewClient />)
      }
    </div>
  )
}

export default ClientsScreen;
const COLUMNS = [
  {
    label: "ID",
    renderCell: (item) => ""
  },
  {
    label: "Company Name",
    renderCell: (item) => ""
  },
  { label: "Company Email", renderCell: (item) => "" },
  { label: "Company VAT", renderCell: (item) => "" },
  { label: "Customer Group", renderCell: (item) => "" },
  { label: "language", renderCell: (item) => "" },

];