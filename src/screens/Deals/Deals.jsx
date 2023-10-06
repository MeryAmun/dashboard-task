import React, { useState } from 'react'
import './styles.css'
import { TableCard } from '../../components/plugins';
import NewDeal from './NewDeal';
import { accounts } from "../../data/tableData";

const DealsScreen = () => {
  const [active, setActive] = useState("All");




  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All" ? "promotionActive" : "promotion"} onClick={() => setActive("All")}>Deals Log</button>
        <button className={active === "New" ? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Deal</button>
      </div>
      {
        active === "All" ? (
          <TableCard columns={COLUMNS} data={accounts} />
        ) : (<NewDeal />)
      }
    </div>
  )
}

export default DealsScreen;
const COLUMNS = [
  {
    label: "ID",
    renderCell: (item) => ""
  },
  { label: "Title", renderCell: (item) => "" },
  { label: "Deal Value", renderCell: (item) => "" },
  { label: "Source", renderCell: (item) => "" },
  { label: "Close Date", renderCell: (item) => "" },
  { label: "Pipeline", renderCell: (item) => "" },
  { label: "Company VAT", renderCell: (item) => "" },

];