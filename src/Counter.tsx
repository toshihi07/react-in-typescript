//componentの実装にはreactをimport
import React, { useState } from "react";

//React.FCに省略出来る。
const Counter: React.FC<{}> = () => {
  const initialState:any = 0;
  //useStateで配列が戻ってくる。useStateの型引数を指定することで、numberのvalueが返ってくる。
  const  [count, setCount] = useState<number>(initialState);

  //methods
  //countを操作できるのはsetCountのみ
  //下記のはコールバック関数
  const increment = () => {
    setCount((precCount) => precCount + 1)
  };

  const decrement = () => {
    setCount((precCount) => precCount - 1)
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;

