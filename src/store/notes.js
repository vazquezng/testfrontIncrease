import React from 'react';

const initialState = {
  list: [],
};

const reducer = (state, action) => {
  const {list} = state;
  console.log(action);
  switch (action.type) {
    case 'add':
      state.list.push({...action.note, backgroundColor: '#2196f3'});
      return {
        ...state,
      };
    case 'edit':
      list[action.index] = {...action.note};
      return {
        ...state,
        list
      };
    case 'remove':
      console.log(action.index);
      list.splice(action.index, 1);
      console.log(list);
      return {
        ...state,
        list
      };
    case 'hydrate':
      let notasPersist = localStorage.getItem("notasPersist");
      if(notasPersist){
        notasPersist = JSON.parse(notasPersist);
      }else{
        notasPersist = {...state}
      }
      return {
        ...notasPersist
      }
    default: throw new Error('Unexpected action');
  }
};

const notesReducer = {
  initialState, reducer
};
export default notesReducer;
