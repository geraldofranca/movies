import { useMovie } from '@/presentation/hooks/movie';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Carousel from 'react-elastic-carousel';

const ResultDiscoverList: React.FC = () => {
  const { discover, listDiscover } = useMovie();

  useEffect(() => {
    async function fetchData() {
      await listDiscover();
    }
    fetchData()
  }, [])

  const items = discover.map(item => {
    return {
      id: item.id,
      title: item.title,
      overview: item.overview,
      poster_path: `${process.env.API_PREFIX_URL_IMG}${item.poster_path}`,
    };
  });

  return (
    <Container>
      <strong>Mais Populares</strong>
      <Carousel itemsToShow={4} >
        {items.map(item => {
          return (
            <header>
              <Link to={`/movie/${item.id}`}>
                <img src={item.poster_path} alt={item.title} />
              </Link>
            </header>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default ResultDiscoverList;
