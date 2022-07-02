
import { useDispatch } from 'react-redux';
import { increment } from '../reduxKit/features/counterSlice';


const Increament = ()=>{
    const dispatch = useDispatch();
    const increamentNumber = ()=>{
        dispatch(increment())
    }
    
    return (
        <>
            <button type="button" onClick={increamentNumber} className="btn btn-primary mx-5">Increament +</button>
        </>
    )
}
export default Increament;