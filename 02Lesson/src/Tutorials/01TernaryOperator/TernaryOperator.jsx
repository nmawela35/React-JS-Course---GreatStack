import React from 'react'

function TernaryOperator() {
  let data = "boy";

  return <>
  <div>{data==="no"? <h1>Boy</h1>: <h1>Girl</h1>}</div>
  </>;
}

export default TernaryOperator