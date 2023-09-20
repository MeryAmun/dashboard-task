import React,{ useState, useRef } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { sideBarData } from '../../data/data';


// const width ={
//   width:'30px'
// }
const Sidebar = ({active}) => {
  const [activeId, setActiveId] = useState(null);
  const sidebarWidth = useRef();

 
  return (
    <div className='sidebar'>
      <div 
      className="sidebar__wrapper"
       ref={sidebarWidth}>
      <div className="sidebar__logoContainer">
       <div className="sidebar__logoBox">
        <Link to='/' className="sidebar__LogoLink">
         Erp
        </Link>
       </div>
      </div>
  <div className="sidebar__links"> 
  {
    sideBarData.map((link) => (
<div className= { activeId === link.id ? "sidebar__linkContainer sidebar__linkContainerActive" : "sidebar__linkContainer"}
      onClick={() => setActiveId(link.id)
      }>
      <Link to={link.link} className="sidebar__link">
      {
        <link.icon size={15} className={ activeId === link.id ? 'sidebar__linkIcon sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkIcon'}/>
      }
    <span className={ activeId === link.id ? 'sidebar__linkTitle text-light sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkTitle '}>
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