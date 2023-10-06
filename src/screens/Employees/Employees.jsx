import React, { useState } from 'react'
import './styles.css'
import { EmployeesTableCard } from '../../components/plugins';
import CreateEmployee from './CreateEmployee';
import { employees } from "../../data/data"
import { BsEyeFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";


const EmployeesScreen = () => {
  const [active, setActive] = useState("All");

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
      label: "",
      renderCell: (item) => ( <img src={item.image} alt="" width="40px" height="40px" />)
    },
    {
      label: "Name",
      renderCell: (item) => (<span className="cell__item">{item.name}</span>),
    },
    { label: "Company", renderCell: (item) =>  (<span className="cell__item">{item.company}</span>) },
    { label: "City", renderCell: (item) => (<span className="cell__item">{item.city}</span>)},
    { label: "Progress", renderCell: (item) => (<span className="cell__item">{item.progress}</span>) },
    { label: "Created", renderCell: (item) =>  (<span className="cell__item">{item.joinedOn}</span>) },
    {
      label: "Action",
      renderCell: (item) => ""
      (
        <div className="d-flex justify-content-start align-items-center">
          <span className="mail mx-1">
            <BsEyeFill 
              size={20}
              color="white"
              onClick={() => handleEmail(item.id)}
            />
          </span>
          <span className="delete mx-1">
            <RiDeleteBinLine
              size={20}
              color="white"
              onClick={() => handleDelete(item.id)}
            />
          </span>
        </div>
      ),
    },
  ];
  
  
  return (
    <div>
    <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
      <button className={active === "All"? "promotionActive" : "promotion"} onClick={() => setActive("All")}>All Employees</button>
      <button className={active === "New"? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New Employees</button>
      </div>
      {
      active === "All" ? (<EmployeesTableCard columns={COLUMNS} data={employees} btnTitle="New Employee" />)
      : ( <CreateEmployee/>)
}
</div>
  )
}

export default EmployeesScreen;
