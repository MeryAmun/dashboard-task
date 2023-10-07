import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom'
//import Paper from '@mui/material/Paper';


const TodoList = () => {

  return (
    <div className="todoList__container">
      <div className="todo__listHeader todo-preview  panel pane-custom menu">
        <header className="panel-heading d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center p-2">
            <h3 className="panel-title">Todo List | </h3>
            <Link
              className="panel-title__link"
              target="_blank"
              to="/all_todo"
            >
              View all
            </Link>
          </div>
          <div
            className="pull-right pe-2"
            style={{ paddingTop: "0px", paddingBottom: " 8px" }}
          >
            <Link
              to="dashboard/new_todo"
              className="panel-title__btn"
              data-toggle="modal"
              data-placement="top"
              data-target="#myModal_lg"
            >
              Add new
            </Link>
          </div>
        </header>
      </div>
      <table class="table todo-preview table-striped m-b-none text-sm items">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th style={{ fontSize: "13px", color: "#656565" }}>What To Do</th>
            <th style={{ fontSize: "13px", color: "#656565" }}>Status</th>
            <th style={{ fontSize: "13px", color: "#656565" }}>End Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export default TodoList;
