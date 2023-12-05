import 'bootstrap/dist/css/bootstrap.min.css';
function Cards({poster,title,addtofav}){

 function addto(){
  addtofav({poster,title})
 } 
return(
    <>

<div className=" col-lg-3  col-md-6 col-sm-12 mt-4  ">
      <div className="card" style={{ width: "15rem", height:'28rem'}}>
        <img src={poster} className="card-img-top " style={{ height: "20rem" }}alt="..." />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <button onClick={addto} className='btn btn-primary'  >click to Favourite</button>
            
        </div>
      </div> 
    
  </div>

    </>
)


}
export default Cards;