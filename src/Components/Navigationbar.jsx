import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Navigationbar = () => {
  const navigation = useNavigate()
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=>navigation('/')}>Lifecycle</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=>navigation('/mounting')}>Mounting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=>navigation('/updating')}>Updating</a>
          </li>
         

          <li className="nav-item">
            <a href="#" aria-current='page' className="nav-link active" onClick={()=>navigation('/unmounting')}>Unmounting</a>
          </li>
         
         
         
         
            
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navigationbar;