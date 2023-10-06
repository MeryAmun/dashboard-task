import React from 'react'

const Badge = ({data}) => (
    <div className='d-flex justify-content-center align-items-center px-3  py-1' style={{backgroundColor:data.color, borderRadius:"25px"}}>
        <data.iconOne
              size={data.id === 111 ? 13 : 15}
              color="white"
              className="me-2"
              
            />
            <span  className="" style={{fontSize:'12px', color:"rgba(255,255,255,1)"}}>{data.percentage ? data.percentage : data.action}</span>
    </div>
  )


export default Badge


export const SecondBadge = ({data}) => (
    <div className='d-flex justify-content-center align-items-center px-3  py-1' style={{backgroundColor:data.color, borderRadius:"25px"}}>
            <span  className="" style={{fontSize:'12px', color:"rgba(255,255,255,1)"}}>{data.percentage ? data.percentage : data.action}</span>
    </div>
  )
