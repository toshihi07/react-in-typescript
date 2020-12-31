//componentの実装にはreactをimport
import React, { useEffect,useRef, useState } from "react";

const array: Array<number> = [1,2,3]
const readOnlyArray: ReadonlyArray<number> = [1,2,3]

//React.FCに省略出来る。
const Counter: React.FC<{}> = () => {
  const initialState:any = 0;
  //useStateで配列が戻ってくる。useStateの型引数を指定することで、numberのvalueが返ってくる。
  const  [count, setCount] = useState<number>(initialState);

  //methods
  //countを操作できるのはsetCountのみ
  //下記のはコールバック関数
  //prevで前回のという意味
  const increment = () => {
    setCount((precCount) => precCount + 1)
  };

  const decrement = () => {
    setCount((precCount) => precCount - 1)
  };

  const renderTimes = useRef(0);
  //useEffectで登録されている関数は再レンダリングされる度に実行される。
  useEffect(() =>{renderTimes.current = renderTimes.current + 1})
  // function useRef<T>(initialValue: T): MutableRefObject<T>;

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
  <div>This component was re-rendered: {renderTimes.current}</div>
    </div>
  );
};

export default Counter;



