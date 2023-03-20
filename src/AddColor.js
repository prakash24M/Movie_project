import { useState } from "react"
  export default function Colorbox(){
    return(
      <div>
      <TextChange/>
      </div>
    )
    function TextChange(){
      const[color,textcolor]=useState("red")
      const [defaultcolor,setcolorlist]=useState(["purple","yellow","green"])
      const style={
        fontSize:"35px",
        backgroundColor:color,
      }
      const styles={backgroundColor:color}
      return(
        <div>
        <div className="color-con">
          <input className="input-one" type="text" style={style} value={color} onChange={(e)=>textcolor(e.target.value)}/>
          <button className="but-one" onClick={()=>setcolorlist([...defaultcolor,color]) }style={styles}>ADD COLOR</button>
        </div>
        {defaultcolor.map((clr)=><Addcolor color={clr}/>)}
        <Addcolor/>
        </div>
  
      )
    }
  }
  function Addcolor({color}){
    const styles={
      height:"50px",
      width:"437px",
      backgroundColor:color,
      marginTop:"10px",
    }
    return(
      <div style={styles}>

      </div>
    )
  }