import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function MovieDetail() {

    const TMDB_KEY = "db55323b8d3e4154498498a75642b381";

    const { id } = useParams()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}`);
            const data = await res.json();
            console.log(data)

            setMovie(data)
        }

        getMovie()
    }, [id])

    if (!movie) {
        return <p>Loading....</p>
    }

    return (
        <>
            <div className="movie-detail">
                <h2>{movie.title}</h2>
                <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="movie-poster" />
                <p><strong>Genre:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
                <p><strong>Released:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                <p><strong>Runtime:</strong> {movie.runtime} mins</p>
                <p><strong>Plot:</strong> {movie.overview}</p>
                <p><strong>Tagline:</strong> {movie.tagline}</p>
            </div>
        </>
    )
}