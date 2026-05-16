import { useState, useEffect } from "react"
import MovieList from "../components/MovieList"


export default function Upcoming() {
    const TMDB_KEY = "db55323b8d3e4154498498a75642b381";

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const fetchLatestMovies = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US&page=1`);
                const data = await res.json();
                setMovies(data.results || []);
                setLoading(false)
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        };
        fetchLatestMovies()
    }, []);

    return (
        <>
            <div className="home">
                {loading ? <p>Fetching ....</p> : <MovieList movies={movies} />}
            </div>
        </>
    )

}