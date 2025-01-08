import { useEffect, useState } from "react";
import MovieCard from './components/MovieCard'
import './Movie.css'
import { useContext } from 'react';
import { SearchContext } from "./context/SearchContext"


const Wishlist = () => {
    const { searchFilter } = useContext(SearchContext)

    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        let wishlist = []

        for (var objmovie in localStorage){
            if (objmovie.includes("movie") && !objmovie.includes("currentmovie")) {
                let parsedObj = JSON.parse(localStorage.getItem(objmovie))
                
                wishlist.push(parsedObj)
            }
        }
        if(searchFilter  !== 'undefined' && searchFilter  != '' && searchFilter  != null){
            wishlist = wishlist.filter((moviedata) => moviedata.objtitle.toLowerCase().includes(searchFilter.toLowerCase()))
        }
        console.log(wishlist)
        if (wishlist.length == 0) {
            wishlist = null
        } else {
            wishlist = wishlist.map(
                (movie) => {
                    return(
                        <MovieCard
                        id={movie.objid}
                        title={movie.objtitle}
                        image={movie.objimage}
                        note={movie.objnote}
                        />
                    )
                }
            )
        }
        setMovieData(wishlist)
    }, [searchFilter])

    function removeEverything() {
        localStorage.clear()
        setMovieData(null)
    }
    
    return(
        <div>
            <div className="title">
                <h2>Your favorite movies :</h2>
            </div>
            <div className="deletebox">
                <button className="deletebutton" onClick={removeEverything} type="button">Remove all favorites</button>
            </div>
            <div className="frame">
                {movieData}
            </div>
        </div>
    )
}

export default Wishlist