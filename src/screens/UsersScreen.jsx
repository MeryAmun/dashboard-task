import React,{ useState } from 'react'
import '../components/usersList/styles.css'
import UsersList from '../components/usersList/UsersList';
import CreateUser from '../components/usersList/CreateUser';

const UsersScreen = () => {
    const [active, setActive] = useState("All");
    const handleTabs = () => {
     if( active === "All" ){
setActive("New")
     }else{
        setActive("All")
     }
    }
  return (
    <div>
    <div className="w-100 d-flex justify-content-start align-items-center promotionScreen_header">
      <button className={active === "All"? "promotionActive" : "promotion"} onClick={() => setActive("All")}>All Users</button>
      <button className={active === "New"? "promotionActive" : "promotion"} onClick={() => setActive("New")}>New User</button>
      </div>
            {
                active === "All" ? (
                    <UsersList/>
                ) : (<CreateUser/>)
            }
    </div>
  )
}

export default UsersScreen