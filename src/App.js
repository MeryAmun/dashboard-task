import React, { useRef,useState } from 'react'
import './App.css';
import { Routes, Route , } from 'react-router';
import  Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Home } from './screens/Home';
import { Menu} from "react-feather";

function App() {
  const mainApp =useRef();
  const [active, setActive] = useState(false)
  
  const changeWidth = () => {
    mainApp.current.style.width = '90%'
    mainApp.current.style.transition = 'width ease 0.31s';
        //console.log(appDoc.style.with)
      }
      const prevWidth = () => {
    mainApp.current.style.width = '70%'
    mainApp.current.style.transition = 'width ease 0.31s';
        //console.log(appDoc.style.with)
      }

const handleActive = () => {
  setActive(!active)
}
  return (
    <div className="app">
      <Menu
        size={30}
        color="black"
        className="navbar__menuIcon"
        onClick={handleActive}
      />
          <Sidebar change={changeWidth} previous={prevWidth} active={active}/>
          <div className="app__main" ref={mainApp}>
   <Navbar />

     <Routes>
      <Route exact path='/' element={<Home/>}/>
     </Routes>
</div> 
    </div>
  );
}

export default App;
