import { Home, Settings, MessageSquare, Server } from "react-feather";
import {
  AiFillDashboard,
  AiOutlineMail,
  AiTwotoneFile,
  AiFillWarning,
} from "react-icons/ai";
import { SlCalender, SlGraph } from "react-icons/sl";
import {
  IoBugSharp,
  IoRocketSharp,
  IoCartOutline,
  IoCutOutline,
  IoTicketSharp,
  IoCardSharp,
  //IoSettingsSharp
} from "react-icons/io5";
//import { GrCart } from 'react-icons/gr'
import {
  FaArrowsRotate,
  FaCartPlus,
  FaCircleArrowUp,
  FaFileContract,
  FaUsers,
  FaIdeal,
  FaRegMoneyBill1,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaMoneyBillTrendUp,
  FaMoneyCheck,
  FaMoneyBillWheat,
  FaPeopleGroup
} from "react-icons/fa6";
import {
  FaFileInvoice,
  FaTasks,

  //FaFileInvoiceDollar
} from "react-icons/fa";
import {  GiSlingshot } from "react-icons/gi";
import { FiActivity } from "react-icons/fi";
import { FaBars} from "react-icons/fa";
import { GoGoal, GoStack } from "react-icons/go";
import { BsExclamationCircle } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";
import { MdOutlineIndeterminateCheckBox ,MdWork} from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FcDepartment, FcLeave } from "react-icons/fc";
import { PiUsersFourFill } from "react-icons/pi";


export const lineData = [
  {
    labels: [
      "2011 Q1",
      "2011 Q2",
      "2011 Q3",
      "2011 Q4",
      "2012 Q1",
      "2012 Q2",
      "2012 Q3",
      "2012 Q4",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 5000, 10000, 15000, 20000],
        fill: false,
        borderColor: "rgb(249, 250, 250)",
        dataColor: "rgb(249, 250, 250)",
        tension: 0.1,
      },
    ],
  },

  { name: "Mail-Orders", qty: 20 },

  { name: "Online", qty: 50 },

  { name: "In-Stores", qty: 30 },
];

export const usersData = [
  {
    id: 1,
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Laisha%20Reinger.svg",
    name: "MD Nayeem",
    username: "admin",
    activeStatus: "Active",
    userType: "Admin",
  },
  {
    id: 2,
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    name: "John Francois",
    username: "client",
    activeStatus: "Active",
    userType: "Client",
  },
  {
    id: 3,
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Sister%20Morar.svg",
    name: "Melody S. Price",
    username: "Spir1977",
    activeStatus: "Inactive",
    userType: "Client",
  },
  {
    id: 4,
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Sister%20Morar.svg",
    name: "Darren C. Bryant",
    username: "Bryant",
    activeStatus: "Inactive",
    userType: "Staff",
  },
  {
    id: 5,
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    name: "ohfsduhdfs",
    username: "rmccroger",
    activeStatus: "Inactive",
    userType: "Client",
  },
  {
    id: 6,
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Sister%20Morar.svg",
    name: "hrr",
    username: "hrr",
    activeStatus: "Inactive",
    userType: "Staff",
  },
  {
    id: 7,
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    name: "New",
    username: "newnew",
    activeStatus: "Inactive",
    userType: "Client",
  },
  {
    id: 8,
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    name: "Orla Whitley",
    username: "tacys",
    activeStatus: "Inactive",
    userType: "Admin",
  },
  {
    id: 9,
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    name: "Abdi Osman",
    username: "abdzoro",
    activeStatus: "Inactive",
    userType: "Client",
  },
];

export const clients = [
  {
    id: 1,
    name: "Ms. Sister Morar",
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Sister%20Morar.svg",
    percentage: "34%",
    iconOne: FaArrowTrendDown,
    joinedOn: "Jun 11, 2022 @ veum.lucio",
    color: "rgb(239, 68, 68)",
  },
  {
    id: 2,
    name: "Ms. Laisha Reinger",
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Laisha%20Reinger.svg",
    percentage: "72%",
    iconOne: FaArrowTrendUp,
    joinedOn: "Nov 2, 2022 @ edietrich",
    color: "rgb(16, 185, 129)",
  },
  {
    id: 3,
    name: "Cameron Lind",
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    percentage: "59%",
    iconOne: CgArrowLongRight,
    joinedOn: "Sep 14, 2022 @ mose44",
    color: "rgb(234, 179, 8)",
  },
  {
    id: 4,
    name: "Sarai Little",
    image: "https://avatars.dicebear.com/api/avataaars/Sarai-Little.svg",
    percentage: "49%",
    iconOne: CgArrowLongRight,
    joinedOn: "Jun 13, 2022 @ rau.abelardo",
    color: "rgb(234, 179, 8)",
  },
];
export const employees = [
  {
    id: 1,
    city:"Lake Macville",
    name: "Ms. Sister Morar",
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Sister%20Morar.svg",
    progress: "34",
    company: "Gusikowski, Altenwerth and Abbott",
    joinedOn: "J1un 11, 2022",
  },
  {
    id: 2,
    city:"West Alexiemouth",
    name: "Ms. Laisha Reinger",
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Laisha%20Reinger.svg",
    progress: "72",
    company: "Boehm PLC",
    joinedOn: "Nov 2, 2022",
  },
  {
    id: 3,
    city:"Naderview",
    name: "Cameron Lind",
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    progress: "89",
    company: "Tremblay, Padberg and Pouros",
    joinedOn: "Sep 14, 2022 ",
  },
  {
    id: 4,
    city:"Jeanieborough",
    name: "Sarai Little",
    image: "https://avatars.dicebear.com/api/avataaars/Sarai-Little.svg",
    progress: "49",
    company: "Deckow LLC",
    joinedOn: "Jun 13, 2022",
  },
  {
    id: 5,
    city:"JeNew Alvera",
    name: "Sarai Little",
    image: "https://avatars.dicebear.com/api/avataaars/Sarai-Little.svg",
    progress: "29",
    company: "Osinski, Boehm and Kihn",
    joinedOn: "Jun 13, 2022",
  },
  {
    id: 11,
    city:"Lake Macville",
    name: "Ms. Sister Morar",
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Sister%20Morar.svg",
    progress: "34",
    company: "Gusikowski, Altenwerth and Abbott",
    joinedOn: "Jun 11, 2022",
  },
  {
    id: 21,
    city:"West Alexiemouth",
    name: "Ms. Laisha Reinger",
    image: "https://avatars.dicebear.com/api/avataaars/Ms-Laisha%20Reinger.svg",
    progress: "72",
    company: "Boehm PLC",
    joinedOn: "Nov 2, 2022",
  },
  {
    id: 31,
    city:"Naderview",
    name: "Cameron Lind",
    image: "https://avatars.dicebear.com/api/avataaars/Cameron-Lind.svg",
    progress: "59",
    company: "Tremblay, Padberg and Pouros",
    joinedOn: "Sep 14, 2022 ",
  },
  {
    id: 41,
    city:"Jeanieborough",
    name: "Sarai Little",
    image: "https://avatars.dicebear.com/api/avataaars/Sarai-Little.svg",
    progress: "43",
    company: "Deckow LLC",
    joinedOn: "Jun 13, 2022",
  },
  {
    id: 51,
    city:"JeNew Alvera",
    name: "Sarai Little",
    image: "https://avatars.dicebear.com/api/avataaars/Sarai-Little.svg",
    progress: "69",
    company: "Osinski, Boehm and Kihn",
    joinedOn: "Jun 13, 2022",
  },
];




export const transactions = [
  {
    id: 1,
    accountType: "Home Loan Account",
    action: "deposit",
    timestamp: "3 days ago ",
    via: "via Turcotte",
    amount: "$375.53",
    paymentMethodIcon: FaMoneyBillTrendUp,
    color: "rgb(16, 185, 129)",
  },
  {
    id: 2,
    accountType: "Savings Account",
    action: "Payment",
    timestamp: "3 days ago ",
    via: "via Murazik - Graham",
    amount: "$470.26",
    paymentMethodIcon: IoCardSharp,
    color: "rgb(59, 130, 246)",
  },
  {
    id: 3,
    accountType: "Checking Account",
    action: "Invoice",
    timestamp: "5 days ago ",
    via: "via Fahey - Keebler",
    amount: "$971.34",
    paymentMethodIcon: FaMoneyCheck,
    color: "rgb(234, 179, 8)",
  },
  {
    id: 4,
    accountType: "Auto Loan Account",
    action: "Withdraw",
    timestamp: "7 days ago ",
    via: "via Collier - Hintz",
    amount: "$374.63",
    paymentMethodIcon: FaMoneyBillWheat,
    color: "rgb(239, 68, 68)",
  },
];
export const overViewData = [
  {
    iconOne: RiArrowDropUpLine,
    title: "Clients",
    qty: 512,
    percentage: "12%",
    color: "rgb(16, 185, 129)",
    color2: "rgb(16, 185, 129)",
    id: 1,
    iconTwo: HiMiniUsers,
  },
  {
    iconOne: RiArrowDropDownLine,
    title: "Sales",
    qty: "$7,770",
    percentage: "16%",
    color: "rgb(239, 68, 68)",
    color2: "rgb(59, 130, 246)",
    id: 11,
    iconTwo: IoCartOutline,
  },
  {
    iconOne: BsExclamationCircle,
    title: "Performance",
    qty: "256%",
    percentage: "Overflow",
    color: "rgb(234, 179, 8)",
    color2: "rgb(239, 68, 68)",
    id: 111,
    iconTwo: SlGraph,
  },
];

export const sideBarData = [
  {
    icon: AiFillDashboard,
    title: "Dashboard",
    link: "/",
    id: 1,
  },
  {
    icon: SlCalender,
    title: "Calendar",
    link: "/calendar",
    id: 2,
  },
  {
    icon: FaPeopleGroup,
    title: "Employees",
    link: "/employees",
    id: 3132,
  },
  {
    icon: AiTwotoneFile,
    title: "File Manager",
    link: "/file-manager",
    id: 5,
  },
  {
    icon: FaFileContract,
    title: "Contracts",
    link: "/contracts",
    id: 71,
  },
  {
    icon: FaUsers,
    title: "Users",
    link: "/users",
    id: 113,
  },
  {
    icon: FaCircleArrowUp,
    title: "Promotions",
    link: "/promotions",
    id: 78,
  },
  {
    icon: MdWork,
    title: "Transactions",
    link: "/transactions",
    id: 25521,
  },
  {
    icon: FaBars,
    title: "Projects",
    link: "/projects",
    id: 4,
  },
  {
    icon: FaIdeal,
    title: "Deals",
    link: "/deals",
    id: 444,
  },
  {
    icon: GoGoal,
    title: "Goals",
    link: "/goals",
    id: 445,
  },
  {
    icon: PiUsersFourFill,
    title: "Clients",
    link: "/clients",
    id: 336,
  },
  {
    icon: FaTasks,
    title: "Tasks",
    link: "/tasks",
    id: 333,
  },
  {
    icon: MdOutlineIndeterminateCheckBox,
    title: "Termination",
    link: "/termination",
    id: 336,
  },
  {
    icon: IoCutOutline,
    title: "Resignation",
    link: "/resignation",
    id: 91,
  },
  {
    icon: FaFileInvoice,
    title: "Invoice",
    link: "/invoice",
    id: 3,
  },
  {
    icon: FcDepartment,
    title: "Departments",
    link: "/departments",
    id: 31,
  },
  {
    icon: FcLeave,
    title: "Leave Type",
    link: "/leave",
    id: 331,
  },

  {
    icon: FiActivity,
    title: "Activities",
    link: "/activities",
    id: 334,
  },
  {
    icon: GiSlingshot,
    title: "Opportunity",
    link: "/opportunity",
    id: 335,
  },

  {
    icon: AiOutlineMail,
    title: "Mailbox",
    link: "/mail",
    id: 32,
  },

  {
    icon: FaArrowsRotate,
    title: "Xero",
    link: "/xero",
    id: 7,
  },
  {
    icon: AiFillWarning,
    title: "Warning",
    link: "/warning",
    id: 74,
  },
  {
    icon: IoBugSharp,
    title: "Bugs",
    link: "/bugs",
    id: 76,
  },
  {
    icon: FaRegMoneyBill1,
    title: "Accounting",
    link: "/accounting",
    id: 8,
  },
  {
    icon: IoRocketSharp,
    title: "Leads",
    link: "/leads",
    id: 9,
  },

  {
    icon: GoStack,
    title: "Stock",
    link: "/stock",
    id: 911,
  },
  {
    icon: FaCartPlus,
    title: "Sales",
    link: "/sales",
    id: 9121,
  },
  {
    icon: IoTicketSharp,
    title: "Tickets",
    link: "/tickets",
    id: 912,
  },
  {
    icon: HiOutlineQuestionMarkCircle,
    title: "Knowledge",
    link: "/knowledge",
    id: 9112,
  },
];
export const navBarData = [
  {
    icon: Home,
    title: "Home",
    link: "/",
    id: 1,
  },
  {
    icon: Server,
    title: "Status",
    link: "/",
    id: 2,
  },
  {
    icon: MessageSquare,
    title: "Support",
    link: "/",
    id: 3,
  },
  {
    icon: Settings,
    title: "Dashboard",
    link: "/",
    id: 4,
  },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom-right",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
export const reportLabels = [
  "Achieve Total Income",
  "Total Income By Bank",
  "Achieve Total Expense ",
  "Total Expense by Bank",
  "Invoice Goal",
  "Estimate Goal",
  "Payment Goal",
  "Task Done Goal",
  "Resolved Bugs Goal",
  "Convert Leads To client",
  "Client Goal Without converted",
  "Complete Project Goal",
];
export const incomeLabels = [
  "January",
  "February",
  "March ",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
