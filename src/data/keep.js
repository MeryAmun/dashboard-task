import React, { useRef,useState } from 'react'
import './App.css';
import { Routes, Route , } from 'react-router';
import  Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Link } from 'react-router-dom'
import { Home } from './screens/Home';
import { sideBarData } from './data/data';

function App() {
  const mainApp =useRef();
  const [active, setActive] = useState(false)
  const [toggleWidth, setToggleWidth] = useState(false);
  const sidebarWidth = useRef();
  const [activeId, setActiveId] = useState(null);

  
  const changeWidth = () => {
    mainApp.current.style.left = '0%'
    mainApp.current.style.width = '80%'
    mainApp.current.style.transition = 'left ease 0.31s';
    mainApp.current.style.transition = 'width ease 0.31s';

      }
      const prevWidth = () => {
    mainApp.current.style.left = '-20%'
    mainApp.current.style.width = '20%'
    mainApp.current.style.transition = 'left ease 0.31s';
      
      }

// const handleActive = () => {
//   setActive(!active)
//   mainApp.current.style.width = '60%';
//   mainApp.current.style.transition = 'width ease 0.31s';
// }
const closeSide = () => {
  sidebarWidth.current.style.display = 'none'
 }
const handleActive  = () => {
  if(toggleWidth){
    changeWidth()
   setToggleWidth((prev) => !prev)
  }else{
    prevWidth()
   setToggleWidth((prev) => !prev)
  }
  
 }
  return (
    <div className="app">
      <div className="subMain" ref={mainApp} onClick={handleActive}>
          {/* <Sidebar change={changeWidth} previous={prevWidth} active={active}  ref={sidebarWidth}/>
          sidebar */}
          <div className='sidebar'>
      <div 
      className="sidebar__wrapper"
       ref={sidebarWidth}>
      <div className="sidebar__logoContainer">
       <div className="sidebar__logoBox">
        <Link to='/' className="sidebar__LogoLink" style={{fontSize:"15px"}}>
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
      </div>
          <div className="app__main">
   <Navbar handleActive={handleActive}/>

     <Routes>
      <Route exact path='/' element={<Home/>}/>
     </Routes>
</div> 
    </div>
  );
}

export default App;
