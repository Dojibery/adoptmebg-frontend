import theme from './styles/theme.ts';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { HomeDesktop } from './components';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import './App.css';
import { defaultRRFConfig } from './config/defaultRRFConfig.ts';
import { createFirestoreInstance } from 'redux-firestore';

import fbConfig from './config/fbConfig.ts';

interface AppProps {
    store: object | any;
}

function App({ store }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ReactReduxFirebaseProvider
            firebase={fbConfig}
            config={defaultRRFConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <Routes>
              <Route path='/' element={<HomeDesktop/>}/>
            </Routes>
          </ReactReduxFirebaseProvider>
        </Provider>
      </ThemeProvider>

    </>
  );
}

export default App;
