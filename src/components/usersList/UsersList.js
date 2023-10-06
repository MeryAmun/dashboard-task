import React from "react";
import { TiEdit } from "react-icons/ti";
import { BsEyeFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles.css";
import { usersData } from "../../data/data";
import { UsersTableCard } from "../plugins/index";

const UsersList = () => {
  // data = {
  //   nodes: usersData.filter((item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase())
  //   ),
  // };


  const handleEdit = (id) => {
    alert(`You want to Edit  user ${id}`);
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
    {
      label: "Name",
      renderCell: (item) => <span className="cell__item">{item.name}</span>,
    },
    {
      label: "Username",
      renderCell: (item) => <span className="cell__item">{item.username}</span>,
    },
    {
      label: "Active",
      renderCell: (item) => (
        <div className="text-align-center ">
          {" "}
          {item.activeStatus === "Active" ? (
            <span
              style={{
                color: "#27C24C",
                fontSize: "10px",
                fontWeight: "500",
              }} 
            >
              {item.activeStatus}
            </span>
          ) : (
            <span
              style={{
                color: "rgb(239, 68, 68)",
                fontSize: "10px",
                fontWeight: "500",
              }}
           
            >
              {item.activeStatus}
            </span>
          )}
        </div>
      ),
    },
    {
      label: "UserType",
      renderCell: (item) => <span className="cell__item">{item.userType}</span>,
    },
    {
      label: "Action",
      renderCell: (item) => (
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
      ),
    },
  ];

  return <UsersTableCard columns={COLUMNS} data={usersData} />;
};

export default UsersList;
