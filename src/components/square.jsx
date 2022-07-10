import React from 'react'

export default function Square(props) {

  
  return (
    <div className={`square ${props.className}`}onClick={() =>props.onClick(props.index)}>
   <span >{props.state}</span>
    </div>
  )
}
