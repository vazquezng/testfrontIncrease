//@flow

import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

import notesReducer from './store/notes';
console.log(notesReducer);
let hydrate = false;
function App(){
  const [notes, dispatch] = useReducer(notesReducer.reducer, notesReducer.initialState);

  if(!hydrate) {
    dispatch({type:'hydrate'});
    hydrate = true;
  }
  useEffect(
    () => {
      localStorage.setItem('notasPersist', JSON.stringify(notes));
    },
    [notes] // Only re-run effect if script src changes
  );


  return (
    <Home notes={notes} dispatch={dispatch}/>
  );
}

function run() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
