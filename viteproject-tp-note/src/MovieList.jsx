import { useEffect, useState } from "react";
import MovieCard from './components/MovieCard'
import './Movie.css'
import { useContext } from 'react';
import { SearchContext } from "./context/SearchContext"


const MovieList = () => {
    const { searchFilter } = useContext(SearchContext)

    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=59d5a475554ef6dac15ec2dc29ee6014")
        .then((response)=>response.json())
        .then((data)=> {
            if(searchFilter  !== 'undefined' && searchFilter  != '' && searchFilter  != null){
                data.results = data.results.filter((moviedata) => moviedata.original_title.toLowerCase().includes(searchFilter.toLowerCase()))
            }
            if (data.length == 0) {
                data = null
            } else {
                data = data.results.map((movie) => {
                    return(
                        <MovieCard
                        title={movie.original_title}
                        image={movie.poster_path}
                        note={movie.vote_average}
                        id={movie.id}
                        />
                    )
                });
            }
            
            setMovieData(data)
        })

    }, [searchFilter])
    
    return(
        <div>
            <div className="title">
                <h2>Popular films right now :</h2>
            </div>
            <div className="frame">
                {movieData}
            </div>
        </div>
    )
}

export default MovieList