import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { BsEyeFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles.css";
import { TablePagination } from "../index";
import ProgressBar from 'react-bootstrap/ProgressBar';

const EmployeesTableCard = ({ columns, data }) => {
  //const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage] = useState(5);
  //const [filtered, setFiltered] = useState(data);
  const indexOfLastRecord = currentPage * numPerPage;
  const indexOfFirstRecord = indexOfLastRecord - numPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
 const nPages = Math.ceil(data.length /  numPerPage);


  // const handleInputChange = (e) => {
  //   const searchValue = e.target.value;
  //   setSearchTerm(searchTerm);
  //   const filteredItems = data.filter((item) =>
  //     item.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFiltered(filteredItems);
  //   setSearchTerm("");
  // };
//console.log(currentRecords)
  // useEffect(() => {
  //   setFetchedData(data[numPerPage])
  //   setFiltered(data[numPerPage])
  // }, [currentPage])
  
  //const toggleActiveStatus = (id) => {
    // if(status === "Active"){
    //   setStatus("")
    //   alert(` user ${id} went offline`);
    // }else{
    //   setStatus("Active")
    // data.map((item) => {
    //   if (item.id === id && item.activeStatus === "Active") {
    //     alert(`user ${id} came online`);
    //     setStatus("online")
    //   } else {
    //     setStatus("offline")
    //     alert(` user ${id} went offline`);
    //   }
    //   return status
    // })
    //alert(`user ${id} came online`);
    //}
 // };

  // const handleEdit = (id) => {
  //   alert(`You want to Edit  user ${id}`);
  // };
  // const handleDelete = (id) => {
  //   alert(`You want to Delete user ${id}`);
  // };
  // const handleEmail = (id) => {
  //   alert(`You want to Email ${id}`);
  // };

  return (
    <Paper
      elevation={3}
      className="d-flex flex-column justify-content-start align-items-center pb-4 w-100"
    >
      <div className="w-100">
        <table className="table">
          <thead className="">
            <tr>
              {columns.map((col) => (
                <th
                  scope="col"
                  style={{
                    fontSize: "13px",
                    color: "#656565",
                    fontWeight: "500",
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords?.map((item) => (
              <tr>
                <td>
                  <img src={item?.image} alt="" width="40px" height="40px" />
                </td>
                <td>{item?.name}</td>
                <td>{item?.company}</td>
                <td>{item.city}</td>
                <td>
                <ProgressBar animated now={item?.progress}  label={`${item?.progress}%`}
               variant="success" size="sm"/>
                </td>
                <td>{item?.joinedOn}</td>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <span className="mail mx-1">
                      <BsEyeFill
                        size={15}
                        color="white"
                        onClick={() =>{}}
                      />
                    </span>
                    <span className="delete mx-1">
                      <RiDeleteBinLine
                        size={15}
                        color="white"
                        onClick={() =>{}}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />
      <div className="d-flex justify-content-between align-items-center w-100 px-4">
        <div className="">
        <p className="pagination_note">
            Showing Page <span>{currentPage}</span> of{" "}
            <span>{nPages} pages</span>
          </p>
        </div>
        <TablePagination 
      nPages={nPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
      </div>
    </Paper>
  );
};

export default EmployeesTableCard;
