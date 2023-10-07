import React from "react";
import { IoMdSearch } from "react-icons/io";
//import DateComponent from '../date/Date'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DatePicker from "react-datepicker";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};
const FinanceOverview = ({ labels }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "white",
        backgroundColor: "rgba(78, 150, 205, 0.78)",
      },
      {
        label: "Income",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "white",
        backgroundColor: "rgb(61, 158, 120)",
      },
    ],
  };

  return (
    <div className="reportCard__container w-100 d-flex flex-column justify-content-between align-items-center py-4">
      <div className="panel-heading d-flex justify-content-between align-items-center w-100">
        <h3
          className="reportCard__title text-gray-50 p-2"
          style={{ fontSize: "15px" }}
        >
          Finance Overview
        </h3>
        <div
          className="w-50 d-flex justify-content-between align-items-center ps-2"
          style={{ backgroundColor: "#FFFFFF", border: "2px solid #F0F0F0" }}
        >
          <DatePicker
            selected={new Date()}
            renderYearContent={renderYearContent}
            showYearPicker
            dateFormat="yyyy"
          />
          <span style={{ backgroundColor: "#EDF1F2", padding: "6px 12px" }}>
            <IoMdSearch size={15} color="gray" />
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 my-4">
        <div className="d-flex flex-column justify-content-center align-items-center mx-2">
          <h5 style={{ fontSize: "15px", color: "#656565", fontWeight: "400" }}>
            $ 0,00
          </h5>
          <h5
            style={{
              fontSize: "12px",
              color: "#656565",
              fontWeight: "400",
              padding: "0, 8px",
            }}
          >
            Total Annual Income
          </h5>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mx-2">
          <h5 style={{ fontSize: "15px", color: "#656565", fontWeight: "400" }}>
            $ 0,00
          </h5>
          <h5
            style={{
              fontSize: "12px",
              color: "#656565",
              fontWeight: "400",
              padding: "0, 8px",
            }}
          >
            Total Annual Expense
          </h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mx-2">
          <h5 style={{ fontSize: "15px", color: "#656565", fontWeight: "400" }}>
            $ 0,00
          </h5>
          <h5
            style={{
              fontSize: "12px",
              color: "#656565",
              fontWeight: "400",
              padding: "0, 8px",
            }}
          >
            Total Annual Profit
          </h5>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center py-3 w-100">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
export default FinanceOverview;
const renderYearContent = (year) => {
  const tooltipText = `Tooltip for year: ${year}`;
  return (
    <span title={tooltipText} style={{ fontSize: "12px" }}>
      {year}
    </span>
  );
};
