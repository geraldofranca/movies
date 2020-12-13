import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <header>
        <Link to="/">
          <h1>ClickMovies</h1>
        </Link>
        <nav>
          <Link to="/genres">Gêneros</Link>
          <Link to="/series">Séries</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
