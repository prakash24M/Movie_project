import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Card, CardActions, CardContent } from "@mui/material";

export function Movie({ movie, id,deleteButton,editButton}) {
  const style = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const summaryStyle = {
    display: show === true ? "block" : "none",
  };
  const navigate = useNavigate();


  return (
    <Card className="movie-container">
      <img src={movie.poster} className="movie-poster" />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}      <Badge  className="likeButton"   color="primary">
      <InfoIcon onClick={()=>navigate("/movies/" + id)}/>
</Badge>
<Badge className="likeButton"  color="primary">
{show?<ExpandLessIcon onClick={() => setShow(!show)}/>:<ExpandMoreIcon onClick={() => setShow(!show)}/>} 

</Badge></h2>
        <p style={style} className="movie-rating">{movie.rating}</p>

      </div>

      {/* <button onClick={() => navigate("/movies/" + id)}>info</button> */}
      {/* <button onClick={() => setShow(!show)}>text description</button> */}
      <p style={summaryStyle} className="movie-summary">{movie.summary}</p>
      </CardContent>
      <CardActions>
      <Counter />{deleteButton}{editButton}
      </CardActions>
    </Card>
  );
}
