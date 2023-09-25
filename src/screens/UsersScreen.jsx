import React,{ useState } from 'react'
import '../components/usersList/styles.css'
import UsersList from '../components/usersList/UsersList';
import CreateUser from '../components/usersList/CreateUser';

const UsersScreen = () => {
    const [active, setActive] = useState("New User");
    const handleTabs = () => {
     if( active === "All Users" ){
setActive("New User")
     }else{
        setActive("All Users")
     }
    }
  return (
    <div className='w-100 userScreen wrapper'>
        <div className="w-100 d-flex justify-content-start align-items-center ps-4 userScreen_header">
        <button className={active === "All Users"? "btn__tab btn__tabActive me-2" : "btn__tab me-2"} onClick={handleTabs}>All Users</button>
        <button className={active === "New User"? "btn__tab btn__tabActive ms-2" : "btn__tab ms-2"} onClick={handleTabs}>New User</button>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center p-4">
            {
                active === "All Users" ? (
                    <UsersList/>
                ) : (<CreateUser/>)
            }
        </div>
    </div>
  )
}

export default UsersScreen