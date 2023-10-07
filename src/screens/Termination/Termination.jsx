import React, { useState } from 'react'
import './styles.css'
// import { TiTimes, TiEdit } from "react-icons/ti";
// import { TiPlus } from 'react-icons/ti'
// import { RiDeleteBinLine, RiMailLine } from "react-icons/ri";
import { TableCard } from '../../components/plugins';
import TerminationType from './TerminationType';
import NewTermination from './NewTermination';

const TerminationScreen = () => {
  const [active, setActive] = useState("All");
  const data = [];
console.log(setActive())
  return (
    <>
      {
        active === "All" ? (
          <TableCard columns={COLUMNS} data={data} title="Termination" btnTitle="New Termination" />
        ) : active === "New" ? (<NewTermination />) : (<TerminationType />)
      }

    </>
  )
}

export default TerminationScreen;
const COLUMNS = [
  {
    label: "Employee Name",
    renderCell: (item) => ""
  },
  { label: "Termination Type", renderCell: (item) => "" },
  { label: "Notice Date", renderCell: (item) => "" },
  { label: "Termination Date", renderCell: (item) => "" },
  {
    label: "Action",
    renderCell: (item) => ""
    // (
    //   <div className="d-flex justify-content-start align-items-center">
    //     <span className="ban mx-1">
    //       <TiTimes
    //         size={10}
    //         color="white"
    //         onClick={() => handleBan(item.id)}
    //       />
    //     </span>
    //     <span className="mail mx-1">
    //       <RiMailLine
    //         size={10}
    //         color="white"
    //         onClick={() => handleEmail(item.id)}
    //       />
    //     </span>
    //     <span className="edit mx-1">
    //       <TiEdit
    //         size={10}
    //         color="white"
    //         onClick={() => handleEdit(item.id)}
    //       />
    //     </span>
    //     <span className="delete mx-1">
    //       <RiDeleteBinLine
    //         size={10}
    //         color="white"
    //         onClick={() => handleDelete(item.id)}
    //       />
    //     </span>
    //   </div>
    // ),
  },
];