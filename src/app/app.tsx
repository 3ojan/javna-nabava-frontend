// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React, { memo, ReactElement } from 'react';
import { Provider } from 'react-redux';
import NxWelcome from './nx-welcome';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from 'react-router-dom';
import TransparencyHome from './pages/TransparencyHome';
import { GlobalStyle } from './global/styled';
import { FullWidthCol } from './pages/styled';
import { FullWidthDiv } from './components/general/styled';

export function App() {
  return (
    <>
      <GlobalStyle />
      {/* <div style={{ display: 'flex', height: '100%' }}> */}

      <FullWidthDiv $center>
        <Provider store={store}>
          {/* <PersistGate loading={null}> */}
          <Router>
            <Routes>
              <Route path="/" element={<TransparencyHome title="" />} />
              <Route path="/home" element={<NxWelcome title="" />} />
            </Routes>
          </Router>
          {/* </PersistGate> */}
        </Provider>
      </FullWidthDiv>

      {/* </div> */}
    </>
  );
}

export default App;
