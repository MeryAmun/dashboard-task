import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { flagsData } from './Flags';
import './flagsMenu.css'

const  FlagsMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic" data-style-base="form-control"  data-style=""  className="form-control" >
      <span className="fi fi-us"></span> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {
        flagsData.map((flag,index) => (
            <Dropdown.Item href="#/action-3" key={index} className='flag__dropItem'>
                <div className="flag__itemBox">
                    <span className='flag__flagIcon'>{flag.icon}</span>
                    <span className='flag__language'>{flag.language}</span>
                </div>
            </Dropdown.Item>
        ))
       }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FlagsMenu;