import { IMovie } from "../../types";
import styles from './styles.module.css';

interface IMovieItemProps {
  movie: IMovie;
  onDelete: (id: number) => void
  onToggle: (id: number) => void
  onLike: (id: number, delta: number) => void
}

const MovieItem = ({ movie, onDelete, onToggle, onLike }: IMovieItemProps) => {
  return (
    <div className={styles.card}>
      <div className={movie.isWatched ? styles.watched : ""}>
        <h3>{movie.title}</h3>
        <label>
          <input 
            type="checkbox" 
            checked={movie.isWatched} 
            onChange={() => onToggle(movie.id)} 
          />
          {movie.isWatched ? " просмотрено" : " не смотрел"}
        </label>
      </div>
      <div>
        <span>Лайки: {movie.likes} </span>
        <button onClick={() => onLike(movie.id, 1)}>👍</button>
        <button onClick={() => onLike(movie.id, -1)}>👎</button>
        <button onClick={() => onDelete(movie.id)}>❌</button>
      </div>
    </div>
  )
}

export default MovieItem;