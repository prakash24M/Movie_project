// import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./GlobalApi";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"
// import { Maximize } from "@mui/icons-material";

const formValidationSchema=yup.object({
  name:yup.string().required("please fill the following"),
  poster:yup.string().required("please fill the following"),
  rating:yup.number().required("please fill the followingw ").min(4,"put above 4 rating").max(10,"put below 10 rating"),
  summary:yup.string().required("please fill the following").min(20,"min 20 character"),
  trailer:yup.string().required("please fill the following").min(20,"minimum 20 character"),
})



export default function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleChange,handleSubmit,values, handleBlur,errors,touched}=
  useFormik({
    initialValues:{
      name:"",
      poster:"",
      rating:"",
      summary:"",
      trailer:"",
      },

    validationSchema: formValidationSchema,
    onSubmit:(values)=>{
      console.log(values);
      addMovie(values);
    },
    
  });
  const navigate = useNavigate();

 const addMovie=(newMovie) => {
  // const newMovie = {
  //   name,
  //   poster,
  //   rating,
  //   summary,
  //   trailer,
  // };
  // console.log(newMovie);
  // setmovieList([...movieList, newMovie]);
  fetch(`${API}/movies`, {
    method: "POST", body: JSON.stringify(newMovie), headers: {
      "Content-Type": "application/json",
    }
  }).then(() => navigate("/movies"));
}

  return (
    <div>
      <form onSubmit={handleSubmit}  className="add-movie-form">
        <TextField
        name="name" 
        onChange={handleChange}
        onBlur={handleBlur} 
        id="outlined-basic" 
        label="Name"
        value={values.name}
        error={errors.name&&touched.name?errors.name:""}
        helperText={errors.name&&touched.name?errors.name:""}
        variant="outlined" />
       

        <TextField  
        name="poster" 
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Poster" 
        value={values.poster}
        error={errors.poster&&touched.poster?errors.poster:""}
        helperText={errors.poster&&touched.poster?errors.poster:""}
        variant="outlined" />
        

        <TextField
        name="rating" 
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Rating"
        value={values.rating}
        error={errors.rating&&touched.rating?errors.rating:""}
        helperText={errors.rating&&touched.rating?errors.rating:""}
        variant="outlined" />
        

        <TextField 
        name="summary" 
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic" 
        label="Summary" 
        value={values.summary}
        error={errors.summary&&touched.summary?errors.summary:""}
        helperText={errors.summary&&touched.summary?errors.summary:""}
        variant="outlined" />
        

        <TextField 
        name="trailer" 
        onChange={handleChange}
        onBlur={handleBlur} 
        id="outlined-basic" 
        value={values.trailer}
        label="Trailer"
        error={errors.trailer&&touched.trailer?errors.trailer:""}
        helperText={errors.trailer&&touched.trailer?errors.trailer:""}
        variant="outlined" />
        

         <Button type="submit" variant="outlined" >Add Movie</Button> 
      </form>

    </div>
  );
}