import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import DateComponent from '../date/Date'
  import { IoMdSearch } from 'react-icons/io'
  //import {faker} from '@faker-js/faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const IncomeExpense = ({ title,options,labels}) => {
    // const data = {
    //     labels,
    //     datasets: [
    //       {
    //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1 })),
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
    //     ],
    //   };
    return (
        <div className="reportCard__container w-100 d-flex flex-column justify-content-between align-items-center py-3">
  <div className='panel-heading d-flex justify-content-start align-items-center w-100 text-left'>
    <h3 className='reportCard__title text-gray-50 ps-2' style={{fontSize:"14px", color:"#656565"}}>Income Vs Expense</h3>
  </div>
  <div className="d-flex justify-content-center align-items-center w-100 my-4">
  <label htmlFor="" className='text-gray-50 me-2' style={{fontSize:"14px"}}>Select Month<sup className='text-danger'>*</sup></label>
  <DateComponent/>
 <span style={{border:"1px solid #F0F0F0",backgroundColor:"#EDF1F2", padding:"6px 12px",marginLeft:"15px"}}><IoMdSearch size={20} color='gray'/></span>
  </div>
  <div className="income d-flex flex-column justify-content-center align-items-center w-100 mt-4">
  <h3 style={{fontSize:"25px", color:"#000",fontWeight:"800"}}>Income</h3>
  <h3 style={{fontSize:"25px", color:"#000",fontWeight:"500"}}>0</h3>
  </div>
        </div>
    )
}
export default IncomeExpense