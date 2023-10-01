import React from 'react'
import { Donut } from 'react-dial-knob';
import { lineData } from '../../../data/data';


const Knob = () => {
   // const [value, setValue] = useState(0);

    return (
        <div className="row d-flex justify-content-center">
       {
        lineData.slice(1).map((item, index) => (
          <div className="text-center m-2" key={index}>
          <Donut
          diameter={160}
          min={10}
          max={100}
          step={1}
          value={item.qty}
          theme={{
              donutColor: '#3ab0c3'
          }}
        //   onValueChange={setValue}  TO BE FIXED WITH REDUX
          ariaLabelledBy={'my-label'}
      >
          <div className="text-white mt-2" id={'my-label'}>{item.name}</div>
      </Donut>
        </div>
        ))
       }
      </div>
    )
}
export default Knob;