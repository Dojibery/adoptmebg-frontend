import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store/createStore.ts';

// Initialize Redux Store
// ------------------------------------
// @ts-ignore
const initialState = {
  firebase: { authError: null }
};
const store = createStore(initialState);

export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/adoptmebg-frontend/'}>
      <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
);
