import { useState } from 'react'

import './App.css'
import { useRef } from 'react'

function App() {
  const [data,setdata] =useState([])
  const inputRef =useRef(null)

  return (
   <div>
    <input ref={inputRef} type="text"/>
    <button onClick={() =>setdata([...data,inputRef.current.value])}>Submit</button>
    {data.map((item,index) => {return <h2 key={index}>{item}</h2>})}
   </div>
  )
}

export default App
