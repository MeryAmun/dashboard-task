import React, { useRef } from "react";
import { Menu, Moon} from "react-feather";
import { navBarData } from "../../data/data";
import "./navbar.css";
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import  FlagsMenu  from '../flags/FlagsMenu'
//import avatar  from '../../assets/avatar.svg'

const Navbar = () => {
  const bars = useRef()
  console.log(bars)
  






  return (
    <div className="navbar">
      <Menu size={30} color="black" className="navbar__menuIcon" onClick={() =>{}}/>
      <div className="navbar__icons">
        {navBarData.map((link) => (
          <OverlayTrigger
          placement='bottom'
          overlay={
            <Tooltip id={`tooltip-bottom`}>
             {link.title}
            </Tooltip>
          }
          key={link.id}
        >
          <Link to={link.link} className="navbar__link">
            {<link.icon size={20} className="navbar__icon" />}
          </Link>
          </OverlayTrigger>
        ))}
      </div>
      <div className="navbar__profile">
      <FlagsMenu/>
        <Moon size={20} className="navbar__icon" />
        <div className="navbar__login">
        <div class="dropdown">
  <div className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     <span>Bruce</span>
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
