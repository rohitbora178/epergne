// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import HomePage from './pages/HomePage';
import ApiDetailsPage from './pages/ApiDetailsPage';
import { lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ApiProviderContext } from './contexts/ApiContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ApiProviderContext>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:providerName/:apiName" element={<ApiDetailsPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </ApiProviderContext>
    </ThemeProvider>
  );
};

export default App;
