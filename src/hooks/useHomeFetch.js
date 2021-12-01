import { useState, useEffect } from "react";
import API from "../API.js"; 
import { isPersistedState } from "../helpers.js";

//create initial state
const initialSate = {

    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [state, setState] = useState(initialSate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log(searchTerm);
    const fetchMovies = async(page, searchTerm = "") => {

        try {

            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            //now set state
            setState(prev => ({

                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))


        } catch (err) {

            setError(true);

        }

        setLoading(false);
    }

    //initial render
    useEffect(() => {

        if(!searchTerm) {

            const sessionState = isPersistedState("homeState");

            if (sessionState) {

                console.log("grabbing from session storage")
                setState(sessionState);
                return;
            }
        }

        console.log("grabbing from API")
        setState(initialSate)
        fetchMovies(1, searchTerm)
    }, [searchTerm]);
    console.log(state)

    useEffect(() => {

        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page])

    //write to session storage
    useEffect(() => {

        if(!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state))
    }, [searchTerm, state])

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
}