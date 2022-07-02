import Header from '../../components/Header';
import Increament from "../../components/Increament"
import Decreament from "../../components/Decreament"
import { useSelector } from 'react-redux';
const Counter = () => {
  const counterState = useSelector(state => state.counter.counter)
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Counter App"></Header>
      </header>
      <div className="text-center">
        <h1 className="mb-5">{counterState}</h1>
        <Increament ></Increament>
        <Decreament ></Decreament>
      </div>
    </div>
  );
}
export default Counter;

