import React,{ useState, useRef } from 'react'
import './sidebar.css'
import { Disc, X, Circle} from 'react-feather';
import { Link } from 'react-router-dom'

import { sideBarData } from '../../data/data';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// const width ={
//   width:'30px'
// }
const Sidebar = ({change, previous}) => {
  // const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState(null);
  // const [linkId, setLinkId] = useState(null);
  const [toggleWidth, setToggleWidth] = useState(false);
  const sidebarWidth = useRef();
  // const linkIcon = useRef();
  // const linkTitle = useRef()


 const closeSide = () => {
   sidebarWidth.current.style.display = 'none'
  }

  // const openSide = () => {
  //   sidebarWidth.current.style.display = 'flex'
  //  }

  const toggleSide = () => {
   if(toggleWidth){
    change()
    setToggleWidth((prev) => !prev)
   }else{
    previous()
    setToggleWidth((prev) => !prev)
   }
   
  }
 
  return (
    <div className='sidebar'>
      <div 
      className={  toggleWidth  ? "sidebar__wrapper sidebar__wrapperActive" : "sidebar__wrapper "}
       ref={sidebarWidth}>
      <div className="sidebar__logoContainer">
       <div className="sidebar__logoBox">
       {/* <Link to='/' className="sidebar__LogoLink">
       <img src={logo} alt="logo" width='30px' height='30px' className='sidebar__image'/>
       </Link> */}
        <Link to='/' className="sidebar__LogoLink">
         Erp
        </Link>
       </div>
        {
          toggleWidth ? <Disc size={25} className='sidebar__radioButton' onClick={toggleSide}/>
          :
          <Circle size={25} className='sidebar__radioButton'onClick={toggleSide}/>
        }
        <X size={30} className='sidebar__closeButton' onClick={closeSide}/>
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