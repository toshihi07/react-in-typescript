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

  //nullを代入して初期化。null!をつけることで、null出ないことを明示的に書く。nullになることは今回の場合にはありえないから、typescriptのnonnullasertionをつける。
  const ref = useRef<HTMLInputElement>(null!)

  const focusInput = () => {
    const current = ref.current;
      current.focus();
  }



  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
  <div>This component was re-rendered: {renderTimes.current}</div>
  <label htmlFor="text">名前</label>
  <input type='text' name='txt' placeholder='入力欄' id="text" ref={ref} />
  <button onClick={focusInput}>フォーカス</button>
    </div>
  );
};

export default Counter;

