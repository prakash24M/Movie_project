import { useState } from "react";
import './App.css';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
export default function Counter(){
    const[like,setlike]=useState(0);
    const[like1,setlike1]=useState(0)
    function setLike(){
      setlike(like+1)
       }
       function setLike1()
       {
        setlike1(like1+1)
      }
    return(
      <div>
              <Badge className="likeButton" onClick={()=>setLike()} badgeContent={like} color="primary">
  <ThumbUpIcon color="warning" />
</Badge>        <Badge className="likeButton" onClick={()=>setLike1()} badgeContent={like1} color="primary">
  <ThumbDownIcon color="warning" />
</Badge>

      </div>
    )
  }