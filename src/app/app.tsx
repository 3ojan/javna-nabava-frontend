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
import TransparencyHome from './components/pages/TransparencyHome';

export function App() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
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
    </div>
  );
}

export default App;
