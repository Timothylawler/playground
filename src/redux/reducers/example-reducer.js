import {
  ADD_EXAMPLE,
  ADD_EXAMPLE_AT,
  REMOVE_EXAMPLE,
  POP_EXAMPLE
} from '../actions';

const initialState = {
  items: []
}

export function exampleReducer(state = initialState, action){
  switch(action.type){
    case ADD_EXAMPLE:
      return state.items.concat([action.data]);
    
    case ADD_EXAMPLE_AT:
      if(action.data.index > state.items.length){
        return state;
      } 
      return state.items.slice(0, action.data.index).concat([action.data.data]).concat(state.items.slice(action.data.index + 1), state.items.length);
     
    case REMOVE_EXAMPLE:
      /*  action.data will be index here */
      return state.items.slice(0, action.data).concat(state.items.slice(action.data + 1));

    case POP_EXAMPLE:
      return state.slice(1, state.items.length);
    default:
      return state;
  }
}