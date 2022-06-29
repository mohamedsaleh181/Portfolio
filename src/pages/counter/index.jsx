import Header from '../../components/Header';
import { useState } from 'react';
import Increament from "../../components/Increament"
import Decreament from "../../components/Decreament"

const Counter = () => {
  const [number, setNumber]= useState(0);
  
  const increamentNumber = ()=>{
    setNumber(number + 1)
  }
  const decreamentNumber = ()=>{
    setNumber(number - 1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Counter App"></Header>
      </header>
      <div className="text-center">
        <h1 className="mb-5">{number}</h1>
        <Increament increamentNumber={increamentNumber}></Increament>
        <Decreament decreamentNumber={decreamentNumber}></Decreament>
      </div>
    </div>
  );
}
export default Counter;