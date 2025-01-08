import styles from './MovieCard.module.css'
import { SearchContext } from "../context/SearchContext"
import { useContext, useEffect } from 'react';

const MovieCard = ({
    title,
    image,
    note,
    id
    }) => {
        const { addToWishlist, removeFromWishlist } = useContext(SearchContext)

        let isInWishlist = false;
        if (localStorage.getItem("movie"+id) != null) {
            isInWishlist = true
        } else {
            isInWishlist = false
        }
        

        function likeMovie(event) {
            event.preventDefault();

            let movieobj = {}
            movieobj.objid = id

            console.log(movieobj)

            addToWishlist("movie"+id, JSON.stringify(movieobj))
        };

        function removeMovie(event) {
            event.preventDefault();

            console.log("removing !")
            removeFromWishlist("movie"+id)
        }

        function details(event) {
            localStorage.setItem("currentmovie", JSON.stringify({
                objtitle: title,
                objimage: image,
                objnote: note,
                objid: id
            }))
        }

        return(
            <div className={styles.moviecard} id={id}>
                <img className={styles.cardimage} src={`https://image.tmdb.org/t/p/w300/${image}?api_key=59d5a475554ef6dac15ec2dc29ee6014`} alt="" />
                <h3>{title}</h3>
                <div className={styles.notebox}>
                    <p className={styles.note}>{note} / 10 <span className={styles.notestar}><i className="fa fa-star"></i></span></p>
                </div>
                <div className={styles.buttonbox}>
                    <a type="button" href={`/details/${id}`} onClick={details} className={styles.detailsbutton}>More details</a>
                    <button type="button" onClick={isInWishlist ? removeMovie : likeMovie} className={styles.likebutton}><i className={isInWishlist ? "fa fa-trash" : "fa fa-heart"}></i></button>
                </div>
            </div>
        )
    }

export default MovieCard