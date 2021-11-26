import React from "react";
import { useParams } from "react-router-dom"
import { IMAGE_BASE_URL } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import NoImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/useMovieFetch";
import BreadCrum from "./BreadCrum";
import MovieInfo from "./MovieInfo";

const Movie = () => {

    const { movieId } = useParams();

    const { state: movie, loading, error} = useMovieFetch(movieId);

    if (loading) return <Spinner></Spinner>
    if (error) return <div>Something went wrong...</div>

    console.log(movie);
    return (
        <>
            <BreadCrum movieTitle={movie.original_title}></BreadCrum>
            <MovieInfo movie={movie}></MovieInfo>
        </>
    )
}

export default Movie;