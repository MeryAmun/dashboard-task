import React,{ useState} from "react";
import Paper from "@mui/material/Paper";
import { BsEyeFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles.css";
import { TablePagination } from "../index";

const UsersTableCard = ({ columns, data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage] = useState(5);
  //const [filtered, setFiltered] = useState(data);
  const indexOfLastRecord = currentPage * numPerPage;
  const indexOfFirstRecord = indexOfLastRecord - numPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
 const nPages = Math.ceil(data.length /  numPerPage);


// const handleInputChange = (e) => {
//   const searchTerm = e.target.value;
//   setSearchTerm(searchTerm);
//   const filteredItems = data.filter((item) =>  item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//   setFiltered(filteredItems)
//   setSearchTerm("")

// }


  const handleEdit = (id) => {
    alert(`You want to Edit  user ${id}`);
  };
  const handleDelete = (id) => {
    alert(`You want to Delete user ${id}`);
  };
  const handleEmail = (id) => {
    alert(`You want to Email ${id}`);
  };

  return (
    <Paper
      elevation={3}
      className="d-flex flex-column justify-content-start align-items-center w-100 pb-4"
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
                <td>{item?.username}</td>
                <td>
                  {item.activeStatus === "Active" ? (
                    <span
                      style={{
                        color: "#27C24C",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {item.activeStatus}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "rgb(239, 68, 68)",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {item.activeStatus}
                    </span>
                  )}
                </td>
                <td>{item?.userType}</td>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <span className="mail mx-1">
                      <BsEyeFill
                        size={15}
                        color="white"
                        onClick={() => handleEmail(item.id)}
                      />
                    </span>
                    <span className="edit mx-1">
                      <TiEdit
                        size={15}
                        color="white"
                        onClick={() => handleEdit(item.id)}
                      />
                    </span>
                    <span className="delete mx-1">
                      <RiDeleteBinLine
                        size={15}
                        color="white"
                        onClick={() => handleDelete(item.id)}
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

export default UsersTableCard;
