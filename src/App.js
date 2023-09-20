import React, { useRef } from 'react'
import './App.css';
import { Routes, Route , } from 'react-router';
import  Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Home } from './screens/Home';

function App() {
  const mainApp =useRef();
  
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


  return (
    <div className="app">
          <Sidebar change={changeWidth} previous={prevWidth}/>
          <div className="app__main" ref={mainApp}>
   <Navbar/>

     <Routes>
      <Route exact path='/' element={<Home/>}/>
     </Routes>
</div> 
    </div>
  );
}

export default App;
