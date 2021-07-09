import {createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const inicialState = {counter: 0, showCounter: true};

createSlice({
    name: 'counter',
    inicialState,
    reducers: {
        increment () {},
        decrement () {},
        increase () {},
        toggleCounter ()  {}
    }
});

const counterReducer =  (state = inicialState, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};

const store =  createStore(counterReducer);

export default store;