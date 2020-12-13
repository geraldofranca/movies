import Navbar from '@/presentation/components/Navbar';
import { useMovie } from '@/presentation/hooks/movie';
import React, { useEffect } from 'react';
import { FiClock, FiCalendar, FiGlobe, FiAlignJustify, FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Aside, Main, MovieInfo, ContainerSimilar, CardContainer, Card, Back } from './styles'

interface MovieParams {
  movie_id: string;
}

const MovieDetail: React.FC = () => {
  const { searchMovieDetail, movieDetail, movieSimilar } = useMovie();
  const { params } = useRouteMatch<MovieParams>();

  useEffect(() => {
    async function fetchData() {
      await searchMovieDetail(params.movie_id);
    }
    fetchData()
  }, [params.movie_id])

  return (
    <>
      <Navbar />
      <Back>
        <Link to="/">
          <span>
            <FiChevronLeft size={16} />Voltar
          </span>
        </Link>
      </Back>
      <Container>
        <Aside>
          <img src={movieDetail.poster_path} alt={movieDetail.title} />
        </Aside>

        <Main>
          <ul>
            <h1>{movieDetail.title}</h1>
            <MovieInfo>
              <span>{movieDetail.overview}</span>
              <ul>
                <li>
                  <FiClock />
                  <strong> Duração</strong>: {movieDetail.runtime} minutos
                </li>
                <li>
                  <FiCalendar />
                  <strong> Lançamento</strong>: {movieDetail.release_date}
                </li>
                <li>
                  <FiGlobe />
                  <strong> Idioma original:</strong> {movieDetail.original_language}
                </li>
                <li>
                  <FiAlignJustify />
                  <strong> Título original:</strong> {movieDetail.original_title}
                </li>
              </ul>
            </MovieInfo>
          </ul>
        </Main>
      </Container>
      <ContainerSimilar>
        <h1>Títulos semelhantes</h1>
        <CardContainer>
          {movieSimilar.map(item => {
            return (<Card>
              <Link to={`/movie/${item.id}`}>
                <img src={item.poster_path} alt={item.title} />
              </Link>
            </Card>)
          })}
        </CardContainer>
      </ContainerSimilar>
    </>
  )
}

export default MovieDetail;
