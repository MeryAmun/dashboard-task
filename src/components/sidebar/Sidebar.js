import React,{ useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { sideBarData } from '../../data/data';
import {userAvatar} from '../../assets/index'
import { GoDotFill } from 'react-icons/go'
import { IoSearch } from 'react-icons/io5'


// const width ={
//   width:'30px'
// }
const Sidebar = ({ handleActive }) => {
  const [activeId, setActiveId] = useState(null);
  //const [online, setOnline] = useState(true)
 
  return (
    <div className='sidebar'>
      <div 
      className="sidebar__wrapper">
      <div className="sidebar__logoContainer">
       <div className="sidebar__logoBox">
     
        <div className="d-flex justify-content-center align-items-center w-100 mt-4">
        <img src={userAvatar} alt="" width="80px" height="80px" className='my-1'
        style={{borderRadius:"50%"}}
        />
        <GoDotFill size={25} color='yellowgreen' className='online_indicator'/>
      
       </div>
       <span className='username my-1'>{"Chebesi Awah"}</span>
       <Link to='/user/:id' className="onlineText">online</Link>
       </div>
       
      </div>
     
  <div className="sidebar__links"> 
  <div className="sidebar__searchBar d-flex justify-content-start align-items-center w-100">
      <IoSearch size={17} color='gray' className='me-1'/>
      <input type="text" placeholder='Search in menu...' className='searchbar__input w-100'/>
      </div>
  {
    sideBarData.map((link) => (
<div className= { activeId === link.id ? "sidebar__linkContainer sidebar__linkContainerActive" : "sidebar__linkContainer"}
      onClick={() => setActiveId(link.id)
      }>
      <Link to={link.link} className={ activeId === link.id ? "sidebar__link linkTitleActive":"sidebar__link"}
      onClick={handleActive}
      >
      {
        <link.icon size={15} className={ activeId === link.id ? 'sidebar__linkIcon sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkIcon'}/>
      }
    <span className={ activeId === link.id ? 'linkTitleActive ': 'sidebar__linkTitle '}>
      {link.title}
      </span>
      </Link>
      </div>
    ))
   }</div>
      </div>
    </div>
  )
}

export default Sidebar