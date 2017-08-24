export const ADD_EXAMPLE = "ADD_EXAMPLE";
export const ADD_EXAMPLE_AT = "ADD_EXAMPLE_AT";
export const REMOVE_EXAMPLE = "REMOVE_EXAMPLE";
export const POP_EXAMPLE = "POP_EXAMPLE";

/*  Add an item last */
export function addExample(data){
  return {
    type: ADD_EXAMPLE,
    data: data
  }
}

/*  Adds item, by default first */
export function addExampleAt(index = 0, data){
  return {
    type: ADD_EXAMPLE_AT,
    data: {
      index: index,
      data: data
    }
  }
}

/*  Removes item, by default first item */
export function removeExample(index = 0){
  return {
    type: REMOVE_EXAMPLE,
    data: index
  }
}

/*  Removes the first item */
export function popExample(){
  return {
    type: POP_EXAMPLE
  }
}