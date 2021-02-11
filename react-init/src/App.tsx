import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/movieList';
import store from './components/store';
import { Provider } from 'react-redux';

function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
          <MovieList/>
      </Provider>
    </div>
  );
}

export default App;
