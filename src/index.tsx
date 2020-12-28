import React from 'react';
import ReactDOM from 'react-dom';
//Appcomponentの読み込み
import App from './App';

type foo = JSX.IntrinsicAttributes;


//index.htmlのid=rootの部分を<App />に置き換えますよと書いてある。
//子コンポーネントであるappコンポーネントにmessageという文字列データを渡した。これによって、appコンポーネントの側からmessageを取り出せるようになった。
//typescriptでは、データを渡す際に型を指定しないといけない。例外はIntrinsicAttributesでreactに指定されているkeyのみ。追加はできる。
ReactDOM.render(<App />, document.getElementById('root'));
