import React from 'react'
import { memo } from 'react'
const Counter = (props) => {
  
  // for showing rerendering
  console.log("counter Component rerender")
  return (
    <>
      <div className="w100 col flexAIC">
        <h2>Count={props.count}</h2>
        <button onClick={() => props.setCounter(prev => prev + 5)}>Click Here</button>
      </div>

    </>

  )
}

export default memo(Counter)