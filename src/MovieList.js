import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import {API} from "./GlobalApi";
import { useNavigate } from "react-router";
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function MovieList(){
  // const movieList=INTIAL_MOVIE_LIST;
  const[movieList,setmovieList]=useState([]);

  const getMovies=()=>{
        fetch(`${API}/movies`,{method:"GET"})
   .then((data)=>data.json()).then((movies)=>setmovieList(movies))
  }
  useEffect(()=>getMovies(),[])


  const deleteMovie=(id)=>{
    console.log(id)
    fetch(`${API}/movies/${id}` ,{method:"DELETE"}).then(()=>getMovies());
  }
  
  const navigate=useNavigate();

  return (
    <div>
            <div className="movie-list">
        {movieList.map((mv) => (<Movie key={mv._id} 
        movie={mv} 
        id={mv._id} 
        deleteButton={ <IconButton style={{marginLeft:"auto"}} color="error" onClick={()=>deleteMovie(mv._id)} aria-label="delete">
  <DeleteIcon />
</IconButton>}

        editButton={ <IconButton onClick={()=>navigate(`/movies/edit/${mv._id}`)} color="secondary"  aria-label="delete">
  <EditIcon />
</IconButton>} />))}
      </div>
    </div>
  );
}

