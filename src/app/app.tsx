// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React, { memo, ReactElement } from 'react';
import { Provider } from 'react-redux';
import NxWelcome from './nx-welcome';
import store from '../redux/store';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from 'react-router-dom';
import TransparencyHome from './pages/TransparencyHome';
import { GlobalStyle } from './global/styled';
import { StyledFullWidthDiv } from './components/general/styled';
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

        <StyledFullWidthDiv $center>
          <Provider store={store}>
            {/* <PersistGate loading={null}> */}
            <Router>
              <Routes>
                <Route path="/" element={<TransparencyHome />} />
                <Route path="/home" element={<NxWelcome title="" />} />
              </Routes>
            </Router>
            {/* </PersistGate> */}
          </Provider>
        </StyledFullWidthDiv>
      </ConfigProvider>
    </>
  );
}

export default App;
