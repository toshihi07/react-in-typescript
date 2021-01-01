import React,{ useReducer } from 'react'


type ActionType = {
  type: "decrement" | "increment" | "reset"
}

type StateType = {
  count :number
}

const initialState: StateType = {count: 0};


//状態を受け取って、新たな状態を返す関数。なので、戻り値はstateTypeか戻り値のないnever
function reducer(state: StateType, action: ActionType): StateType | never{
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initialState
    default:
      throw new Error();
  }
}

function CounterUseReducer() {
  // useReducerはstateとdispatchが格納された配列を返す
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>*</button>
    </>
  );
}

export default CounterUseReducer;