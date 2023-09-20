import React from 'react'
import { SecondBadge } from './Badge'

const TransactionsCard = ({data}) => {
  return (
    <div className="d-flex justify-content-between align-items-start px-3 py-2" style={{width:"450px", height:"100px",backgroundColor:"white", borderRadius:"10px"}}>
    <div className="d-flex justify-content-start align-items-center w-100" style={{height:"100%"}}>
      <div className="mx-2 bg-gray-100" style={{width:"45px", height:"45px",
      display:"flex",justifyContent:"center",alignItems:"center",
      backgroundColor:"rgba(231, 221, 221,0.2)", borderRadius:"50%"}}>
      <data.paymentMethodIcon
              size={20}
              color={data.color}
              className="me-2"
              
            />
      </div>
        <div className="d-flex flex-column justify-content-between align-items-start ms-2" style={{height:"80%"}}>
            <span className="fs-6 text-secondary">{data.amount}</span>
            <span className="text-secondary-emphasis my-2" style={{fontSize:"14px"}}>{data.timestamp}</span>
        </div>
    </div>
    <div className="d-flex flex-column justify-content-between align-items-end ms-2 w-50" style={{height:"100%"}}> 
    <span className="text-secondary my-2" style={{fontSize:"13px"}}>{data.accountType}</span>
  <SecondBadge data={data}/>
   </div>
</div>
  )
}

export default TransactionsCard