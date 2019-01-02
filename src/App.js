import React, { Component } from 'react';

import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import MovieTile from './MovieTile';
import { TilesContainer } from './blocks';
import './App.css';

const URL =
  ' https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7';

class App extends Component {
  state = {
    error: false,
    movies: null
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const dataResponse = await fetch(URL, {
        headers: { 'ws-api': 2.1 }
      });
      const data = await dataResponse.json();
      const dataWithImgPath = await Promise.all(
        data.map(datum => this.getImgPath(datum))
      );
      this.setState({ movies: dataWithImgPath });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  getImgPath = async title => {
    const imgData = await fetch(
      `https://d2snwnmzyr8jue.cloudfront.net/${title.artKey}_270.jpeg`
    );
    return { ...title, imgPath: imgData.url };
  };

  render() {
    const { error, movies } = this.state;

    if (!movies) {
      return <LoadingPage />;
    }

    if (error) {
      return <ErrorPage handleClick={this.getData} />;
    }
    return (
      <TilesContainer>
        {movies.map(movie => (
          <MovieTile movie={movie} />
        ))}
      </TilesContainer>
    );
  }
}

export default App;
