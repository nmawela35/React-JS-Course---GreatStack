import { useState } from "react";
;
import "./App.css";
// import TernaryOperator from "./Tutorials/01TernaryOperator/TernaryOperator";
// import Events from "./Tutorials/02EventHandling/Events";
import FirstComponent from "./components/FirstComponent";


function App() {

  const [x,setX] =useState(0)

  const btnClicked =() =>{
    setX(x+1)
}
  return(
    <div>
     
      <button onClick={() =>{btnClicked()}}>Click Me</button>
      <FirstComponent data={x} fn={setX}/>
    </div>
  )
}

export default App;
