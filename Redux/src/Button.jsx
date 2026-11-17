import { useDispatch } from 'react-redux';
import { addMoney, withdrawMoney } from './store.js';

export default function Button() {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addMoney (1000))}>Add Money 1000</button>
      <button onClick={() => dispatch(withdrawMoney (1000))}>Withdraw Money 1000</button>
    </div>
  );
}
