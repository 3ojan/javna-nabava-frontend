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
import { BackgroundDiv, GlobalStyle } from './global/styled';
import { FullWidthDiv } from './components/general/styled';
import { ConfigProvider } from 'antd';
import hrHR from 'antd/locale/hr_HR';
import BottomImages from './components/background/BottomImages';

export function App() {
  return (
    <>
      <ConfigProvider
        locale={hrHR}
        theme={
          {
            // token: { fontFamily: 'Abhaya Libre' },
          }
        } //changes the global font
      >
        <GlobalStyle />
        {/* <div style={{ display: 'flex', height: '100%' }}> */}

        <BackgroundDiv>
          <BottomImages />
        </BackgroundDiv>

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
      </ConfigProvider>
    </>
  );
}

export default App;
