import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

const reducer = (state = {
  count: 5
}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "ADD":
      newState.count = state.count + action.payload
      break;
    default:
      return state;
  }
  return newState;
};

export const store = createStore(reducer);

const addCounter = (num) => {
  return {
    type: "ADD",
    payload: num
  }
}

const Counter = (props) => {
  return (
    <h3>Count = {props.count}</h3>
  )
}

const Plus1 = (props) => {
  debugger;
  return (
    <span>
       <button onClick={() => props.counterPlus()}>+1</button> 
    </span>
  )
}

const App = (props) => {
  return (
    <div>
      <div>count: {props.state.count}</div>
      <Counter count= {props.state.count}/>
       <Plus1 counterPlus={() => props.addCounter(70)}/>
      <button onClick={() => props.addCounter(7)} >Pulus one</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCounter: function (n) {
      dispatch(addCounter(n))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
