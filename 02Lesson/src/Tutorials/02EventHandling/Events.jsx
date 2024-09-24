import React, { useState } from 'react'

function Events() {
    const [x,setX] =useState(0)

    const btnClicked =() =>{
        setX(x+1)
    }

  return (
<>
<div>
    <button onClick={btnClicked}>Click Me</button>
    <p>{x}</p>
</div>
</>
  )
    
}

export default Events