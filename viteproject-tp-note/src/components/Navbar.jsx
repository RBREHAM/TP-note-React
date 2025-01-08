import styles from './Navbar.module.css'
import { useContext } from 'react';
import { SearchContext } from "../context/SearchContext"
import { Link } from "react-router";


const Navbar = () => {
    const { setSearchFilter } = useContext(SearchContext)

    function afterSubmit() {
        setSearchFilter(document.getElementById("e").value)
    };

    return(
        <div className={styles.navbar}>
            <div className={styles.navbarpart}>
                <h1 className={styles.navlogo}>MovieList</h1>
            </div>
            <div className={styles.navbarpart}>
            <input onChange={afterSubmit} className={styles.searchbar} placeholder="Search.." type="search" name="e" id="e" />
            </div>
            <div className={styles.navbarpart}>
                <a className={styles.navbuttons} href="/" type="button">Home</a>
                <a className={styles.navbuttons} href="/wishlist" type="button">Wishlist</a>
            </div>
        </div>
    )
}

export default Navbar