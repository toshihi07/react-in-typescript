import React from 'react';

interface AppProps {
  message: string;
  name: string
}

//AppPropsを型引数に指定。こうすることで、引数の型指定を省ける。
const App: React.FunctionComponent<AppProps> = ({message}) => {
  //プロパティを取り出すjavascriptの分割代入。
  //何でも受け取れる状態ではtypescriptを導入する意味がない。
  
  return <div>{ message }</div>;
};

export default App;
