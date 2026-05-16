import MovieCard from "./MovieCard"

export default function MovieList({movies}) {

    if(movies.length === 0){
        return <p>No Movies Found !!!</p>
    }

    return (
        <>
            <div className="movie-list">
                {movies.map((movie) =>(
                    <MovieCard key={(movie.id)} movie = {movie}/>
                ))}
            </div>
        </>
    )
}