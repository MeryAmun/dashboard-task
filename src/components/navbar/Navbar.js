import React, { useRef,useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
//import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSettingsOutline, IoMail, IoLogOutOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import { Menu} from "react-feather";

const Navbar = ({handleActive}) => {
  const bars = useRef();
  const [toggleArrow, setToggleArrow] = useState(false)
  console.log(bars);

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center w-100" >
       <Menu
        size={30}
        color="black"
        className="navbar__menuIcon"
        onClick={handleActive}
      />
      <form className="d-flex px-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    <div className="me-2 d-flex flex-row-reverse justify-content-center align-items-center" style={{width:"20%", justifySelf:"flex-end"}}>
      
      <div className="navbar-collapse collapse show" id="navbarScroll">
        <div className="d-flex">
        <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* <BsThreeDotsVertical
                  size={25}
                  color="rgb(59, 130, 246)"
                  className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="true" aria-label="Toggle navigation"
                /> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse show" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item dropdown">
          <img src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93" width="25em" height="25em" style={{borderRadius:"50%"}}
            alt="" />
            <span
              className="btn dropdown-toggle"
            type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="active" aria-current="page" onClick={() => setToggleArrow(!toggleArrow)}>{"Bruce"}</span>
              
            </span>
            {
                !toggleArrow ? (
                <RiArrowDropDownLine
                  size={25}
                  color="rgb(59, 130, 246)"
                />) : (
                  <RiArrowDropUpLine
              size={25}
              color={!toggleArrow ? "black": "rgb(59, 130, 246)"}
              className="active"
            />
                )
              }
           <ul className="dropdown-menu">
              <li className="d-flex justify-content-around align-items-center p-2">
                <FaUserAlt size={15} color="black" />
                <Link
                  to="/profile"
                  className="fs-6 text-decoration-none text-secondary-emphasis"
                >
                  My Profile
                </Link>
              </li>
              <li className="d-flex justify-content-around align-items-center p-2">
                <IoSettingsOutline size={15} color="black" />
                <Link
                  to="/settings"
                  className="fs-6 text-decoration-none text-secondary-emphasis"
                >
                  Settings
                </Link>
              </li>
              <li className="d-flex justify-content-around align-items-center p-2">
                <IoMail size={15} color="black" />
                <Link
                  to="/messages"
                  className="fs-6 text-decoration-none text-secondary-emphasis"
                >
                  Messages
                </Link>
              </li>
              <li className="d-flex justify-content-around align-items-center p-2">
                <IoLogOutOutline size={15} color="black" />
                <Link
                  to="/profile"
                  className="fs-6 text-decoration-none text-secondary-emphasis"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        </div>
        </div>
      </div>
      </div>
    </div>
  </nav>
  );
};
export default Navbar;
