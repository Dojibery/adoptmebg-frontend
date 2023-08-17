import { applyMiddleware, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.ts';

export default function createReduxStore(initialState = {}) {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  if (window && window.location && window.location.hostname === 'localhost') {
    // @ts-ignore
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================
  // const middleware = [
  // thunk.withExtraArgument({ getFirebase,
  //   getFirestore },),
  // This is where you add other middleware like redux-observable
  // ];

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = legacy_createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      // reduxFirestore(fbConfig),
      ...enhancers)
  );

  return store;
}
