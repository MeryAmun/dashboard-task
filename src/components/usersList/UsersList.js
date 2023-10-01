import React, { useState,useRef } from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { TiTimes, TiEdit } from "react-icons/ti";
import { TfiPrinter } from "react-icons/tfi";
import { AiOutlineFilePdf } from "react-icons/ai";
import JsPDF from 'jspdf';
import { CSVLink } from "react-csv";
import { useDownloadExcel } from "react-export-table-to-excel";

import { BsFiletypeXlsx, BsFiletypeCsv } from "react-icons/bs";
import { RiDeleteBinLine, RiMailLine } from "react-icons/ri";
import "./styles.css";
//import { DocumentationSee } from "../documentation";
//import { nodes } from "../data";
import { usersData } from "../../data/data";

const UsersList = () => {
  let data = usersData;
  const tableRef = useRef();
  const fileName = "usersReactCsv";
  const theme = useTheme(getTheme());
  const [search, setSearch] = useState("");
  const [selectRange, setSelectRange] = useState("");
  const [status, setStatus] = useState("offline")
console.log(status)
console.log(selectRange)

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users"
  });
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };
const toggleActiveStatus = (id) => {
  // if(status === "Active"){
  //   setStatus("")
  //   alert(` user ${id} went offline`);
  // }else{
  //   setStatus("Active")
   usersData.map((item) =>{
      if(item.id === id && item.activeStatus === "Active"){
       alert(`user ${id} came online`);
       setStatus("online")
      }else{
        setStatus("offline")
        alert(` user ${id} went offline`);
      }
      return status
    })
  //   alert(`user ${id} came online`);
  // }
}
  data = {
    nodes: usersData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };


   const handleGeneratePDF = () => {
     const report = new JsPDF('portrait','pt','a4');
     report.html(tableRef.current).then(() => {
         report.save('users.pdf');
     });
    }




  const handleEdit = (id) => {
    alert(`You want to Edit  user ${id}`);
  };
  const handleBan = (id) => {
    alert(`You want to Ban  user ${id}`);
  };
  const handleDelete = (id) => {
    alert(`You want to Delete user ${id}`);
  };
  const handleEmail = (id) => {
    alert(`You want to Email ${id}`);
  };

  const COLUMNS = [
    {
      label: "Photo",
      renderCell: (item) => (
        <img src={item.image} alt="" width="40px" height="40px" />
      ),
    },
    { label: "Name", renderCell: (item) => item.name },
    { label: "Username", renderCell: (item) => item.username },
    {
      label: "Active",
      renderCell: (item) => (
        <div className="text-align-center d-flex flex-column justify-content-center align-items-center">
          {" "}
          {item.activeStatus === "Active" ? (
            <span
          
             style={{
              backgroundColor: "#27C24C",
               fontSize: "10px",
                color: "white",
               padding: "5px",
              }}
             onClick={() => toggleActiveStatus(item.id)}
            >
              {item.activeStatus}
            </span>
          ) : (
            <span
          
             style={{
              backgroundColor: "rgb(00, 00,00)",
               fontSize: "10px",
                color: "white",
               padding: "5px",
              }}
             onClick={() => toggleActiveStatus(item.id)}
            >
              {item.activeStatus}
            </span>
            // <input
            //   className="p-5"
            //   type="checkbox"
            //   value={search}
            //   onChange={() => toggleActiveStatus(item.id, item.activeStatus)}
            // />
          )}
        </div>
      ),
    },
    { label: "UserType", renderCell: (item) => item.userType },
    {
      label: "Action",
      renderCell: (item) => (
        <div className="d-flex justify-content-start align-items-center">
          <span className="ban mx-1">
            <TiTimes
              size={10}
              color="white"
              onClick={() => handleBan(item.id)}
            />
          </span>
          <span className="mail mx-1">
            <RiMailLine
              size={10}
              color="white"
              onClick={() => handleEmail(item.id)}
            />
          </span>
          <span className="edit mx-1">
            <TiEdit
              size={10}
              color="white"
              onClick={() => handleEdit(item.id)}
            />
          </span>
          <span className="delete mx-1">
            <RiDeleteBinLine
              size={10}
              color="white"
              onClick={() => handleDelete(item.id)}
            />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-100 d-flex flex-column justify-content-start align-items-center p-4 bg-light">
      <div
        className="d-flex justify-content-between align-items-center w-100 py-4 px-1"
        style={{ border: "1px solid rgb(231, 227, 227)" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex  my-1 justify-content-between align-items-center mx-1">
            <select
              name=""
              id=""
              className="form_input"
              onChange={(e) => setSelectRange(e.target.value)}
              required
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <span className="printer mx-1">
            <TfiPrinter size={20} color="white" onClick={() => handleBan()} />
          </span>
          <span className="selected mx-1">
            <TfiPrinter
              size={20}
              color="white"
              className="mx-1"
              onClick={() => handleEmail()}
            />
            selected
          </span>
          <span className="xlxl mx-1">
            <BsFiletypeXlsx
              size={20}
              color="white"
              onClick={onDownload}
            />
          </span>
          <CSVLink
          data={usersData}
          filename={fileName}
          className="csv mx-1"
        >
            <BsFiletypeCsv
              size={20}
              color="white"
            />
            </CSVLink>
          <span className="pdf mx-1">
            <AiOutlineFilePdf
              size={20}
              color="white"
              onClick={handleGeneratePDF}
            />
          </span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center w-20"
          style={{ fontSize: "12px" }}
        >
          <span className="w-100 searchLabel">Search all columns:</span>
          <input
            id="search"
            className="border border-secondary p-1"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
     <div className="tableContainer w-100" ref={tableRef}>
     <CompactTable columns={COLUMNS} data={data} theme={theme} />
     </div>

      <br />
      {/* <DocumentationSee anchor={"Features/Search"} /> */}
      <div className="d-flex justify-content-between align-items-center w-100 px-4">
      <div className="">
        <p className="pagination_note">Showing <span>1</span> to <span>1</span> of <span>1</span> Entry</p>
      </div>
      <div className="pagination_buttons">
        <button className="bg-light" style={{backgroundColor:"5D9CEC", padding:"3px 10px", border:"none"}}>Previous</button>
        <button className="" style={{backgroundColor:"rgb(35, 183, 229)", padding:"3px 10px", border:"none"}}>1</button>
        <button className="bg-light" style={{backgroundColor:"5D9CEC", padding:"3px 10px", border:"none"}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default UsersList;

