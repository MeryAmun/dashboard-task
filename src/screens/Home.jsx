import React from 'react'
import { SlGraph } from 'react-icons/sl'
import OverViewCard from '../components/overViewCard/OverviewCard'
import { overViewData } from '../data/data'

export const Home = () => {
  return (
    <div className='home w-100 h-100 bg-gray-50 py-4'>
    <div className="home__overview w-100">
        <div className="d-flex justify-content-start align-items-center px-4">
        <SlGraph
              size={30}
              color="black"
              className="dropdown-toggle"
            />
            <h2 className='ms-3 fs-3'>Overview</h2>
        </div>
        <div className="d-flex flex-wrap py-4 gap-2 w-100">
          {
            overViewData.map((data) => (
                <OverViewCard key={data.id} data={data}/>
            ))
          }
        </div>
    </div>
    
    </div>
  )
}
