import React from 'react'

const Badge = ({data}) => (
    <div className='d-flex justify-content-center align-items-center px-3  py-1' style={{backgroundColor:data.color, borderRadius:"10px"}}>
        <data.iconOne
              size={data.id === 111 ? 13 : 15}
              color="white"
              className="me-2"
              
            />
            <span  className={data.id === 111 ? "text-light": "text-light"} style={{fontSize:'12px'}}>{data.percentage ? data.percentage : data.action}</span>
    </div>
  )


export default Badge


export const SecondBadge = ({data}) => (
    <div className='d-flex justify-content-center align-items-center px-3  py-1' style={{backgroundColor:data.color, borderRadius:"10px"}}>
            <span  className={data.id === 111 ? "text-light": "text-light"} style={{fontSize:'12px'}}>{data.percentage ? data.percentage : data.action}</span>
    </div>
  )
