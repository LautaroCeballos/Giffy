import React from 'react';
import './App.css';
// import ListOfGifs from './components/ListOfGifs';
import SearchResults from './pages/SearchResults/';
import Home from './pages/Home/'
import Detail from './pages/Detail/'

import { Route, Link } from 'wouter'

function App() {
  return (
    <div className="App">
      <Link to="/" ><h1>Giffy</h1></Link>
      <section className="App-content">
        <Route
          component={Home}
          path="/"
        />
        <Route 
          path="/search/:keyword" 
          component={SearchResults}
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />

      </section>
    </div>
  );
}

export default App;
