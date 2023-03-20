import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {API} from "./GlobalApi";

export function MovieDetails() {
  const { id } = useParams();
  const [movie,setMovie] = useState([]);
  useEffect(()=>{
    fetch(`${API}/movies/${id}`)
   .then((data)=>data.json()).then((movies)=>setMovie(movies))
  },[id])
  const navigate = useNavigate();
  const style = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return (

    <div className="movie-detail-container">
      <iframe width="100%" height="570" src={movie.trailer} title="Iron Man 2 Trailer #2 (2010) - Marvel Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={style} className="movie-rating">{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
