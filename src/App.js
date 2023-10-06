import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import {
  Home,
  UsersScreen,
  CustomCalendar,
  FileManager,
  Promotions,
  Projects,
  TasksScreen,
  Termination,
  EmployeesScreen,
  TransactionsScreen,
  ClientsScreen,
  GoalsScreen,
  DealsScreen,
  ContractScreen
} from "./screens/index";
import { useLocation } from "react-router-dom";
import { getCurrentLocation } from "./utils/utils";
import moment from "moment";

const date = new Date();

function App() {
  const mainApp = useRef();
  const [active, setActive] = useState(false);
  const [toggleWidth, setToggleWidth] = useState(false);
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState();
  const sidebarWidth = useRef();

  useEffect(() => {
    setCurrentLocation(getCurrentLocation(location.pathname));
  }, [location.pathname]);

  const changeWidth = () => {
    mainApp.current.style.width = "20%";
    mainApp.current.style.transition = "width ease 0.31s";
    sidebarWidth.current.style.left = "0%";
    sidebarWidth.current.style.width = "80%";
    sidebarWidth.current.style.transition = "left ease 0.31s";
    console.log(setActive);
  };
  const prevWidth = () => {
    mainApp.current.style.width = "80%";
    mainApp.current.style.transition = "width ease 0.31s";
    sidebarWidth.current.style.left = "-20%";
    sidebarWidth.current.style.width = "20%";
    sidebarWidth.current.style.transition = "left ease 0.31s";
  };

  // const handleActive = () => {
  //   setActive(!active)
  //   mainApp.current.style.width = '60%';
  //   mainApp.current.style.transition = 'width ease 0.31s';
  // }
  // const closeSide = () => {
  //   sidebarWidth.current.style.display = 'none'
  //  }
  const handleActive = () => {
    if (toggleWidth) {
      changeWidth();
      setToggleWidth((prev) => !prev);
    } else {
      prevWidth();
      setToggleWidth((prev) => !prev);
    }
  };
  return (
    <div className="app">
      <Navbar handleActive={handleActive} />
      <div className="app__main" ref={mainApp}>
        <div className="sidebarContainer" ref={sidebarWidth}>
          <Sidebar
            change={changeWidth}
            previous={prevWidth}
            active={active}
            ref={sidebarWidth}
          />
        </div>

        <div className="subMain">
          <div
            className="w-100 d-flex justify-content-between align-items-center"
            style={{ 
              // borderBottom: "2px solid #F0F0F0",
               backgroundColor:"#fff",padding:"20px 0" }}
          >
            <span
              className="navbarFooter__title"
              style={{ marginLeft: "20px" ,color:"#000"}}
            >
              {currentLocation}
            </span>
            <div
              className="d-flex justify-content-center align-items-center pt-3"
              style={{ marginRight: "100px" }}
            >
              <p className="navbar_clock mx-2">
                {moment(date).format("MMMM Do YYYY")}
              </p>
              <p className="navbar_clock">
                Time: {moment(date).format("h:mm:ss a")}
              </p>
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calendar" element={<CustomCalendar />} />
            <Route exact path="/file-manager" element={<FileManager />} />
            <Route exact path="/users" element={<UsersScreen />} />
            <Route exact path="/promotions" element={<Promotions />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/tasks" element={<TasksScreen />} />
            <Route exact path="/termination" element={<Termination />} />
            <Route exact path="/employees" element={<EmployeesScreen />} />
            <Route exact path="/goals" element={<GoalsScreen />} />
            <Route exact path="/deals" element={<DealsScreen />} />
            <Route exact path="/contracts" element={<ContractScreen />} />
            <Route
              exact
              path="/transactions"
              element={<TransactionsScreen />}
            />
            <Route exact path="/clients" element={<ClientsScreen />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
