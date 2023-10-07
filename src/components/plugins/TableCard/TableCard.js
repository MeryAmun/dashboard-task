import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "./styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { TablePagination } from "../index";

const TableCard = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage] = useState(5);
  //const [filtered, setFiltered] = useState(data);
  const indexOfLastRecord = currentPage * numPerPage;
  const indexOfFirstRecord = indexOfLastRecord - numPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / numPerPage);

  return (
    <Paper
      elevation={3}
      className="d-flex flex-column justify-content-center w-100 align-items-center pb-4"
    >
      <div className="w-100">
        <table className="table">
          <thead className="table__head">
            <tr className="table__head">
              {columns.map((col) => (
                <th
                  scope="col"
                  style={{ fontSize: "13px", color: "#000", fontWeight: "500" }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((item) => (
              <tr className="px-4" key={item.id}>
                <td>{item.id}</td>
                <td>{item.projectName}</td>
                <td>{item.projectClients}</td>
                {item.progress && (
                  <td>
                    {" "}
                    <ProgressBar
                      animated
                      now={item?.progress}
                      label={`${item?.progress}%`}
                      variant="success"
                      size="sm"
                    />
                  </td>
                )}
                <td>{item.startDate}</td>
                {item.endDate && <td>{item.endDate}</td>}
                {item.billingType && <td>{item.billingType}</td>}
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        {/* <DocumentationSee anchor={"Features/Search"} /> */}
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
      </div>
    </Paper>
  );
};

export default TableCard;
