import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'sidd',
    balance: 15000,
  },
  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload;
    },
    withdrawMoney: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { addMoney, withdrawMoney } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;





// import {createStore} from 'redux';

// // Initial state
// const initialState = {
// user: {
//     name: 'sidd',
//     balance: 15000,
//   },
// }

// // Action

// export const addMoney = (amount) => {
//   return {
//     type: 'addMoney',
//     payload: amount,
//   }
// }


// export const withdrawMoney = (amount) => {
//   return {
//     type: 'withdrawMoney',
//     payload: amount,
//   }
// }

// // Reducer

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'addMoney':
//         return {
//             user: {
//                 name: state.user.name,
//                 balance: state.user.balance + action.payload
//             },
//         };

//         case 'withdrawMoney':
//         return {
//             user: {
//                 name: state.user.name,
//                 balance: state.user.balance - action.payload
//             },
//         };

//         default:
//         return state;
//   }
//     }

// const store = createStore(reducer);
// export default store;

