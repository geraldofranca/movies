import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '@/presentation/styles/global';
import Routes from './routes';
import { MovieProvider } from '@/presentation/hooks/movie';

const App: React.FC = () => (
  <Router>
    <MovieProvider>
      <Routes />
    </MovieProvider>
    <GlobalStyle />
  </Router>
);

export default App;
