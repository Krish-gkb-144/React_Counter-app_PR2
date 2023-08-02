import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [no, Allno] = useState(0);
  const Cntplus = () => {
    Allno(no + 1)
  }
  const Cntmins = () => {
    if (no > 0) {
      Allno(no - 1)
    }
  }
  const Cnts = () => {
    Allno(0)
  }
  useEffect(() => {
    console.log(no);
  }, [no])
  return (
    <>
      <body style={{ height:"100vh",backgroundColor:"#272738", overflow:"hidden" }}>
        <div style={{ width:"300px", backgroundColor:"#ffffff",opacity:"0.6",textAlign:"center",margin:"15% auto",padding:"80px 20px",borderRadius:"50px" }}>
          <h1 style={{margin:"0",color:"#272749"}}>Counter App</h1>
          <h1 style={{color:"#272749"}}>{no}</h1>
          <button onClick={() => Cntplus()} style={{ backgroundColor:"#272749",color:"white", borderRadius: '100%', width: "50px", height: "50px", fontSize: '35px' }}>+</button>
          <button onClick={() => Cntmins()} style={{ backgroundColor:"#272749",color:"white", borderRadius: '100%', width: "50px", height: "50px", fontSize: '35px', margin: '0 30px' }}>-</button>
          <button onClick={() => Cnts()} style={{ backgroundColor:"#272749",color:"white", borderRadius: '100%', width: "50px", height: "50px", fontSize: '35px' }}>=</button>
        </div>
      </body>
    </>
  );
}

export default App;
