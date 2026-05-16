
import { useState, useEffect } from "react"

const TMDB_KEY = "db55323b8d3e4154498498a75642b381";

export function useMovies(endpoint) {
    const [movies,  setMovies]  = useState([])
    const [loading, setLoading] = useState(false)
    const [error,   setError]   = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const res  = await fetch(
                    `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${TMDB_KEY}&language=en-US&page=1`
                )
                const data = await res.json()
                setMovies(data.results || [])
            } catch (err) {
                console.error("Fetch failed", err)
                setError("Failed to load movies")
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [endpoint]) 

    return { movies, loading, error } 
}