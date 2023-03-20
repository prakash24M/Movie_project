import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "./GlobalApi";
import { EditMovieForm } from "./EditMovieForm";

export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json()).then((movies) => setMovie(movies));
  }, [id]);
  return (
    <div>
      {/* <pre>{JSON.stringify(movie,null,2)}</pre> */}
      {movie ? <EditMovieForm movie={movie} /> : "LODING..."}
    </div>
  );
}
