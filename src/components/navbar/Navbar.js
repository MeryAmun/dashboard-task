import React, { useRef,useState } from "react";
import { Menu} from "react-feather";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsOutline, IoMail, IoLogOutOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'


const Navbar = () => {
  const bars = useRef();
  const [toggleArrow, setToggleArrow] = useState(false)
  console.log(bars);

  return (
    <div className="navbar">
      <Menu
        size={30}
        color="black"
        className="navbar__menuIcon"
        onClick={() => {}}
      />
      <form className="d-flex px-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="navbar__profile">
        <div className="navbar__login">
          <div class="dropdown">
            <img src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93" width="30px" height="30px" style={{borderRadius:"50%"}}
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false" 
            alt="" />
            <span
              className="mx-2 dropdown-toggle"
             
      
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
              //     className="dropdown-toggle"
              // data-bs-toggle="dropdown"
              // aria-expanded="false"
                />) : (
                  <RiArrowDropUpLine
              size={25}
              color={!toggleArrow ? "black": "rgb(59, 130, 246)"}
              className="active"
              // data-bs-toggle="dropdown"
              // aria-expanded="false"
            />
                )
              }
            <ul class="dropdown-menu">
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
          </div>
        </div>
        {/* <FlagsMenu />
        <Moon size={20} className="navbar__icon" /> */}
        
      </div>
    </div>
  );
};
export default Navbar;
