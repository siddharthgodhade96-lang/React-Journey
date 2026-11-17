import { Provider } from 'react-redux';
import store from './store.js';
import UserInfo from './UserInfo.jsx';
import Button from './Button.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Learning  New And Old Version of Redux</h1>
        <UserInfo />
        <Button/>
      </div>
    </Provider>
  );
}