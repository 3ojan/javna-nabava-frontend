// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React, { memo, ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import NxWelcome from './nx-welcome';
import store from '../redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransparencyHome from './pages/TransparencyHome';
import { GlobalStyle } from './global/styled';
import { StyledFullWidthDiv } from './components/general/styled';
import { ConfigProvider } from 'antd';
import hrHR from 'antd/locale/hr_HR';
import BottomImages from './components/background/BottomImages';
import { ImageUploadTestPage } from './pages/ImageUploadTestPage';

export default function App() {
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

        <StyledFullWidthDiv $center>
          <Provider store={store}>
            <Router>
              <Routes>
                <Route path="/" element={<TransparencyHome />} />
                <Route path="/home" element={<NxWelcome title="" />} />
                <Route path="/image-upload" element={<ImageUploadTestPage title="" />} />
              </Routes>
            </Router>
          </Provider>
        </StyledFullWidthDiv>
      </ConfigProvider>
    </>
  );
}
