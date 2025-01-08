import styles from './DetailCard.module.css'
import { SearchContext } from "../context/SearchContext"
import { useState, useEffect, useContext } from 'react';

const DetailCard = ({
    id
    }) => {
        const { addToWishlist } = useContext(SearchContext)

        const [ movieData, setMovieData ] = useState(null)

        useEffect(() => {
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=59d5a475554ef6dac15ec2dc29ee6014")
            .then((response)=>response.json())
            .then((data)=> {
                data = data.results.filter((movie) => movie.id == id)[0]
                setMovieData(data)
            });
        }, [])
        

        function likeMovie(event) {
            event.preventDefault();

            const eee = JSON.parse(localStorage.getItem("currentmovie"))

            let movieobj = {}
            movieobj.objid = eee.objid
            movieobj.objtitle = eee.objtitle
            movieobj.objimage = eee.objimage
            movieobj.objnote = eee.objnote

            addToWishlist(`movie${id}`, JSON.stringify(movieobj))
        };

        if(!movieData) {
            return (
                <h3>Chargement des données en cours...</h3>
            )
        }

        return(
            <div className={styles.detailcard} id={id}>
                <img className={styles.cardimage} src={`https://image.tmdb.org/t/p/w300/${movieData.poster_path}?api_key=59d5a475554ef6dac15ec2dc29ee6014`} alt="" />
                <div>
                    <h2>{movieData.original_title}</h2>
                    <div className={styles.notebox}>
                        <p className={styles.note}>{movieData.vote_average} / 10 <span className={styles.notestar}><i className="fa fa-star"></i></span></p>
                    </div>
                    <p>{movieData.overview}</p>
                    <div className={styles.buttonbox}>
                        <button type="button" onClick={likeMovie} className={styles.likebutton}><i className="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
        )
    }

export default DetailCard