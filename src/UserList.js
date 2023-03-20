import"./App.css"
export default function Profile(){
  return(
    <div>
      <Msg/>
    </div>
  )

  function Msg(){
    return(
      <div>
        <But name="jayaprakash" one="https://i.pinimg.com/474x/12/d9/bd/12d9bd7e5dd4e7e20d908cf0129e418a.jpg"/>
        <But name="karthik"  one="https://avatarfiles.alphacoders.com/107/107750.jpg"/>
        <But name="jp"  one="https://i.pinimg.com/474x/12/d9/bd/12d9bd7e5dd4e7e20d908cf0129e418a.jpg"/>
      </div>
    )
  }
  function But(props){
    return(
      <div>
        <img  className="img-one" src={props.one}/>
        <p className="p-one">{props.name}</p>
      </div>
    )
  }
}