import React,{ useState } from 'react'
import "./styles.css";
import { TableCard } from '../../components/plugins/index'
import NewPromotion from './NewPromotion';
import { promotionsData } from "../../data/tableData"

const Promotions = () => {
const [active, setActive] = useState("All");

  return (
    <div>
      <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
        <button className={active === "All"? "promotionActive" : "promotion"} onClick={() => setActive("All")}>All Promotions</button>
        <button className={active === "New"? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Promotion</button>
        </div>
     {
      active === "All" ? (
        <TableCard columns={COLUMNS} data={promotionsData} title="Promotions" btnTitle="New Promotion" />
      ) : (<NewPromotion/>)
     }
    </div>
  );
};

export default Promotions;

const COLUMNS = [
  {
    label: "ID",
    renderCell: (item) => ""
  },
  {
    label: "Employee Name",
    renderCell: (item) => ""
  },
  { label: "Designation", renderCell: (item) => "" },
  { label: "Promotion Title", renderCell: (item) => "" },
  { label: "Promotion Date", renderCell: (item) => "" },
  { label: "Description", renderCell: (item) => "" },
  
];