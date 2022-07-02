import { useDispatch } from 'react-redux';
import { decrement } from '../reduxKit/features/counterSlice';
const Decreament = () => {

  const dispatch = useDispatch();
  const decreamentNumber = ()=>{
      dispatch(decrement())
  }

    return (
      <>
        
        <button type="button" onClick={decreamentNumber} className="btn btn-primary mx-5">
          Decreament -
        </button>
      </>
    );
  };
  export default Decreament;
 