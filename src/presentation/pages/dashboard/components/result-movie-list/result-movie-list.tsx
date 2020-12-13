import { useMovie } from '@/presentation/hooks/movie';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, CardContainer, Card, Button } from './styles';

const ResultMovieList: React.FC = () => {
  const { movies } = useMovie();

  const items = movies.map(item => {
    return {
      id: item.id,
      title: item.title,
      overview: item.overview,
      poster_path: `${process.env.API_PREFIX_URL_IMG}${item.poster_path}`,
    };
  });

  return (
    <Container>
      {items.length > 0 && <strong>Resultado da busca</strong>}
      <CardContainer>
        {items.map(item => {
          return (<Card>
            <header>
              <Link to={`/movie/${item.id}`}>
                <img src={item.poster_path} alt={item.title} />
              </Link>
            </header>
          </Card>)
        })}

      </CardContainer>
    </Container>
  )
}

export default ResultMovieList;
