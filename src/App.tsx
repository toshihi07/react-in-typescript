import React from 'react';


//optiononalnalな引数にしないと、index.tsxxで値を渡さなければエラーになる。
interface AppProps {
  message?: string;
}

//AppPropsを型引数に指定。こうすることで、引数の型指定を省ける。
//型引数<AppProps>をしていしないと、AppProps内の型指定が機能しない。言い換えればアノテーションを掛けなければならない。
const App: React.FunctionComponent = ({message}) => {
  //プロパティを取り出すjavascriptの分割代入。
  //何でも受け取れる状態ではtypescriptを導入する意味がない。
  
  return <div>{ message }</div>;
};

//外から値が来なかったときにはこの値が採用される。必ずAppProps内にメンバが定義されていなければならない。
App.defaultProps = {
  message: 123,
  description: 'This is app component'
}

export default App;
