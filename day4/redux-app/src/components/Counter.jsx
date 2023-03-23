import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by Amount (+5)
      </button>
    </div>
  );
}

export default Counter;
