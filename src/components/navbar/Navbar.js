import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
//import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSettingsOutline, IoMail, IoLogOutOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Menu } from "react-feather";
import { userAvatar } from "../../assets";
import { FiBell } from "react-icons/fi";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Navbar = ({ handleActive }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar_container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-start align-items-center w-100 p-0">
        <div className="navbar__logo_space">
        </div>
        <div
          className="navbar__main"
        >
          <div className="d-flex justify-content-between align-items-center w-100">
            <Menu
              size={50}
              color="#fff"
              className="navbar__menuIcon"
              onClick={handleActive}
            />
            <div className="sidebar__searchBar d-flex justify-content-start align-items-center w-100">
              <IoSearch size={17} color="gray" className="me-1" />
              <input
                type="text"
                placeholder="Search in menu..."
                className="searchbar__input w-100 py-2"
              />
            </div>
          </div>
          <div
            className="navbar__endSection">
            <div className="navbar-collapse collapse show" id="navbarScroll">
              <div className="d-flex" >
                <div className="container-fluid navbar__endSection">
                  {/* <BsPlusCircleFill
                    size={15}
                    color="#fff"
                    className="mx-2"
                  /> */}
                  <div className="d-flex justify-content-between align-items-center mx-2">
                    <FaFlag size={15} color="#fff" className="language__icon" />
                    <span
                      className="text-light ms-2"
                      style={{ fontSize: "12px" }}
                    >
                      Languages
                    </span>
                  </div>
                  <FiBell size={15} color="#fff" className="mx-2" />
                  <div
                    className="navbar-collapse collapse show d-flex justify-content-between align-items-center mx-2"
                    id="navbarScroll"
                  >
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                      <li className="nav-item dropdown">
                        <img
                          src={userAvatar}
                          width="25em"
                          height="25em"
                          style={{ borderRadius: "50%" }}
                          alt=""
                        />
                        <span
                          className="btn dropdown-toggle border-0"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span
                            className={
                              active
                                ? "icon-link-hover text-light link-item"
                                : "link__Active icon-link-hover text-light link-item"
                            }
                            aria-current="page"
                            onClick={() => setActive(!active)}
                          >
                            {"Chebesi Awah"}
                          </span>
                        </span>
                        {!active ? (
                          <RiArrowDropDownLine
                            size={25}
                            color="rgb(59, 130, 246)"
                          />
                        ) : (
                          <RiArrowDropUpLine
                            size={25}
                            color={!active ? "black" : "rgb(59, 130, 246)"}
                            className="active"
                          />
                        )}
                        <ul className="dropdown-menu">
                          <li className="d-flex justify-content-around align-items-center p-2">
                            <FaUserAlt size={15} className="link-icon" />
                            <Link
                              to="/profile"
                              className=" link-item text-decoration-none"
                            >
                              My Profile
                            </Link>
                          </li>
                          <li className="d-flex justify-content-around align-items-center p-2">
                            <IoSettingsOutline
                              size={15}
                              className="link-icon"
                            />
                            <Link
                              to="/settings"
                              className=" link-item text-decoration-none"
                            >
                              Settings
                            </Link>
                          </li>
                          <li className="d-flex justify-content-around align-items-center p-2">
                            <IoMail size={15} className="link-icon" />
                            <Link
                              to="/messages"
                              className=" link-item text-decoration-none"
                            >
                              Messages
                            </Link>
                          </li>
                          <li className="d-flex justify-content-around align-items-center p-2">
                            <IoLogOutOutline size={15} className="link-icon" />
                            <Link
                              to="/profile"
                              className=" link-item text-decoration-none"
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
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
