import { createContext } from "react";
import { useState } from "react"

export const SearchContext = createContext(undefined);

const SearchProvider = ({children}) => {
    const [searchFilter, setSearchFilter] = useState(null)
    const [wishlist] = useState([])

    function addToWishlist(movieid, movieobj){
        localStorage.setItem(movieid, movieobj);
    }

    function removeFromWishlist(movieid){
        localStorage.removeItem(movieid);
    }

    return(
        <SearchContext.Provider value={{ searchFilter, setSearchFilter, wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider