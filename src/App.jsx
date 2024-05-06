import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import Home from './components/pages/Home'
import Explore from './components/pages/Explore'
import Genre from './components/pages/Genre'
import News from './components/pages/News'
import Movies from './components/pages/Movies'
import TVShows from './components/pages/Shows'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/news" element={<News />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<TVShows />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App