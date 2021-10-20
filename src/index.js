import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Virtual DOM -> 내부적으로 가상DOM을 통해 랜더링 한 후 변경점만 사용자 화면에 반영함
ReactDOM.render(
  // component(컴포넌트) -> HTML을 반환하는 함수
  // JSX -> JS와 HTML 사이의 조합 
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
