import React from "react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

//#17a2b8

const  CustomToggle = ({ children, eventKey }) =>  {
    const decoratedOnClick = useAccordionButton(eventKey)
  
    return (
      <span
        type="button"
        style={{ backgroundColor: 'none', border:'#17a2b8' }}
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }
export default CustomToggle  