// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React, { memo, ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import NxWelcome from './nx-welcome';
import store from '../redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransparencyHome from './pages/TransparencyHome.tsx';
import { GlobalStyle } from './global/styled';
import { StyledFullWidthDiv } from './components/general/styled';
import { ConfigProvider } from 'antd';
import hrHR from 'antd/locale/hr_HR';
import BottomImages from './components/background/BottomImages';
import { ImageUploadTestPage } from './pages/ImageUploadTestPage';
import Login from './pages/Login.tsx';
import { ContextProvider } from 'src/contexts/ContextProvider.tsx';


export default function App() {
  return (
    <>
      <ConfigProvider
        locale={hrHR}
        theme={{
          token: {
            /* fontFamily: 'Abhaya Libre', */
            fontSize: 14, //antd font size, theme font size
          },
        }} //changes the global font
      >
        <ContextProvider>
          <GlobalStyle />
          <StyledFullWidthDiv $center>
            <Provider store={store}>
              <Router>
                <Routes>
                  <Route path="/" element={<TransparencyHome />} />
                  <Route path="/home" element={<NxWelcome title="" />} />
                  <Route
                    path="/image-upload"
                    element={<ImageUploadTestPage title="" />}
                  />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Router>
            </Provider>
          </StyledFullWidthDiv>
        </ContextProvider>
      </ConfigProvider>
    </>
  );
}
