import React, { useRef,useState,useEffect } from 'react'
import './App.css';
import { Routes, Route , } from 'react-router';
import  Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Home, UsersScreen } from './screens/index';
import { CustomCalender } from './components/calendar/index';
import FileManager from './components/FileManager/FileManager';
import { useLocation } from "react-router-dom";
import { getCurrentLocation } from './utils/utils';

function App() {
  const mainApp =useRef();
  const [active, setActive] = useState(false)
  const [toggleWidth, setToggleWidth] = useState(false);
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState()
  const sidebarWidth = useRef();

  
  useEffect(() => {
  setCurrentLocation(getCurrentLocation(location.pathname))
  }, [location.pathname])
  
  const changeWidth = () => {
    mainApp.current.style.width = '20%'
    mainApp.current.style.transition = 'width ease 0.31s';
    sidebarWidth.current.style.left = '0%'
    sidebarWidth.current.style.width = '80%'
    sidebarWidth.current.style.transition = 'left ease 0.31s';
    console.log(setActive)

      }
      const prevWidth = () => {
    mainApp.current.style.width = '80%'
    mainApp.current.style.transition = 'width ease 0.31s';
    sidebarWidth.current.style.left = '-20%'
    sidebarWidth.current.style.width = '20%'
    sidebarWidth.current.style.transition = 'left ease 0.31s';
      
      }

// const handleActive = () => {
//   setActive(!active)
//   mainApp.current.style.width = '60%';
//   mainApp.current.style.transition = 'width ease 0.31s';
// }
// const closeSide = () => {
//   sidebarWidth.current.style.display = 'none'
//  }
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
    <Navbar handleActive={handleActive} current={currentLocation}/>
          <div className="app__main" ref={mainApp}>
  <div className="sidebarContainer" ref={sidebarWidth}>
          <Sidebar change={changeWidth} previous={prevWidth} active={active}  ref={sidebarWidth}/>
  </div>

    <div className="subMain">
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/calendar' element={<CustomCalender/>}/>
      <Route exact path='/file-manager' element={<FileManager/>}/>
      <Route exact path='/users' element={<UsersScreen/>}/>
     </Routes>
    </div>
</div> 
    </div>
  );
}

export default App;
