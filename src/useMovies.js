import { useEffect, useState } from "react";
const KEY = "647f5a06";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    async function handleMovies() {
      if (query.length < 3) {
        setMovies([]);
        setError("");
        setIsLoading(false); // Ensure loader is off when query is less than 3
        return;
      }

      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          {
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    handleMovies();

    return function () {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
