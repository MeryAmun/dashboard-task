import React from 'react'
import { SlGraph } from 'react-icons/sl'
import OverViewCard from '../components/cards/OverviewCard'
import { clients, overViewData, transactions, reportLabels, options, incomeLabels } from '../data/data'
import ClientCard from '../components/cards/ClientCard'
import TransactionsCard from '../components/cards/TransactonsCard'
import { IoSettingsSharp } from "react-icons/io5";
import { HiMiniUsers } from 'react-icons/hi2'
import {
  TodoList, LineChart, ActivityCard, ReportCard, IncomeExpense,
  FinanceOverview,
  TaskAndProjectCard, RecentInvoices
} from '../components/plugins'
import Paper from '@mui/material/Paper';
import Moveable from "react-moveable";


const Home = () => {
 // const dragTargetRef = useRef();


  return (
    <div className='home w-100 bg-gray-50 py-4'>
      <div className="home__overview w-100">
        <div className="d-flex justify-content-between align-items-center px-4 w-100">
          <div className="d-flex justify-content-start align-items-center px-4">
            <SlGraph
              size={30}
              color="black"
              className="dropdown-toggle"
            />
            <h2 className='ms-3 fs-3'>Overview</h2>
          </div>
          <IoSettingsSharp
            size={20}
            color="black"
            className="dropdown-toggle"
          />
        </div>
        <div className="d-flex flex-wrap py-4 gap-2 w-100">
          {
            overViewData.map((data) => (
              <OverViewCard key={data.id} data={data} />
            ))
          }
        </div>
      </div>
      <div className="d-flex clients justify-content-between align-items-center py-4 gap-2 w-100">
        <div className="d-flex flex-column justify-content-between align-items-center py-4 gap-2 w-100">
          {
            transactions.map((data) => (
              <TransactionsCard key={data.id} data={data} />
            ))
          }
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center py-4 gap-2 w-100">
          {
            clients.map((data) => (
              <ClientCard key={data.id} data={data} />
            ))
          }
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center px-4 w-100">
        <div className="d-flex justify-content-start align-items-center px-4">
          <HiMiniUsers
            size={30}
            color="black"
            className="dropdown-toggle"
          />
          <h2 className='ms-2 fs-4 fw-lighter'>Clients</h2>
        </div>
        <IoSettingsSharp
          size={15}
          color="black"
          className="dropdown-toggle"
        />
      </div>

      <div className="dashboard__graphs d-flex justify-content-start flex-wrap align-items-center w-100 p-4 bg-gray-50" >
        <Moveable
          target={".dashboard__graph"}
          individualGroupable={true}
          draggable={true}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          throttleDragRotate={0}
          scalable={true}
          keepRatio={false}
          throttleScale={0}
          renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
          rotatable={true}
          throttleRotate={0}
          rotationPosition={"top"}
          onDrag={e => {
            e.target.style.transform = e.transform;
          }}
          onScale={e => {
            e.target.style.transform = e.drag.transform;
          }}
          onRotate={e => {
            e.target.style.transform = e.drag.transform;
          }}
        />
        <Paper elevation={3} className="dashboard__graph target1">
          <TodoList />
        </Paper>


        <Paper elevation={3} className="dashboard__graph target2">
          <ActivityCard title="Recent Activities" />
        </Paper>



        <Paper elevation={3} className="dashboard__graph target3">
          <ActivityCard title="Announcements" />
        </Paper>


        <Paper elevation={3} className="dashboard__graph target4">
          <ReportCard title="Goal Reports" labels={reportLabels} options={options} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target5">
          <ReportCard title="Income Reports" labels={incomeLabels} options={options} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target5">
          <ReportCard title="Payments Report" labels={incomeLabels} options={options} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target7">
          <ReportCard title="Expense Report" labels={incomeLabels} options={options} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target8">
          <IncomeExpense labels={incomeLabels} options={options} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target9">
          <FinanceOverview labels={incomeLabels} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target10">
          <TaskAndProjectCard title="My Projects" tableLabel="Project Name" labels={incomeLabels} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target11">
          <TaskAndProjectCard title="My Tasks" tableLabel="Task Name" labels={incomeLabels} />
        </Paper>
        <Paper elevation={3} className="dashboard__graph target12">
          <RecentInvoices title="My Tasks" tableLabel="Task Name" labels={incomeLabels} />
        </Paper>


      </div>
    </div>
  )
}
export default Home
