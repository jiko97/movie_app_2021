import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  // component(컴포넌트) -> HTML을 반환하는 함수
  // JSX -> JS와 HTML 사이의 조합 
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
