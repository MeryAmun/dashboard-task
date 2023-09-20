import { Home, CheckSquare,User,ShoppingCart,Folder,Settings,MessageSquare,List,Server} from 'react-feather';
import { AiFillDashboard,AiOutlineMail,AiTwotoneFile,AiFillWarning } from 'react-icons/ai'
import { SlCalender,SlGraph } from 'react-icons/sl'
import { IoBugSharp,IoRocketSharp,IoCartOutline, IoCutOutline,IoTicketSharp,IoCardSharp,IoSettingsSharp} from 'react-icons/io5'
import { GrCart } from 'react-icons/gr'
import { FaArrowsRotate,FaCartPlus,FaCircleArrowUp,FaFileContract,FaUsers,FaIdeal,FaRegMoneyBill1,FaArrowTrendUp, FaArrowTrendDown} from 'react-icons/fa6'
import { FaFileInvoice,FaTasks,FaFileInvoiceDollar } from 'react-icons/fa'
import { GiTeamDowngrade,GiSlingshot } from 'react-icons/gi'
import { FiActivity } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import { GoGoal,GoStack } from 'react-icons/go'
import { BsExclamationCircle} from 'react-icons/bs'
import { HiMiniUsers } from 'react-icons/hi2'
import { HiOutlineQuestionMarkCircle} from 'react-icons/hi'
import { CgArrowLongRight} from 'react-icons/cg'
import { MdOutlineIndeterminateCheckBox } from 'react-icons/md'
import { RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import { FcDepartment, FcLeave} from 'react-icons/fc';



export const overViewData = [
    {
        iconOne:RiArrowDropUpLine,title:'Clients',qty:512,percentage:"12%",color:"rgb(16, 185, 129)",
        color2:"rgb(16, 185, 129)",
        id:1,
       iconTwo:HiMiniUsers
    },
    {
        iconOne:RiArrowDropDownLine,title:'Sales',qty:"$7,770",percentage:"16%",color:"rgb(239, 68, 68)",
        color2:"rgb(59, 130, 246)",
        id:11,
       iconTwo:IoCartOutline
    },
    {
        iconOne:BsExclamationCircle,title:'Performance',qty:"256%",percentage:"Overflow",color:"rgb(234, 179, 8)",
        color2:"rgb(239, 68, 68)",
        id:111,
       iconTwo:SlGraph
    },
]

export const sideBarData = [
    {
        icon:AiFillDashboard,title:'Dashboard',link:'/',id:1
    },
    {
        icon:SlCalender,title:'Calender',link:'/calender',id:2
    },
    {
        icon:FaFileInvoice,title:'Invoice',link:'/invoice',id:3
    },
    {
        icon:FcDepartment,title:'Departments',link:'/departments',id:31
    },
    {
        icon:FcLeave,title:'Leave Type',link:'/leave',id:331
    },
    {
        icon:GiTeamDowngrade,title:'Employees',link:'/employees',id:332
    },
    {
        icon:FaTasks,title:'Tasks',link:'/tasks',id:333
    },
    {
        icon:FiActivity,title:'Activities',link:'/activities',id:334
    },
    {
        icon:GiSlingshot,title:'Opportunity',link:'/opportunity',id:335
    },
    {
        icon:MdOutlineIndeterminateCheckBox,title:'Terminate',link:'/terminate',id:336
    },
    {
        icon:AiOutlineMail,title:'Mailbox',link:'/mail',id:32
    },
    {
        icon:FaUsers,title:'Clients',link:'/clients',id:336
    },
    {
        icon:FaIdeal,title:'Deals',link:'/deals',id:444
    },
    {
        icon:GoGoal,title:'Goals',link:'/goals',id:445
    },
    {
        icon:FaBars,title:'Projects',link:'/projects',id:4
    },
    {
        icon:AiTwotoneFile,title:'File Manager',link:'/files',id:5
    },
    {
        icon:FaArrowsRotate,title:'Xero',link:'/xero',id:7
    },
    {
        icon:FaFileContract,title:'Contracts',link:'/contracts',id:71
    },
    {
        icon:AiFillWarning,title:'Warning',link:'/warning',id:74
    },
    {
        icon:IoBugSharp,title:'Bugs',link:'/bugs',id:76
    },
    {
        icon:FaCircleArrowUp,title:'Promotions',link:'/xero',id:78
    },
    {
        icon:FaRegMoneyBill1,title:'Accounting',link:'/accounting',id:8
    },
    {
        icon:IoRocketSharp,title:'Leads',link:'/leads',id:9
    },
    {
        icon:IoCutOutline,title:'Resignation',link:'/resignation',id:91
    },
    {
        icon:GoStack,title:'Stock',link:'/stock',id:911
    },
    {
        icon:FaCartPlus,title:'Sales',link:'/sales',id:912
    },
    {
        icon:IoTicketSharp,title:'Tickets',link:'/tickets',id:912
    },
    {
        icon:HiOutlineQuestionMarkCircle,title:'Knowledge',link:'/knowledge',id:912
    },
]
export const navBarData = [
    {
        icon:Home,title:'Home',link:'/', id:1
    },
    {
        icon:Server,title:'Status',link:'/', id:2
    },
    {
        icon:MessageSquare,title:'Support',link:'/', id:3
    },
    {
        icon:Settings,title:'Dashboard',link:'/', id:4
    },
    
]