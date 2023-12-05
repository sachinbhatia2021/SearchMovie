import { useState } from "react";

function Favourite({favour}){
const[newfav,setNweF]=useState(favour);

function deleteElement(index){
var deletefavarr=[...newfav];
deletefavarr.splice(index,1);
setNweF(deletefavarr);
}
return(
    <>
        {
            newfav.length>=1?(
newfav.map((a,i)=>{
return(
    <>

    <div className=" col-lg-3  col-md-6 col-sm-12 mt-4  ">
      <div className="card" style={{ width: "15rem", height:'28rem'}}>
        <img src={a.poster} className="card-img-top " style={{ height: "20rem" }}alt="..." />
        <div className="card-body">
          <h5 className="card-title">{a.title}</h5>
        <button onClick={()=>{deleteElement(i)}} className="btn btn-danger" >Remove</button>
            
        </div>
  </div>

    </div>



    </>
)
})
            ):(
                <p> movie not found </p>
            )
        }
    </>
)

}
export default Favourite;