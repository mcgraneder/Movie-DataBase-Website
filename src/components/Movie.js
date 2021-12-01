import React from "react";
import { useParams } from "react-router-dom"
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import NoImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/useMovieFetch";
import BreadCrum from "./BreadCrum";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

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
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}></MovieInfoBar>
        
        <Grid header="Actors">
            {movie.actors.map(actor => (
                <Actor key={actor.credit_id} name={actor.name} character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}></Actor>
            ))}
        </Grid>
        </>
    )
}

export default Movie;