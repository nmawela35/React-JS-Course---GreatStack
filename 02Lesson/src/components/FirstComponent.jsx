
const FirstComponent = ({data,fn}) => {
  return (
    <div>
        <p>{data}</p>
        <button onClick={() =>{fn(10)}}>Set 10</button>
        </div>
  )
}

export default FirstComponent