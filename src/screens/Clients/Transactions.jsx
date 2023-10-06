import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import NewAccount from './NewClient';
import { accounts } from "../../data/tableData"


const TransactionsScreen = () => {
  const [active, setActive] = useState("All");


  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center ps-4 promotionScreen_header">
        <button className={active === "All"? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Account Logs</button>
        <button className={active === "New"? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Accounts</button>
        </div>
     {
      active === "All" ? (
        <TableCard columns={COLUMNS} data={accounts} />
      ) : (<NewAccount/>)
     }
    </div>
  )
}

export default TransactionsScreen;
const COLUMNS = [
  {
    label: "ID",
    renderCell: (item) => ""
  },
  {
    label: "Account Name",
    renderCell: (item) => ""
  },
  { label: "Account Number", renderCell: (item) => "" },
  { label: "Initial Balance", renderCell: (item) => "" },
  { label: "Contact Person", renderCell: (item) => "" },
  { label: "Phone", renderCell: (item) => "" },
  { label: "Bank Details", renderCell: (item) => "" },
  
];