import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

import Dashboard from '@/presentation/pages/dashboard';
import MovieDetail from '@/presentation/pages/movie-detail';
import Genres from '@/presentation/pages/genres';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/movie/:movie_id" component={MovieDetail} />
        <Route path="/genres" component={Genres} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
