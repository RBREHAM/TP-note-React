import { useState } from 'react'
import './App.css'
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetail"
import Wishlist from './Wishlist'
import Navbar from './components/Navbar'
import SearchProvider from './context/SearchContext'
import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <SearchProvider>
        <Navbar/>

        <Routes>
          <Route path='/' element={<MovieList/>}></Route>
          <Route path='/details/:id' element={<MovieDetails/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>
      </SearchProvider>
    </>
  )
}

export default App
