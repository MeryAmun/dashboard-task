import React, { useRef,useState } from 'react'
import './App.css';
import { Routes, Route , } from 'react-router';
import  Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Home } from './screens/Home';

function App() {
  const mainApp =useRef();
  const [active, setActive] = useState(false)
  const [toggleWidth, setToggleWidth] = useState(false);
  const sidebarWidth = useRef();
  
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
      <div className="subMain" ref={sidebarWidth} onClick={handleActive}>
          <Sidebar change={changeWidth} previous={prevWidth} active={active}  ref={sidebarWidth}/>
          {/* sidebar */}
      </div>
          <div className="app__main" ref={mainApp}>
   <Navbar handleActive={handleActive}/>

     <Routes>
      <Route exact path='/' element={<Home/>}/>
     </Routes>
</div> 
    </div>
  );
}

export default App;
