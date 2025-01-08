import { useEffect, useState } from "react";
import MovieCard from './components/MovieCard'
import './Movie.css'
import { useContext } from 'react';
import { SearchContext } from "./context/SearchContext"
import DetailCard from "./components/DetailCard"


const MovieDetails = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const eee = JSON.parse(localStorage.getItem("currentmovie"))
      setData(
        <DetailCard
        id={eee.objid}
        />
      )
    
    }, [])
    

    return(
        <div>
            {data}
        </div>
    )
}

export default MovieDetails