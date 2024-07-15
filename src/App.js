import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Dashboard from './components/Dashboard';
import ActivityLog from './components/ActivityLog';
import Profile from './components/Profile';
import Rewards from './components/Rewards';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<ActivityLog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
