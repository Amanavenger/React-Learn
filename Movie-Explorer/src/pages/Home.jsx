import { useState, useEffect, useRef } from "react"
import MovieList from "../components/MovieList"

export default function Home() {

    const TMDB_KEY = "db55323b8d3e4154498498a75642b381";

    const [movies, setMovies] = useState([])
    const searchRef = useRef()
    const [loading, setLoading] = useState(false)


    const searchMovies = async (query) => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${query}`);
            const data = await res.json();
            setMovies(data.results || []);
        } catch (error) {
            console.error("Failed to search movies", error);
        }
    };

    const handleSearch = async (e) =>{
        e.preventDefault()

        const query = searchRef.current.value.trim();

        if(!query)return

        searchMovies(query)
    }

    useEffect(() => {
        const fetchLatestMovies = async () => {
        try {
            setLoading(true)
            const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=en-US&page=1`);
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
                <form onSubmit={handleSearch}>
                    <input className="searchInput" placeholder="Search for a movie..." ref={searchRef}/>
                    <button type="submit">Search 🔎</button>
                </form>
                {loading ? <p>Fetching ....</p> : <MovieList movies={movies} />}
                
            </div>
        </>
    )

     
}