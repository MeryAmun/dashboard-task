import React from 'react'
import Badge from './Badge'

const ClientCard = ({data}) => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{width:"380px", height:"100px",backgroundColor:"white", borderRadius:"10px"}}>
        <div className="d-flex justify-content-start align-items-center w-100">
          <div className="mx-2 bg-gray-100" style={{borderRadius:"50%" , backgroundColor:"rgb(231, 221, 221)", width:"40px", height:"40px", objectFit:"cover"}}>
          <img src={data.image} 
            alt="" width="40px" height="40px"/>
          </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
                <span className="fs-6 text-secondary">{data.name}</span>
                <span className="fs-6 text-secondary-emphasis">{data.joinedOn}</span>
            </div>
        </div>
       <div className=""> 
       <Badge data={data}/></div>
    </div>
  )
}

export default ClientCard