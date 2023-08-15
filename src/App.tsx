import theme from './styles/theme.ts';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { HomeDesktop } from './components';
import { Provider } from 'react-redux';
import firebase from './config/fbConfig'; // Adjust the import path according to your project structure

// Now you can use the imported 'firebase' object to access Firebase services
const firestore = firebase.firestore();

import './App.css';

interface AppProps {
    store: object | any;
}

function App({ store }: AppProps) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<HomeDesktop/>}/>
          </Routes>
        </Provider>
      </ThemeProvider>

    </>
  );
}

export default App;
