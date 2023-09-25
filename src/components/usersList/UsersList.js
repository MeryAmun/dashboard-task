import React, { useState } from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { TiTimes,TiEdit } from 'react-icons/ti'
import { TfiPrinter } from 'react-icons/tfi'
import { AiOutlineFilePdf } from 'react-icons/ai'

import { BsFiletypeXlsx,BsFiletypeCsv} from 'react-icons/bs'
import { RiDeleteBinLine,RiMailLine } from 'react-icons/ri'
import './styles.css'
//import { DocumentationSee } from "../documentation";
//import { nodes } from "../data";
import { usersData } from "../../data/data";


const UsersList = () => {
  let data = usersData;

  const theme = useTheme(getTheme());

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: usersData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const handleStatusCheck = (id) =>{
    alert(`You have set  user ${id} active`)
  }
  const handleEdit = (id) => {
    alert(`You want to Edit  user ${id}`)
  }
  const handleBan = (id) => {
    alert(`You want to Ban  user ${id}`)
  }
  const handleDelete = (id) => {
    alert(`You want to Delete user ${id}`)
  }
  const handleEmail = (id) => {
    alert(`You want to Email ${id}`)
  }

  const COLUMNS = [
    { label: "Photo", renderCell: (item) => (<img src={item.image} alt="" width="40px" height="40px"/>) },
    { label: "Name", renderCell: (item) => item.name },
    { label: "Username", renderCell: (item) => item.username },
    { label: "Active", renderCell: (item) => (
        <div className="text-align-center d-flex flex-column justify-content-center align-items-center"> {
            item.status ==="Active" ? (
                <span style={{backgroundColor:"rgb(39, 194, 76)", fontSize:"10px", color:"white", padding:"5px"}}>{item.status}</span>
            ) : (
                <input className="p-5" type="checkbox" value={search} onChange={() => handleStatusCheck(item.id)} checked />
            )
        }
        </div>
        ),
     },
    { label: "UserType", renderCell: (item) => item.userType },
    { label: "Action", renderCell: (item) => (<div className="d-flex justify-content-start align-items-center">
     <span className="ban mx-1">
    <TiTimes size={10} color="white" onClick={() => handleBan(item.id)}/>
    </span>
    <span className="mail mx-1">
    <RiMailLine size={10} color="white" onClick={() => handleEmail(item.id)}/>
    </span>
    <span className="edit mx-1">
    <TiEdit size={10} color="white" onClick={() => handleEdit(item.id)}/>
    </span>
    <span className="delete mx-1">
    <RiDeleteBinLine size={10} color="white" onClick={() => handleDelete(item.id)}/>
    </span>
    </div>) },
  ];

  return (
    <div className="w-100 d-flex flex-column justify-content-start align-items-center ps-4 bg-light">
     <div className="d-flex justify-content-between align-items-center w-100 py-2 px-1"  style={{border:"1px solid rgb(231, 227, 227)"}}>
      <div className="d-flex justify-content-center align-items-center">
    <span className="printer mx-1">
    <TfiPrinter size={20} color="white" onClick={() => handleBan()}/>
    </span>
    <span className="selected mx-1">
    <TfiPrinter size={20} color="white" className="mx-1" onClick={() => handleEmail()}/>
    selected
    </span>
    <span className="xlxl mx-1">
    <BsFiletypeXlsx size={20} color="white" onClick={() => handleEdit()}/>
    </span>
    <span className="pdf mx-1">
    <BsFiletypeCsv  size={20} color="white" onClick={() => handleDelete()}/>
    </span>
    <span className="pdf mx-1">
    <AiOutlineFilePdf  size={20} color="white" onClick={() => handleDelete()}/>
    </span>
      </div>
      <div  className="d-flex justify-content-center align-items-center w-20" style={{fontSize:"12px"}}>
       <span className="w-100">Search all columns</span>
        <input id="search" className="border border-secondary p-1" type="text" value={search} onChange={handleSearch} />
      </div>
     </div>
      <CompactTable columns={COLUMNS} data={data} theme={theme} />

      <br />
      {/* <DocumentationSee anchor={"Features/Search"} /> */}
    </div>
  );
};

export default UsersList;












// import React from 'react'

// const UsersList = () => {
//   return (
//     <div>UsersList</div>
//   )
// }

// export default UsersList