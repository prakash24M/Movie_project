import { useState } from "react";
import { Route, Routes,Link, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import UserList from "./UserList"
import AddColor from "./AddColor"
import { NotFound } from "./NotFound";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import AddMovie from "./AddMovie";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { EditMovie } from "./EditMovie";
import { BasicForm } from "./BasicForm";

export default function App(){

  const navigate=useNavigate();
  const[mode,setMode]=useState("light")
  const Theme = createTheme({
  palette: {
    mode: mode,
  },
});


  return(
    <ThemeProvider theme={Theme}>
    <Paper elevation={6} style={{minHeight:"100vh"}}>
    <div>
    <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")}>HOME</Button>
          <Button color="inherit" onClick={()=>navigate("/movies")}>MOVIES</Button>
          <Button color="inherit" onClick={()=>navigate("/userlist")}>USER LIST</Button>
          <Button color="inherit" onClick={()=>navigate("/addcolor")}>ADD COLOR</Button>
          <Button color="inherit" onClick={()=>navigate("/movies/add")}>ADD MOVIE</Button>
          <Button style={{marginLeft:"auto"}} startIcon={mode==="dark"?<Brightness7Icon/>:<Brightness4Icon/>} color="inherit" onClick={()=>setMode(mode==="dark"?"light":"dark")}>{mode==="light"?"dark":"light"}Mode</Button>
        </Toolbar>
      </AppBar>
      <div className="router-container">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<MovieList />}/>
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      <Route path="/movies/add" element={<AddMovie />}/>
      <Route path="/userlist" element={<UserList/>}/>
      <Route path="/addcolor" element={<AddColor/>}/>
      <Route path="/notfound" element={<NotFound/>}/>
      <Route path="*" element={<Navigate replace to="/notfound"/>}/>
      <Route path="/flims" element={<Navigate replace to="/movies"/>}/>
      <Route path="/movies/edit/:id" element={<EditMovie />}/>
      <Route path="/form" element={<BasicForm/>}/>
    </Routes>
    </div>
    </div>
    </Paper>
    </ThemeProvider>
  )
}
function Home(){
  return(
    <h1>WELCOME TO MOVIE APP</h1>
  )
}