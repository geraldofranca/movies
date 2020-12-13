import Footer from "@/presentation/components/Footer";
import Navbar from "@/presentation/components/Navbar";
import Search from "@/presentation/components/Search";
import React from "react";
import ResultMovieList from "./components/result-movie-list/result-movie-list";
import ResultTrendingList from './components/result-trending-list/result-trendig-list';
import ResultDiscoverList from './components/result-discover-list/result-discover-list';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <Search placeholder="digite um título de um filme para pesquisar"/>
      <ResultMovieList />
      <ResultTrendingList />
      <ResultDiscoverList />
      <Footer />
    </>
  )
};

export default Dashboard;
