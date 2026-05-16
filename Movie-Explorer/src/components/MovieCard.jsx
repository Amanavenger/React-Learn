import { Link } from "react-router-dom"

export default function MovieCard({movie}) {
    return (
        <>
            <div className="movie-card">
                <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
                <p>{movie.release_date}</p>
                <Link to={`/movie/${movie.id}`}>Details</Link>
            </div>
        </>
    )
}