import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom'
import Favourite from './component/favourate';
import Cards from './component/Card';
import MovieFooter from './component/footer';

function App() {
  const [val, setVal] = useState('');
  const [arr, setArr] = useState([]);
  const[fav,setFav]=useState([]);

  function change(e) {
    setVal(e.target.value);
  }
 
  function addFav(movie){
  var neWarr=[...fav,movie];
  setFav(neWarr);
  }
useEffect(()=>{
  async function fetchData(){
    let data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ef3a9515&s=${val}`);
    let jsonData = await data.json();
    setArr(jsonData.Search)
  }
  fetchData()
})


  return (
    <>
      <BrowserRouter>
      <nav className=" navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favourite">
            Favourite
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <Routes>
          <Route path='/' element={
          <div className="container text-center mt-3">
            <input style={{width:'29rem'}}  className="fs-4 text-center rounded shadow" type="text" placeholder='Enter movie name' onChange={change} />
            {/* <button onClick={fetchData} >Search</button> */}
            <div className="row border border-warning mt-3">
              {
                arr && arr.map((a) => {
                  return (<>
                    <Cards poster={a.Poster} title={a.Title} addtofav={addFav} />


                  </>)
                })

              }
            </div>
          </div>
          } />
        
          <Route path='/favourite' element={
            <div className="container">
          <div className='row'>
          <Favourite favour={fav} /></div>
          </div>
          } />
      
        </Routes>

        <MovieFooter/>
      </BrowserRouter>


    </>
  )
}
export default App;