import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import EncodePage from './components/EncodePage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  /* Using state to check if user is logged in */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* Using state to store validation token coming from backend */
  const [authToken, setAuthToken] = useState();

  return (
    <Routes>
      <Route
        path='/'
        element={
          <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        }
      />
      <Route
        path='/login'
        element={
          <LoginPage
            setIsLoggedIn={setIsLoggedIn}
            setAuthToken={setAuthToken}
          />
        }
      />
      <Route
        path='/encode'
        element={<EncodePage isLoggedIn={isLoggedIn} authToken={authToken} />}
      />
    </Routes>
  );
}

export default App;
