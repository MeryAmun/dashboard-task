import React from 'react'

const Badge = ({data}) => {
  return (
    <div className='d-flex justify-content-center align-items-center px-2 rounded' style={{backgroundColor:data.color}}>
        <data.iconOne
              size={data.id === 111 ? 13 : 15}
              color="white"
              className="me-2"
              
            />
            <span  className={data.id === 111 ? "text-light": "text-light"} style={{fontSize:'12px'}}>{data.percentage}</span>
    </div>
  )
}

export default Badge