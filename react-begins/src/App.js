import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
//import Hello from './sayHello'
import Tweet from "./Tweet";

function App(){

  const [users, setUsers] = useState([
    {name:'dd', message:'geg'},
    {name:'aga', message:'able to do'},
    {name:'agg', message:'gag'}
  ])

  //const [isRed, setRed] = useState(false);
  //const [count, setCount] = useState(0);
  
  // const [user, setUser] = useState({
  //   name : 'ss',
  //   age: '33',
  //   posts: ['mm', 'haga']
  // });
  // const increment = ()=>{
  //   setCount(count+1);
  //   setRed(!isRed);
  // }
  // const sayHello = () => {
  //   console.log('hello world');
  // }

  // return(
  //   <div>
  //     <h1>This is the app component</h1>
  //     <Hello/>
  //   </div>
  // );
  // return(
  //   <div className = "app">
  //     <Tweet name = "Rahi" message = "wor"/>
  //     <Tweet name = "adgja" message = "waggaor"/>
  //     <Tweet name = "winter is comin" message = "wohahhr"/>
  //     <Tweet name = "mosh " message = "wosdfar"/>
  //     <Tweet name = "traversy" message = "hahwor"/>
  //   </div>
  // )

  // return(
  //   <div className ="app">
  //     <h1 className={isRed?"red":""}>Change My Color!</h1>
  //     <button onClick={increment}>Increment</button>
  //     <h1>{count}</h1>
  //   </div>
  // )

  return(
    <div className="app">
      {users.map(user=>(
        <Tweet name={user.name} message ={user.message}/>
      ))}
    </div>
  )

}

export default App;