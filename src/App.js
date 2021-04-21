import React from 'react'
// import './App.css'
// import ListOfGifs from './components/ListOfGifs'
import SearchResults from './pages/SearchResults/'
import Home from './pages/Home/'
import Detail from './pages/Detail/'

import { Route, Link } from 'wouter'
import { GifContextProvider } from './context/GifsContext'

function App() {
  const headerStyles = 'w-full fixed top-0 text-4xl font-semibold bg-gray-900 py-5 text-center text-white z-50 cursor-pointer'
  const appStyles = "App container mx-auto my-28"
  const contentStyles = "bg-"

  return (
    <div className={contentStyles}>
      <header className={headerStyles}>
        <Link to="/" >
          <h1>Giffy</h1>
        </Link>
      </header>
      <section className={appStyles}>

        <GifContextProvider>
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
        </GifContextProvider>

      </section>
    </div>
  );
}

export default App;
