import { useState } from "react";
import { IMovie } from "./types";
import MovieForm from "./components/MovieForm/MovieForm";
import MovieItem from "./components/MovieItem/MovieItem";
import styles from "./App.module.css"; 

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([])

  const addMovie = (title: string) => {
    const newMovie: IMovie = {
      id: Date.now(),
      title,
      isWatched: false,
      likes: 0
    }
    setMovies([...movies, newMovie])
  }

  const deleteMovie = (id: number) => {
    setMovies(movies.filter(m => m.id !== id))
  }

  const toggleWatched = (id: number) => {
    setMovies(movies.map(m => m.id === id ? { ...m, isWatched: !m.isWatched } : m))
  }

  const handleLike = (id: number, delta: number) => {
    setMovies(movies.map(m => m.id === id ? { ...m, likes: m.likes + delta } : m))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MovieTracker (TS)</h1>
      <MovieForm onAdd={addMovie} />
      <div>
        {movies.map(movie => (
          <MovieItem 
            key={movie.id} 
            movie={movie} 
            onDelete={deleteMovie} 
            onToggle={toggleWatched}
            onLike={handleLike}
          />
        ))
        }
      </div>
    </div>
  )
}

export default App;