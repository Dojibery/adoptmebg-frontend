import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store/createStore.ts';

// Initialize Redux Store
// ------------------------------------
// @ts-ignore
const initialState = window.___INITIAL_STATE__ || {
  // firebase: { authError: null }
};
const store = createStore(initialState);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
);
