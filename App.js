import  React from 'react';
import './App.css';
import Data from "./data.json";


function App() {
  return(
    <div className='App'>
    <div className='posts'>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
  
      { Data.map(post => {
        return(
          <div style={{border:"1px solid blue"}} key={post.id} className="post">  
          <h4>{ post.name}</h4>
          <p>{post.username}</p>
          <p>{post.email}</p>
          <p>{post.phone}</p>
          <p>{post.website}</p>
         
    </div>
        )
      })}
      </div>
      </div>
    </div>
  );
}
export default App;