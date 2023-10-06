import React from "react";
import Paper from "@mui/material/Paper";
import "./styles.css";
import ProgressBar from 'react-bootstrap/ProgressBar';


const TableCard = ({ columns, data }) => {


  return (
    <Paper
      elevation={3}
      className="d-flex flex-column justify-content-center w-100 align-items-center pb-4">
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
          {data.map((item) => (
            <tr className="px-4" key={item.id}>
              <td>{item.id}</td>
              <td>{item.projectName}</td>
              <td>{item.projectClients}</td>
             {
              item.progress && ( <td> <ProgressBar animated now={item?.progress}  label={`${item?.progress}%`}
               variant="success" size="sm"/></td>)
             }
              <td>{item.startDate}</td>
              {
                item.endDate && (<td>{item.endDate}</td>)
              }
             {
              item.billingType && ( <td>{item.billingType}</td>)
             }
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
            Showing <span>{data.length}</span> to <span>{data.length}</span> of{" "}
            <span>{data.length}</span> Entry
          </p>
        </div>
        <div className="pagination_buttons">
          <button
            className="bg-light"
            disabled={data.length > 0 ? false : true}
            style={{
              backgroundColor: "5D9CEC",
              padding: "3px 10px",
              border: "none",
            }}
          >
            Previous
          </button>
          {data.length > 0 && (
            <button
              className=""
              style={{
                backgroundColor: "rgb(35, 183, 229)",
                padding: "3px 10px",
                border: "none",
              }}
            >
              1
            </button>
          )}
          <button
            className="bg-light"
            disabled={data.length > 0 ? false : true}
            style={{
              backgroundColor: "5D9CEC",
              padding: "3px 10px",
              border: "none",
            }}
          >
            Next
          </button>
        </div>
      </div>
      </div>
    </Paper>
  );
};

export default TableCard;
