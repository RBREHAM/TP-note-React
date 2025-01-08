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
            if (objmovie.includes("movie")) {
                let parsedObj = JSON.parse(localStorage.getItem(objmovie))
                
                wishlist.push(parsedObj)
            }
        }
        console.log(wishlist)
        if(searchFilter  !== 'undefined' && searchFilter  != '' && searchFilter  != null){
            wishlist = wishlist.filter((moviedata) => moviedata.objtitle.toLowerCase().includes(searchFilter.toLowerCase()))
        }
        if (wishlist.length == 0) {
            wishlist = null
        } else {
            wishlist = wishlist.map(
                (movie) => {
                    return(
                        <MovieCard
                        title={movie.objtitle}
                        image={movie.objimage}
                        note={movie.objnote}
                        id={movie.objid}
                        />
                    )
                }
            )
        }
        setMovieData(wishlist)
        console.log(localStorage)
    }, [searchFilter])

    function removeEverything() {
        localStorage.clear()
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