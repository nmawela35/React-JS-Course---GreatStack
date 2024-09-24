
function App() {
  let x = "GreatStack"
  let array = ["user1","user2","user3","user4","user5"]
  
  return (
    <>
     <div>
       <h3>Array of users</h3>
      {array.map((user) =>{
        {return(
          <>
          <div>{user}</div>
          </>
        )}
      })}
     </div>
    </>
  )
}

export default App
