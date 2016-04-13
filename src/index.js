'use strict';
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import counter from './reducers/reducers.js';
import Counter from './components/counter.js';

const store = createStore(counter);

const renderCounter = () => {
  render (
    <Counter
      count={ store.getState().count }
      decrementCounter={ () => store.dispatch({type: 'DECREMENT_COUNTER'})}
      incrementCounter={ () => store.dispatch({type: 'INCREMENT_COUNTER'})}
    />,
    document.getElementById('app')
  )
}
store.subscribe(renderCounter);
renderCounter();