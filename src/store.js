import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const initialsState = {
  sidebarShow: true,
}

const changeState = (state = initialsState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

export const store = createStore(changeState)


export default store;