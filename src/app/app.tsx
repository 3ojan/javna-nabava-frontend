// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ConfigProvider } from 'antd';
import hrHR from 'antd/locale/hr_HR';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from '../redux/store';
import { StyledFullWidthDiv } from './components/general/styled';
import { GlobalStyle } from './global/styled';
import NxWelcome from './nx-welcome';
import TransparencyHome from './pages/TransparencyHome.tsx';
// import BottomImages from './components/background/BottomImages';
import { ContextProvider } from 'src/contexts/ContextProvider.tsx';

export default function App() {
  return (
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
                {/* <Route
                  path="/image-upload"
                  element={<ImageUploadTestPage title="" />}
                /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/register" element={<CreateProfile />} /> */}
              </Routes>
            </Router>
          </Provider>
        </StyledFullWidthDiv>
      </ContextProvider>
    </ConfigProvider>
  );
}
