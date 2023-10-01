import React, { useState, useRef } from "react";
import Paper from '@mui/material/Paper';
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { TiTimes, TiEdit } from "react-icons/ti";
import { TfiPrinter } from "react-icons/tfi";
import { AiOutlineFilePdf } from "react-icons/ai";
import JsPDF from 'jspdf';
import { CSVLink } from "react-csv";
import { useDownloadExcel } from "react-export-table-to-excel";
import { TiPlus } from 'react-icons/ti'
import { BsFiletypeXlsx, BsFiletypeCsv } from "react-icons/bs";
import { RiDeleteBinLine, RiMailLine } from "react-icons/ri";
import "./styles.css";
//import { DocumentationSee } from "../documentation";
//import { nodes } from "../data";
import { usersData } from "../../data/data";

const Promotions = () => {
  let data = [];
  const tableRef = useRef();
  const fileName = "usersReactCsv";
  const theme = useTheme(getTheme());
  const [search, setSearch] = useState("");
  const [selectRange, setSelectRange] = useState("");
  const [status, setStatus] = useState("offline")


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
    data.map((item) => {
      if (item.id === id && item.activeStatus === "Active") {
        alert(`user ${id} came online`);
        setStatus("online")
      } else {
        setStatus("offline")
        alert(` user ${id} went offline`);
      }
      return status
    })
    //   alert(`user ${id} came online`);
    // }
  }
  data = {
    nodes: data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };


  const handleGeneratePDF = () => {
    const report = new JsPDF('portrait', 'pt', 'a4');
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
  //<span style={{fontSize:"14px", color:"#656565"}}>Designation</span>
  const COLUMNS = [
    {
      label: "Employee Name",
      renderCell: (item) => ""
    },
    { label: "Designation", color: "#656565", renderCell: (item) => "" },
    { label: "Promotion Title", renderCell: (item) => "" },
    { label: "Promotion Date", renderCell: (item) => "" },
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

  return (
    <Paper elevation={3} className="d-flex flex-column justify-content-start align-items-center  py-4 mx-4">
      <div className="w-100 d-flex flex-column justify-content-start align-items-center">
        <div className="d-flex justify-content-between align-items-center w-100" style={{ borderBottom: "2px solid #1797BC" }}>
          <h3 className='reportCard__title  ms-3 py-3' style={{ fontSize: "16px", color: "#656565" }}>Promotions</h3>
          <div className="d-flex justify-content-between align-items-center p-1 me-3" style={{ fontSize: "14px", backgroundColor: "#1797BC" }}>
            <TiPlus size={20} color="#FFFFFF" />
            <span style={{ fontSize: "14px", color: "#FFFFFF" }}>New Promotion</span>
          </div>
        </div>
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
      </div>

      <div className="tableContainer w-100" ref={tableRef}>
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
      </div>

      <br />
      {/* <DocumentationSee anchor={"Features/Search"} /> */}
      <div className="d-flex justify-content-between align-items-center w-100 px-4">
        <div className="">
          <p className="pagination_note">Showing <span>{data.length}</span> to <span>{data.length}</span> of <span>{data.length}</span> Entry</p>
        </div>
        <div className="pagination_buttons">
          <button className="bg-light" disabled={data.length > 0 ? false : true} style={{ backgroundColor: "5D9CEC", padding: "3px 10px", border: "none" }}>Previous</button>
          {
            data.length > 0 && <button className="" style={{ backgroundColor: "rgb(35, 183, 229)", padding: "3px 10px", border: "none" }}>1</button>
          }
          <button className="bg-light" disabled={data.length > 0 ? false : true} style={{ backgroundColor: "5D9CEC", padding: "3px 10px", border: "none" }}>Next</button>
        </div>
      </div>
    </Paper>
  );
};

export default Promotions;

